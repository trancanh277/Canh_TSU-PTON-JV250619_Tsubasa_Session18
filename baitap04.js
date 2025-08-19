const keyboard = document.getElementById("keyboard");
const result = document.getElementById("result");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

letters.forEach((letter) => {
  const btn = document.createElement("button");
  btn.textContent = letter;
  btn.classList.add("key");
  btn.addEventListener("click", () => {
    result.value += letter;
  });
  keyboard.appendChild(btn);
});

const delBtn = document.createElement("button");
delBtn.textContent = "Xóa";
delBtn.classList.add("key", "delete");
delBtn.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});
keyboard.appendChild(delBtn);
