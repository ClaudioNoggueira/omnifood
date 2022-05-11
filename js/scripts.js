///////////////////////////////////////////////////////
// MOBILE NAVIGATION BUTTON CLICK EVENT
///////////////////////////////////////////////////////
const buttonEl = document.querySelector(".mobile-nav-button");

buttonEl.addEventListener("click", () => {
  const headerEl = document.querySelector("header");
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////
// COPYRIGHT YEAR
///////////////////////////////////////////////////////
const yearEl = document.querySelector(".copyrightYear");

yearEl.textContent = new Date().getFullYear();

///////////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION
///////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      if (link.classList.contains("main-nav-link"))
        document.querySelector("header").classList.remove("nav-open");
    }
  });
});

///////////////////////////////////////////////////////
// STICKY NAVIGATION
///////////////////////////////////////////////////////
const heroSectionEl = document.querySelector(".hero-section");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    !entry.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSectionEl);
