const btn = document.getElementById("btn");
const model = document.querySelector(".model");
const clo = document.querySelector(".close");
const alls = document.querySelector(".all");

btn.addEventListener("click", () => {
    model.classList.toggle("isactive");
    document.body.style.overflow="hidden"
})
clo.addEventListener("click", () => {
    model.classList.toggle("isactive");
     document.body.style.overflow="auto"
})
alls.addEventListener("click", () => {
    model.classList.toggle("isactive");
     document.body.style.overflow="auto"
})

