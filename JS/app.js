const showA = document.getElementById("A");
const showB = document.getElementById("B");
const showC = document.getElementById("C");
showA.addEventListener("click", () => {
  document.getElementById("dynamicA").hidden = false;
});
showB.addEventListener("click", () => {
  document.getElementById("dynamicB").hidden = false;
});
showC.addEventListener("click", () => {
  document.getElementById("dynamicC").hidden = false;
});

const hideA = document.getElementById("hideA");
const hideB = document.getElementById("hideB");
const hideC = document.getElementById("hideC");
hideA.addEventListener("click", () => {
  document.getElementById("dynamicA").hidden = true;
});
hideB.addEventListener("click", () => {
  document.getElementById("dynamicB").hidden = true;
});
hideC.addEventListener("click", () => {
  document.getElementById("dynamicC").hidden = true;
});
