// Document selectors
const card = document.querySelector("#card")
const cardHeader = document.querySelector("header")
const resetButton = document.querySelector(".reset")

// Vars
let clicked = false;
let startTop = card.offsetTop;
let startLeft = card.offsetLeft;
let offsetX, offsetY;

// Events
// Mouse click
cardHeader.addEventListener("mousedown", (event) => {
    clicked = true;
    offsetX = event.clientX - card.offsetLeft;
    offsetY = event.clientY - card.offsetTop;
});

// Mouse release
document.addEventListener("mouseup", () => {
    clicked = false;
});

// Mouse move
document.addEventListener("mousemove", (event) => {
    if(!clicked) return;
    const { clientX, clientY } = event;
    card.style.left = `${clientX - offsetX}px`;
    card.style.top = `${clientY - offsetY}px`;
});

// Functions
function resetPosition() {
    card.style.left = `${startLeft}px`;
    card.style.top = `${startTop}px`;
};

resetButton.addEventListener("click", resetPosition);