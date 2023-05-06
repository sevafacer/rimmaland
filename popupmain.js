const modal = document.getElementById("call_me");
const btn = document.getElementById("main-button");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

if (close) {
  close.addEventListener("click", () => {
    closePopup();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});

function closePopup() {
  modal.style.display = "none";
  document.body.style.overflow = "initial";
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closePopup();
  }
});