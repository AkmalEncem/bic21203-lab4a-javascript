function generateNumbers() {
  const list = document.getElementById("numberList");
  list.textContent = "";

  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = "The number is " + i;
    list.appendChild(item);
  }
}

document.getElementById("generateBtn").addEventListener("click", generateNumbers);
