window.onload = function () {
  let box = {
    background: document.createElement("img"),

  }

  // Add to DOM
  function renderBox() {
    box.background.src = "/images/background.png"
    box.background.classList.add("contain");
    document.getElementsByTagName("main")[0].appendChild(box.background);
  }
  renderBox();
}

