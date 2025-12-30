const box = document.getElementById("box");
const inputBox = document.getElementById("inputBox");
const output = document.getElementById("output");
const enableBtn = document.getElementById("enable");
const disableBtn = document.getElementById("disable");

/* ---------- MOUSE EVENTS ---------- */

// hover function
function onHover() {
  box.style.backgroundColor = "tomato";
}

// mouse leave function
function onLeave() {
  box.style.backgroundColor = "lightblue";
}

// add mouse events
enableBtn.addEventListener("click", () => {
  box.addEventListener("mouseenter", onHover);
  box.addEventListener("mouseleave", onLeave);
});

// remove mouse events
disableBtn.addEventListener("click", () => {
  box.removeEventListener("mouseenter", onHover);
  box.removeEventListener("mouseleave", onLeave);
});

/* ---------- KEYBOARD EVENTS ---------- */

// keydown event
inputBox.addEventListener("keydown", (event) => {
  output.innerText = "Key pressed: " + event.key;
});

// keyup event
inputBox.addEventListener("keyup", () => {
  console.log("Key released");
});
