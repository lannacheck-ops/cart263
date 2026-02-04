window.onload = setup;
function setup() {
  console.log("keys");
  window.addEventListener("keydown", keyHandler);

  function keyHandler(event) {
    console.log(event.key)
  }
}
