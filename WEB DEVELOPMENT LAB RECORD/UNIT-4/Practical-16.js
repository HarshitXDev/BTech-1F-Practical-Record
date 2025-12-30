const box = document.getElementById("box");

/* Show / Hide element */
function showHide() {
  if (box.style.display === "none") {
    box.style.display = "flex";
  } else {
    box.style.display = "none";
  }
}

/* Toggle class dynamically */
function toggleClass() {
  box.classList.toggle("active");

  // effect without CSS file
  if (box.classList.contains("active")) {
    box.style.backgroundColor = "tomato";
    box.style.color = "white";
  } else {
    box.style.backgroundColor = "lightblue";
    box.style.color = "black";
  }
}
