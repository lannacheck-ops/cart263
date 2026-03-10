window.onload = function () {
  let lightOn = false;
  let charState = "sit";
  let layout = {
    background: {
      div: document.createElement("div"),
      image: document.createElement("img"),
    },
    box: {
      el: document.createElement("img"),
    },
    grid: {
      el: document.createElement("img"),
    },

    lights: {
      el: document.createElement("img"),
      // For the sources I'm thinking of adding them to an array so its  stored in just one variable
      offSrc: "/images/light-on.png",
      onSrc: "/images/light-on.png",
      srcPaths: ["images/light-off.png", "/images/light-on.png"],
      image: ""
    },
    dispenser: {
      el: document.createElement("img"),
    },
    heart: {
      el: document.createElement("img"),
    },
    button: {
      el: document.createElement("img"),
    },
    character: {
      el: document.createElement("img"),
      srcPaths: ["images/character-sit.png", "images/character-stand.png", "images/character-push.png", "images/character-pick.png"],
      image: ""
    },

  };
  let notifBtnId = this.document.querySelector("#notify");
  notifBtnId.addEventListener("click", mouseClickNotif);
  console.log(notifBtnId, lightOn);
  function mouseClickNotif() {
    lightOn = !lightOn;
    updateLight();
    console.log(lightOn, layout.lights.image, layout.lights.el.src);
    layout.lights.el.src = layout.lights.image;
  }
  /**
   * Changes light image to On or Off
   */
  function updateLight() {
    if (lightOn) {
      layout.lights.image = layout.lights.srcPaths[1]
    }
    else {
      layout.lights.image = layout.lights.srcPaths[0]
    }
  }
  /**
   * Add images to the DOM
   */
  function renderlayout() {
    // bg
    layout.background.div.classList.add("layout");
    layout.background.image.src = "images/background.png";
    layout.background.div.appendChild(layout.background.image);
    document.getElementsByTagName("main")[0].appendChild(layout.background.div);
    //box // right here 
    layout.box.el.src = "images/box.png";
    layout.box.el.id = "box"

    /**
       * LEON GOONER #1 AREA ❤️
       */

    document.querySelector(".layout").appendChild(layout.box.el);
    //electric grid 
    layout.grid.el.src = "images/electric-grid.png";
    layout.grid.el.id = "grid"
    document.querySelector(".layout").appendChild(layout.grid.el);

    // light
    layout.lights.el.src = layout.lights.image;
    layout.lights.el.id = "light"
    document.querySelector(".layout").appendChild(layout.lights.el);
    /**
     * LEON GOONER #2 AREA 😋 // I think we should leave these comments in they're so funny LMFAO PLSKDSJDJ
     */
    //dispenser
    layout.dispenser.el.src = "images/dispenser.png";
    layout.dispenser.id = "dispenser"
    document.querySelector(".layout").appendChild(layout.dispenser.el);
    //heart
    layout.heart.el.src = "images/heart.png";
    layout.heart.id = "heart"
    document.querySelector(".layout").appendChild(layout.heart.el);
    //button
    layout.button.el.src = "images/button-unpressed.png";
    layout.button.id = "push-button"
    document.querySelector(".layout").appendChild(layout.button.el);
    //character
    layout.character.el.src = "images/character-sit.png";
    layout.character.el.id = "char"
    document.querySelector(".layout").appendChild(layout.character.el);
  }
  updateLight()
  renderlayout();

  function changeCharacter(src) {
    console.log("yes")
    // fade out
    layout.character.el.style.opacity = 0;

    setTimeout(() => {
      // change image after fade out
      layout.character.el.src = src;

      // fade in
      layout.character.el.style.opacity = 1;
    }, 400); // same time as CSS transition
  }
  window.requestAnimationFrame(updateCharState);
  /**
   * Update Character state and change the image source
   */
  function updateCharState() {
    if (charState == "sit" && lightOn) {
      charState = "stand"
      changeCharacter(layout.character.srcPaths[1]);
    }
    window.requestAnimationFrame(updateCharState);
  }
};
