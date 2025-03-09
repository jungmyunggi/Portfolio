export function scrollElement(elementId: string) {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({
    behavior: 'smooth',
  });
}
