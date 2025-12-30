const list = document.getElementById("list");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const updateBtn = document.getElementById("update");

/* ---------- CREATE & APPEND ---------- */
addBtn.addEventListener("click", () => {
  const li = document.createElement("li");   // create element
  li.innerText = "Item " + (list.children.length + 1);
  list.appendChild(li);                      // append child
});

/* ---------- REMOVE CHILD ---------- */
removeBtn.addEventListener("click", () => {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});

/* ---------- MODIFY CHILD ---------- */
updateBtn.addEventListener("click", () => {
  if (list.firstElementChild) {
    list.firstElementChild.innerText = "Updated Item";
    list.firstElementChild.style.color = "red";
  }
});
