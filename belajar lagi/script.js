// Smooth Scroll to "About"
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Toggle Dark Mode
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll to Top Button
const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll Animations
const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

animatedSections.forEach(section => {
  observer.observe(section);
});
