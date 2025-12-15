const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusEl.textContent = "Sending...";
    statusEl.style.color = "#2563eb";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        statusEl.textContent = "Thank you! Your message has been sent.";
        statusEl.style.color = "#16a34a";
      } else {
        statusEl.textContent =
          "Something went wrong. Please try again later.";
        statusEl.style.color = "#dc2626";
      }
    } catch (error) {
      statusEl.textContent =
        "Network error. Please check your connection and try again.";
      statusEl.style.color = "#dc2626";
    }
  });
}

  const vid = document.querySelector('.hero-video');
  if (vid) {
    vid.playbackRate = 0.75;  // 45% speed (slow motion)
  }

const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();



 const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
const overlay = document.querySelector('.mobile-nav-overlay');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('show');
});


  document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  const overlay = document.querySelector(".mobile-nav-overlay");
  const links = document.querySelectorAll(".nav-links a");

  if (!toggle || !nav || !overlay) return;

  function openMenu() {
    nav.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    nav.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    nav.classList.contains("open") ? closeMenu() : openMenu();
  });

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  overlay.addEventListener("click", closeMenu);
});


window.addEventListener("hashchange", () => {
  const nav = document.querySelector(".nav-links");
  const overlay = document.querySelector(".mobile-nav-overlay");

  nav.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
});


/* =========================
   SCROLL REVEAL – CLEAN
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once only
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  reveals.forEach(el => observer.observe(el));
});







  