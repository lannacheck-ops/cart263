window.onload = function () {
  let layout = {
    background: {
      div: document.createElement("div"),
      image: document.createElement("img")
    },
    box: document.createElement("img"),
    grid: document.createElement("img"),
    light: document.createElement("img"),
    dispenser: document.createElement("img"),
    heart: document.createElement("img"),
    button: document.createElement("img"),
    character: document.createElement("img")
  }

  // Add to DOM
  function renderlayout() {
    // bg
    layout.background.div.classList.add("layout");
    layout.background.image.src = "/images/background.png";
    layout.background.div.appendChild(layout.background.image);
    document.getElementsByTagName("main")[0].appendChild(layout.background.div);
    //box
    layout.box.src = "/images/box.png";
    document.querySelector(".layout").appendChild(layout.box);
    //electric grid
    layout.grid.src = "images/electric-grid.png";
    document.querySelector(".layout").appendChild(layout.grid);
    //light
    layout.light.src = "images/light-off.png";
    document.querySelector(".layout").appendChild(layout.light);
    //dispenser
    layout.dispenser.src = "images/dispenser.png";
    document.querySelector(".layout").appendChild(layout.dispenser);
    //heart
    layout.heart.src = "images/heart.png";
    document.querySelector(".layout").appendChild(layout.heart);
    //button
    layout.button.src = "images/button-unpressed.png";
    document.querySelector(".layout").appendChild(layout.button);
    //character
    layout.character.src = "images/character-sit.png";
    document.querySelector(".layout").appendChild(layout.character);
  }
  renderlayout();
}

