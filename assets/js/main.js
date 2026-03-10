// Header Scroll Effect
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.remove("py-5");
    header.classList.add("py-3", "shadow-md", "bg-white");
    header.classList.remove("bg-white/80", "backdrop-blur-md");
  } else {
    header.classList.add("py-5");
    header.classList.remove("py-3", "shadow-md", "bg-white");
    header.classList.add("bg-white/80", "backdrop-blur-md");
  }
});

// Mobile Menu Toggle
window.toggleMobileMenu = function () {
  const mobileMenu = document.getElementById("nav-wrapper");
  if (!mobileMenu) return;

  // Check if menu is hidden (using tailwind utility classes)
  // We check if it HAS the invisible class. If yes, it's hidden.
  const isHidden =
    mobileMenu.classList.contains("invisible") ||
    mobileMenu.classList.contains("opacity-0");

  if (isHidden) {
    // Open Menu
    mobileMenu.classList.remove("opacity-0", "invisible", "-translate-y-4");
    mobileMenu.classList.add("opacity-100", "visible", "translate-y-0");
  } else {
    // Close Menu
    mobileMenu.classList.remove("opacity-100", "visible", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "invisible", "-translate-y-4");
  }
};

// Close menu when clicking outside
window.addEventListener("click", function (e) {
  const mobileMenu = document.getElementById("nav-wrapper");

  // Only if menu exists, is open (visible), and click is NOT inside menu and NOT on button
  if (
    mobileMenu &&
    !mobileMenu.classList.contains("invisible") &&
    !e.target.closest("#nav-wrapper") &&
    !e.target.closest("#mobile-menu-btn")
  ) {
    // Close it
    mobileMenu.classList.remove("opacity-100", "visible", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "invisible", "-translate-y-4");
  }
});

// Close menu when clicking a link (mobile only)
const mobileLinks = document.querySelectorAll("#nav-wrapper a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Simple check: if window width is less than XL breakpoint (1280px)
    if (window.innerWidth < 1280) {
      const mobileMenu = document.getElementById("nav-wrapper");
      if (mobileMenu) {
        mobileMenu.classList.remove("opacity-100", "visible", "translate-y-0");
        mobileMenu.classList.add("opacity-0", "invisible", "-translate-y-4");
      }
    }
  });
});
