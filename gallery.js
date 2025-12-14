// gallery.js — HD-only gallery with full lightbox controls
// === EDIT the IMAGES array to match your filenames in assets/gallery/ ===
const IMAGES = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
  "img21.jpg",
  "img22.jpg",
  "img23.jpg",
  "img24.jpg",
  "img25.jpg",
  "img26.jpg",
  "img27.jpg",
  "img28.jpg",
  "img29.jpg",
  "img30.jpg",
  "img31.jpg",
  "img32.jpg",
  "img33.jpg",
  "img34.jpg",
  "img35.jpg",
  "img36.jpg",
  "img37.jpg",
  "img38.jpg",
  "img39.jpg",
  "img40.jpg"
  

];

// elements
const GRID = document.getElementById("galleryGrid");
const LIGHTBOX = document.getElementById("lightbox");
const LB_IMAGE = document.getElementById("lbImage");
const LB_DOWNLOAD = document.getElementById("lbDownload");
const LB_CLOSE = document.getElementById("lbClose");
const LB_INDEX = document.getElementById("lbIndex");
const LB_PREV = document.getElementById("lbPrev");
const LB_NEXT = document.getElementById("lbNext");

let currentIndex = 0;

function showMessage(msg) {
  if (!GRID) return;
  GRID.innerHTML = `<div style="padding:30px;text-align:center;color:#374151">${msg}</div>`;
}

function renderGallery() {
  if (!IMAGES || IMAGES.length === 0) {
    showMessage("No images defined. Edit gallery.js and add filenames to the IMAGES array.");
    return;
  }

  GRID.innerHTML = "";
  IMAGES.forEach((fname, idx) => {
    const src = `assets/gallery/${fname}`;
    const div = document.createElement("div");
    div.className = "gallery-item";

    // load image tag with lazy attribute
    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.src = src;
    img.alt = "";

    // when click open lightbox at that index
    div.addEventListener("click", () => openLightbox(idx));

    // quick availability check and visual cue
    img.onerror = () => {
      console.error("Image missing:", src);
      div.style.opacity = "0.55";
      const note = document.createElement("div");
      note.style.position = "absolute";
      note.style.padding = "10px";
      note.style.color = "#b91c1c";
      note.style.fontSize = "0.9rem";
      note.textContent = "Image missing: " + fname;
      div.appendChild(note);
    };
    img.onload = () => console.log("Loaded:", src);

    div.appendChild(img);
    GRID.appendChild(div);
  });
}

function openLightbox(index) {
  if (index < 0 || index >= IMAGES.length) return;
  currentIndex = index;
  const filename = IMAGES[currentIndex];
  const src = `assets/gallery/${filename}`;

  LB_IMAGE.src = src;
  LB_IMAGE.alt = filename;
  LB_DOWNLOAD.href = src;
  LB_DOWNLOAD.setAttribute("download", filename);
  LB_INDEX.textContent = `${currentIndex + 1} / ${IMAGES.length}`;

  LIGHTBOX.classList.add("show");
  LIGHTBOX.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // pre-load neighbors for smooth nav
  preloadIndex(currentIndex - 1);
  preloadIndex(currentIndex + 1);
}

function preloadIndex(i) {
  if (i < 0 || i >= IMAGES.length) return;
  const img = new Image();
  img.src = `assets/gallery/${IMAGES[i]}`;
}

function closeLightbox() {
  LIGHTBOX.classList.remove("show");
  LIGHTBOX.setAttribute("aria-hidden", "true");
  LB_IMAGE.src = "";
  document.body.style.overflow = "";
}

// navigation
function showNext() { openLightbox((currentIndex + 1) % IMAGES.length); }
function showPrev() { openLightbox((currentIndex - 1 + IMAGES.length) % IMAGES.length); }

// keyboard handlers
function onKey(e) {
  if (LIGHTBOX.classList.contains("show")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  }
}

// click outside image to close
LIGHTBOX.addEventListener("click", (e) => {
  if (e.target === LIGHTBOX) closeLightbox();
});

// attach controls
LB_CLOSE.addEventListener("click", closeLightbox);
LB_NEXT.addEventListener("click", showNext);
LB_PREV.addEventListener("click", showPrev);
document.addEventListener("keydown", onKey);

// initial
renderGallery();
