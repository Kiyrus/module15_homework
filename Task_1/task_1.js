const btn = document.getElementById("btn");
const jsvg = document.querySelectorAll(".j-svg");


btn.addEventListener("click", () => {
    if (jsvg[1].classList.contains("display--inactive") == 1){
        jsvg[0].classList.toggle("display--inactive");
        jsvg[1].classList.toggle("display--inactive");
    } else {
        jsvg[1].classList.toggle("display--inactive");
        jsvg[0].classList.toggle("display--inactive");
    }
});
