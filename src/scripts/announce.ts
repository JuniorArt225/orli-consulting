/** Annonce un message aux lecteurs d'écran via la région live du layout. */
export function announce(message: string) {
  const region = document.getElementById('live-region');
  if (!region) return;
  region.textContent = '';
  window.setTimeout(() => (region.textContent = message), 60);
}
