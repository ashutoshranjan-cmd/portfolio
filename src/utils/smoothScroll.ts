export const smoothScroll = (href: string) => {
  const element = document.querySelector(href);
  if (!element) return;

  const offset = 80; // Account for fixed navbar
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};