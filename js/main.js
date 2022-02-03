const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.getElementById("color");
let copyBtn = document.getElementById("copyBtn");
let notify = document.getElementById("notify");
function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}

let copiedColor;
btn.addEventListener("click", () => {
  let hexNum = "#";
  for (let i = 0; i < 6; i++) {
    hexNum += colors[getRandomNum()];
  }
  document.body.style.backgroundColor = hexNum;
  color.innerHTML = hexNum;
  copiedColor = hexNum;
});

copyBtn.onclick = function CopyMe() {
  var TempText = document.createElement("input");
  TempText.value = copiedColor;
  document.body.appendChild(TempText);
  TempText.select();
  document.execCommand("copy");
  document.body.removeChild(TempText);
  notify.play();
};
