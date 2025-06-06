const colors = [
  { name: "Red", code: "#FF6B6B" },
  { name: "Turquoise", code: "#4ECDC4" },
  { name: "Slate Gray", code: "#556270" },
  { name: "Lime", code: "#C7F464" },
  { name: "Mustard", code: "#FFCC5C" },
  { name: "Mint", code: "#96CEB4" },
  { name: "Coral", code: "#FF6F69" },
  { name: "Teal", code: "#588C7E" },
  { name: "Peach", code: "#FFD3B5" },
  { name: "Light Pink", code: "#FFAAA6" },
  { name: "Chartreuse", code: "#DCE775" },
  { name: "Salmon", code: "#FF8A65" },
  { name: "Sky Blue", code: "#B2EBF2" },
  { name: "Lavender", code: "#CE93D8" },
  { name: "Light Green", code: "#81C784" }
];

let currentIndex = 0;

const colorButton = document.getElementById("colorButton");
const colorNameDisplay = document.getElementById("colorName");

colorButton.addEventListener("click", () => {
  const currentColor = colors[currentIndex];
  document.body.style.backgroundColor = currentColor.code;
  colorNameDisplay.textContent = `Color: ${currentColor.name}`;
  currentIndex = (currentIndex + 1) % colors.length;
});