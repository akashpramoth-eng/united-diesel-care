// UNITED DIESEL CARE — Main JavaScript
const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backTop = document.getElementById("backTop");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

function handleScroll() {
  header.classList.toggle("scrolled", window.scrollY > 30);
  backTop.classList.toggle("show", window.scrollY > 500);
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('#mainNav a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  formNote.textContent =
    "The form is currently front-end only. Please connect a form service or backend before accepting live enquiries.";
});

document.getElementById("year").textContent = new Date().getFullYear();
