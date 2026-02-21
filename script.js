/* =====================================================
   GLOBAL READY
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CONTACT FORM
     ========================= */
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      statusEl.textContent = "Sending...";
      statusEl.style.color = "#2563eb";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          statusEl.textContent = "Thank you! Your message has been sent.";
          statusEl.style.color = "#16a34a";
        } else {
          throw new Error();
        }
      } catch {
        statusEl.textContent =
          "Something went wrong. Please try again later.";
        statusEl.style.color = "#dc2626";
      }
    });
  }


  /* =========================
     HERO VIDEO SPEED
     ========================= */
  const vid = document.querySelector(".hero-video");
  if (vid) vid.playbackRate = 0.75;


  /* =========================
     AUTO YEAR
     ========================= */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();


  /* =========================
     MOBILE MENU (Consolidated)
     ========================= */
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-menu");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  if (hamburger && mobileMenu && overlay) {
    const toggleMenu = (show) => {
      mobileMenu.classList.toggle("show", show);
      overlay.classList.toggle("show", show);
      document.body.classList.toggle("menu-open", show);
      hamburger.setAttribute("aria-expanded", show);
    };

    hamburger.addEventListener("click", () => toggleMenu(true));
    
    [closeBtn, overlay, ...mobileLinks].forEach(el => {
      if (el) el.addEventListener("click", () => toggleMenu(false));
    });
  }

  /* =========================
     NAVBAR SCROLL EFFECT
     ========================= */
  const nav = document.querySelector(".navbar");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
  }

});


const btn = document.querySelector(".hamburger");
const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

btn.addEventListener("click",()=>{
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click",()=>{
  menu.classList.remove("show");
  overlay.classList.remove("show");
});