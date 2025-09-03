document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll
  const sections = document.querySelectorAll("section, header.hero");
  const reveal = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  };
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.6s ease-out";
  });
  window.addEventListener("scroll", reveal, { passive: true });
  reveal();

  // Mobile nav
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuToggle && navLinks) {
    const navLinkItems = navLinks.querySelectorAll("a");
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("active");
    });
    navLinkItems.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("active");
      });
    });
  }
});
