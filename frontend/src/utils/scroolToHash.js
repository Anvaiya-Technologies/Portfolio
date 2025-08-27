export const scrollToHash = (hash, offset = 0, behavior = "smooth") => {
  if (!hash) return;

  const id = hash.replace("#", "");
  const targetElement = document.getElementById(id);

  if (targetElement) {
    const topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: topPosition,
      behavior,
    });
  }
};
