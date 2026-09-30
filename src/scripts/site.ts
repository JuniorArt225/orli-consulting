/**
 * Comportements communs à toutes les pages. Aucun framework : chaque bloc
 * s'active seulement si son balisage est présent, et la page reste
 * entièrement lisible si ce script ne se charge pas.
 */

import { announce } from '@/scripts/announce';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------------------------------------------------------------------------
   Double trait comptable : il se trace quand le mot arrive à l'écran
--------------------------------------------------------------------------- */
function initReveals() {
  const targets = document.querySelectorAll<HTMLElement>('.double-rule');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-drawn'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-drawn');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.15 },
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------------------------
   En-tête : ombre dès qu'on défile, s'efface en descendant, revient en remontant
--------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    header.dataset.scrolled = String(y > 8);

    const busy =
      document.documentElement.dataset.menu === 'open' ||
      header.contains(document.activeElement) ||
      header.querySelector('[data-dropdown-toggle][aria-expanded="true"]');

    if (busy || y < 240) header.dataset.hidden = 'false';
    else if (y > lastY + 8) header.dataset.hidden = 'true';
    else if (y < lastY - 8) header.dataset.hidden = 'false';

    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}

/* ---------------------------------------------------------------------------
   Menu déroulant « Nos pôles » (desktop)
--------------------------------------------------------------------------- */
function initDropdowns() {
  document.querySelectorAll<HTMLButtonElement>('[data-dropdown-toggle]').forEach((toggle) => {
    const panel = document.getElementById(toggle.getAttribute('aria-controls') ?? '');
    const root = toggle.closest<HTMLElement>('[data-dropdown]');
    if (!panel || !root) return;

    let hoverTimer: number | undefined;
    const setOpen = (open: boolean) => {
      toggle.setAttribute('aria-expanded', String(open));
      panel.dataset.open = String(open);
    };

    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

    // Au survol (souris uniquement), avec un léger délai pour ne pas ouvrir au passage.
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    root.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse' || !finePointer.matches) return;
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => setOpen(true), 90);
    });
    root.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'mouse') return;
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => setOpen(false), 220);
    });

    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    root.addEventListener('focusout', (event) => {
      if (!root.contains(event.relatedTarget as Node | null)) setOpen(false);
    });

    document.addEventListener('click', (event) => {
      if (!root.contains(event.target as Node)) setOpen(false);
    });
  });
}

/* ---------------------------------------------------------------------------
   Menu mobile plein écran
--------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.getElementById('menu-mobile');
  if (!toggle || !panel) return;

  const label = toggle.querySelector<HTMLElement>('[data-menu-label]');
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.dataset.open = String(open);
    document.documentElement.dataset.menu = open ? 'open' : 'closed';
    document.querySelectorAll<HTMLElement>('#contenu, body > footer, body > a[href="#contenu"]').forEach((region) => (region.inert = open));
    if (label) label.textContent = open ? 'Fermer le menu' : 'Ouvrir le menu';
    if (open) panel.querySelector<HTMLElement>('a, button')?.focus({ preventScroll: true });
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

  panel.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.dataset.open === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 1280px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

/* ---------------------------------------------------------------------------
   Copier un email / un numéro en un clic
--------------------------------------------------------------------------- */
function initCopy() {
  document.addEventListener('click', async (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-copy]');
    if (!button) return;
    const value = button.dataset.copy ?? '';
    try {
      await navigator.clipboard.writeText(value);
      button.dataset.copied = 'true';
      announce(`${value} copié dans le presse-papiers`);
      window.setTimeout(() => (button.dataset.copied = 'false'), 1800);
    } catch {
      announce('Copie impossible : sélectionnez le texte manuellement');
    }
  });
}

