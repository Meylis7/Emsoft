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

// Custom Dropdown
const dropdowns = document.querySelectorAll("[data-dropdown]");

function closeDropdown(dropdown) {
  const trigger = dropdown.querySelector("[data-dropdown-trigger]");
  const menu = dropdown.querySelector("[data-dropdown-menu]");
  const arrow = dropdown.querySelector("[data-dropdown-arrow]");

  trigger.setAttribute("aria-expanded", "false");
  menu.classList.add("max-h-0", "opacity-0", "pointer-events-none");
  menu.classList.remove("max-h-80", "opacity-100", "pointer-events-auto");
  arrow.classList.remove("rotate-180");
}

function openDropdown(dropdown) {
  const trigger = dropdown.querySelector("[data-dropdown-trigger]");
  const menu = dropdown.querySelector("[data-dropdown-menu]");
  const arrow = dropdown.querySelector("[data-dropdown-arrow]");

  dropdowns.forEach((item) => {
    if (item !== dropdown) closeDropdown(item);
  });

  trigger.setAttribute("aria-expanded", "true");
  menu.classList.remove("max-h-0", "opacity-0", "pointer-events-none");
  menu.classList.add("max-h-80", "opacity-100", "pointer-events-auto");
  arrow.classList.add("rotate-180");
}

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector("[data-dropdown-trigger]");
  const label = dropdown.querySelector("[data-dropdown-label]");
  const hiddenInput = dropdown.querySelector('input[type="hidden"]');
  const options = dropdown.querySelectorAll("[data-dropdown-option]");

  trigger.addEventListener("click", function () {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeDropdown(dropdown);
    } else {
      openDropdown(dropdown);
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", function () {
      label.textContent = option.textContent.trim();
      label.classList.add("text-[#061016]");
      hiddenInput.value = option.dataset.value || "";
      closeDropdown(dropdown);
    });
  });
});

document.addEventListener("click", function (event) {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown(dropdown);
    }
  });
});

// Contact section form toggle
const contactIntro = document.querySelector("[data-contact-intro]");
const contactForm = document.querySelector("[data-contact-form]");
const contactOpenButton = document.querySelector("[data-contact-open]");
const contactCloseButton = document.querySelector("[data-contact-close]");

function showContactIntro() {
  if (!contactIntro || !contactForm) return;

  contactForm.classList.add("hidden");
  contactForm.classList.remove("flex");
  contactIntro.classList.remove("hidden");
  contactIntro.classList.add("flex");
}

function showContactForm() {
  if (!contactIntro || !contactForm) return;

  contactIntro.classList.add("hidden");
  contactIntro.classList.remove("flex");
  contactForm.classList.remove("hidden");
  contactForm.classList.add("flex");
}

if (contactOpenButton) {
  contactOpenButton.addEventListener("click", showContactForm);
}

if (contactCloseButton) {
  contactCloseButton.addEventListener("click", showContactIntro);
}

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactForm.reset();

    dropdowns.forEach((dropdown) => {
      const label = dropdown.querySelector("[data-dropdown-label]");
      const hiddenInput = dropdown.querySelector('input[type="hidden"]');

      if (label) {
        label.textContent = "How did you hear about us?";
        label.classList.remove("text-[#061016]");
      }

      if (hiddenInput) {
        hiddenInput.value = "";
      }

      closeDropdown(dropdown);
    });

    showContactIntro();
  });
}
