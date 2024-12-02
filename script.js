// Image Modal Logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");
const images = document.querySelectorAll(".zoomable-image");

images.forEach(image => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.textContent = image.alt;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Resume Modal Logic
const resumeLink = document.getElementById("resume-link");
const resumeModal = document.getElementById("resumeModal");
const resumeClose = document.getElementById("resumeClose");

resumeLink.addEventListener("click", event => {
  event.preventDefault();
  resumeModal.style.display = "block";
});

resumeClose.addEventListener("click", () => {
  resumeModal.style.display = "none";
});

// Contact Modal Logic
const contactLink = document.getElementById("contact-link");
const contactModal = document.getElementById("contactModal");
const contactClose = document.getElementById("contactClose");

contactLink.addEventListener("click", event => {
  event.preventDefault();
  contactModal.style.display = "block";
});

contactClose.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === resumeModal || event.target === contactModal) {
    resumeModal.style.display = "none";
    contactModal.style.display = "none";
  }
});

