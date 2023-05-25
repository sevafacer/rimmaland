const modalcall = document.getElementById("call_me");
const btn = document.getElementById("main-button");
const closecall = document.getElementById("callclose");

btn.addEventListener("click", () => {
  opencallPopup();
});

modalcall.addEventListener("click", (event) => {
  if (event.target === modalcall ) {
    closecallPopup();
  }
});

closecall.addEventListener("click", ()=>{
  closecallPopup();
}
)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closecallPopup();
  }
});

function opencallPopup() {
  modalcall.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closecallPopup() {
  modalcall.style.display = "none";
  document.body.style.overflow = "initial";
}
