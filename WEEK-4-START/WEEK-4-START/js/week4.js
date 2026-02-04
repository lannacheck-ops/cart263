window.onload = setup;
function setup() {
  console.log("keys");
  window.addEventListener("keydown", keyHandler);
  window.addEventListener("keyup", keyHandlerUp);
  window.setTimeout(addTimeoutText, 2000);
  window.setInterval(addTimeInterval, 2000);

  function addTimeoutText() {
    let parent = document.querySelector("#parent");
    parent.innerHTML += "NEW TEXT"
  }
  function addTimeInterval() {
    let parent = document.querySelector("#parent");
    parent.innerHTML += "NEW TEXT FOR INTERVAL"
  }

  function keyHandlerUp(event) {
    if (event.key === " ") {
      document.querySelector("#boxB").style.background = "blue";
    }
  }

  let speedX = 5;
  function keyHandler(event) {

    // ParseInt is used to change the text from the style to an interger so the SpeedX can be added to it 
    if (event.key === "ArrowRight") {
      document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) + speedX + "px";
    }
    if (event.key === "ArrowLeft") {
      document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) - speedX + "px";
    }
    if (event.key === " ") {
      document.querySelector("#boxB").style.background = "orange";
    }
    // else {
    //   console.log(event.key);
    //   document.querySelector("#textContainer").textContent += `${event.key} `;
    // }

  }
}
