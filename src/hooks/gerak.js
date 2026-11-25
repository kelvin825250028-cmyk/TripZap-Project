export function lewatiAnimasi() {
  const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return kurangiGerak || !('IntersectionObserver' in window);
}
