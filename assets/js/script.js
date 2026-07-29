const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");

function closeModal() {
  modal.style.display = "none";
  modalImg.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.style.display = "none";
}

document.querySelectorAll(".enlargeable").forEach(media => {
  media.addEventListener("click", () => {
    modal.style.display = "flex";

    if (media.tagName.toLowerCase() === "video") {
      modalImg.style.display = "none";
      modalVideo.style.display = "block";
      modalVideo.src = media.currentSrc || media.querySelector("source")?.src || "";
      modalVideo.load();
      modalVideo.play().catch(() => {});
    } else {
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.style.display = "none";
      modalImg.style.display = "block";
      modalImg.src = media.src;
    }
  });
});

closeBtn.onclick = closeModal;

modal.onclick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};