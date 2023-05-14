const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const project1btn = document.querySelector(".project1");
const project2btn = document.querySelector(".project2");
const project3btn = document.querySelector(".project3");
const closebtn = document.querySelectorAll(".portfolio__modal-close");

project1btn.addEventListener("click", () => {
  modal1.style.display = "block";
  document.body.style.overflow = "hidden";
});

project2btn.addEventListener("click", () => {
  modal2.style.display = "block";
  document.body.style.overflow = "hidden";
});

project3btn.addEventListener("click", () => {
  modal3.style.display = "block";
  document.body.style.overflow = "hidden";
});

function closeModal() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  document.body.style.overflow = "initial";
}

closebtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeModal();
  });
});

window.addEventListener("click", (event) => {
  if (event.target === modal1 || event.target === modal2 || event.target === modal3) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});