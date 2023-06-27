const btn = document.getElementById("btn");

const clientHeight = document.documentElement.clientHeight;
const clientWidth = document.documentElement.clientWidth;

const screenHeight = window.screen.height;
const screenWidth = window.screen.width;

btn.addEventListener("click", () => {
    alert(`Client size: (${clientHeight}x${clientWidth})
Monitor size: (${screenHeight}x${screenWidth})`);
});