/* ---------------------------------------------------------------------------
   Formulaires : validation en français, envoi sans rechargement, cachet « Reçu »
--------------------------------------------------------------------------- */
type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function messageFor(field: Field): string {
  const { validity } = field;
  if (validity.valueMissing) return field.dataset.missing ?? 'Ce champ est requis.';
  if (validity.typeMismatch && field.type === 'email') return 'Adresse incomplète — par exemple nom@entreprise.ci';
  if (validity.patternMismatch) return field.dataset.mismatch ?? 'Format non reconnu.';
  if (validity.tooShort) return 'Un peu court : ajoutez quelques précisions.';
  return 'Vérifiez ce champ.';
}

function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-orli-form]').forEach((form) => {
    const root = form.closest<HTMLElement>('[data-form-root]') ?? form;
    const fields = Array.from(form.querySelectorAll<Field>('input, select, textarea')).filter(
      (field) => field.type !== 'hidden' && field.name !== '_gotcha',
    );
    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
    const errorBox = root.querySelector<HTMLElement>('[data-form-error]');
    const success = root.querySelector<HTMLElement>('[data-form-success]');

    form.noValidate = true;

    const check = (field: Field) => {
      const error = form.querySelector<HTMLElement>(`#${field.id}-error`);
      if (field.checkValidity()) {
        field.removeAttribute('aria-invalid');
        if (error) error.hidden = true;
        return true;
      }
      field.setAttribute('aria-invalid', 'true');
      if (error) {
        error.textContent = messageFor(field);
        error.hidden = false;
      }
      return false;
    };

    fields.forEach((field) => {
      field.addEventListener('blur', () => {
        if (field.value) field.dataset.touched = 'true';
        if (field.dataset.touched) check(field);
      });
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') check(field);
      });
      field.addEventListener('change', () => {
        if (field.tagName === 'SELECT') {
          field.dataset.touched = 'true';
          check(field);
        }
      });
    });

    // Pré-sélection du pôle depuis l'URL (?pole=audit) quand aucun choix n'est déjà fait.
    const poleParam = new URLSearchParams(window.location.search).get('pole');
    const poleSelect = form.querySelector<HTMLSelectElement>('select[name="pole"]');
    if (poleParam && poleSelect && !poleSelect.value) {
      const option = poleSelect.querySelector<HTMLOptionElement>(`option[data-slug="${CSS.escape(poleParam)}"]`);
      if (option) poleSelect.value = option.value;
    }

    form.addEventListener('submit', async (event) => {
      const results = fields.map(check);
      if (!results.every(Boolean)) {
        event.preventDefault();
        fields[results.indexOf(false)].focus();
        announce('Le formulaire contient des erreurs.');
        return;
      }

      // Sans endpoint configuré, le navigateur ouvre la messagerie (mailto:).
      if (form.getAttribute('action')?.startsWith('mailto:')) return;

      event.preventDefault();
      if (errorBox) errorBox.hidden = true;
      submit?.setAttribute('aria-busy', 'true');
      if (submit) submit.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(String(response.status));

        form.hidden = true;
        root.querySelector<HTMLElement>('[data-form-intro]')?.setAttribute('hidden', '');
        if (success) {
          const stampDate = success.querySelector<HTMLElement>('[data-stamp-date]');
          if (stampDate) {
            stampDate.textContent = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
              .format(new Date())
              .toUpperCase();
          }
          success.hidden = false;
          if (!reduceMotion.matches) success.querySelector('[data-stamp]')?.classList.add('animate-stamp');
          success.querySelector<HTMLElement>('[tabindex="-1"]')?.focus();
        }
        announce('Demande envoyée. Un consultant vous répond sous 48 heures.');
      } catch {
        if (errorBox) errorBox.hidden = false;
        announce("L'envoi n'a pas abouti.");
      } finally {
        submit?.removeAttribute('aria-busy');
        if (submit) submit.disabled = false;
      }
    });
  });
}

document.documentElement.classList.add('js');
document.documentElement.dataset.ready = 'true';
initReveals();
initHeader();
initDropdowns();
initMobileMenu();
initCopy();
initForms();
