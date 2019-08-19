const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let i = 0
  document.body.addEventListener("keydown", (event) => {
    let key = event.key
    i = (codes[i] === key) ? i++ : 0
    if (i === codes.length) {
      window.alert("Hurray!");
      i = 0
    }
  });
}
