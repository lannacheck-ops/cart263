setup_A();
/** THEME: CALM  */
function setup_A() {
  console.log("in a");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_A`, "ani_canvA", aniA, aniB, aniC, aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    let newParticle = [];
    let dir = [1, -1];
    let prtclNum = 0;
    let prtclSpeed = []
    let pinkShades = [
      "#FFC0CB", //grey blue first
      "#E94196",
      "#FF69B4",
      "#FF00FF",
      "#F4C2C2",
      "#F88379",
      "#FFB7C5 ",
      "#FF1493",
      "#E30B5C"
    ];
    console.log("in ani-A -teamA");
    parentCanvas.addEventListener("click", displayParticle);

    window.requestAnimationFrame(animate);
    function animate() {
      if (newParticle.length > 0) {
        for (let i = 0; i < newParticle.length; i++) {
          moveParticles(newParticle[i], prtclSpeed[i]);
          checkBounds(parentCanvas, newParticle[i], prtclSpeed[i]);
          // console.log(newParticle[i].style.left)
          // console.log(newParticle[i].style.left);
        }
      }
      ;
      window.requestAnimationFrame(animate);
    }
    /**
     * Triggered on Mouse Clicked
     */
    function displayParticle(eventObj) {
      let canvasBounds = parentCanvas.getBoundingClientRect();
      let x = eventObj.clientX - canvasBounds.x;
      let y = eventObj.clientY - canvasBounds.y;

      prtclSpeed.push(createParticleSpeed());
      newParticle.push(createParticles());
      newParticle[prtclNum].style.left = `${x}px`;
      newParticle[prtclNum].style.top = `${y}px`;
      newParticle[prtclNum].style.background = `${pinkShades[Math.floor(Math.random() * pinkShades.length)]}`;
      prtclNum++;
      // console.log(document.querySelectorAll(".TEAM_A_ANI_A_particle"))
    }

    function moveParticles(particles, s) {
      particles.style.left = parseInt(particles.style.left) + s.speedX + "px";
      particles.style.top = parseInt(particles.style.top) + s.speedY + "px";

    }
    function createParticleSpeed() {
      let newSpeed = {
        speedX: (Math.floor(Math.random() * (3 - 1)) + 1) * dir[Math.floor(Math.random() * dir.length)],
        speedY: (Math.floor(Math.random() * (3 - 1)) + 1) * dir[Math.floor(Math.random() * dir.length)]
      }
      return newSpeed
    }
    function checkBounds(parent, p, s) {
      let bounds = parent.getBoundingClientRect();
      let pWidth = p.getBoundingClientRect().width;
      let pHeight = p.getBoundingClientRect().height;
      if (parseInt(p.style.left) > (bounds.right - bounds.x - pWidth)) {
        s.speedX *= -1;

      } else if (parseInt(p.style.left) < bounds.left - bounds.x) {
        s.speedX *= -1;
      }

      if (parseInt(p.style.top) > bounds.bottom - bounds.y - pHeight) {
        s.speedY *= -1;

      } else if (parseInt(p.style.top) < bounds.top - bounds.y) {
        s.speedY *= -1;
      }
    }

    function createParticles() {
      let particleDiv = document.createElement("div")
      particleDiv.classList.add("TEAM_A_ANI_A_particle");
      document.querySelector("#ani_canvA_A").appendChild(particleDiv);
      return particleDiv;
    }
  }


  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamA");

  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamA");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("a-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log("a-up");
      console.log(e);
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    let numOfDots = 80;
    let heart = {
      size: 100,
      growthRate: 1,
      minSize: 30,
      maxSize: 100,
      growing: false,
      colorFactor: 2,
      g: 24,
      b: 101
    }
    //let heartSize = 100;
    let newHeartParticles = [];


    let canvasBounds = parentCanvas.getBoundingClientRect();
    console.log("in ani-D -teamA");

    window.requestAnimationFrame(animate);

    function animate() {
      moveHeart();
      // for (let i = 0; i < numOfDots; i++) {
      //   let angle = 360 / numOfDots * i
      //   let x = ((Math.sqrt(2) * Math.pow(Math.sin(angle), 3)) * heart.size) + canvasBounds.width / 2 - heart.size / 10
      //   let y = ((Math.pow(-Math.cos(angle), 3) - (Math.pow(Math.cos(angle), 2)) + 2 * Math.cos(angle)) * -heart.size) + canvasBounds.height / 2 - heart.size / 2
      //   newHeartParticles.push(createHeartParticles());
      //   newHeartParticles[i].style.left = x + "px"
      //   newHeartParticles[i].style.top = y + "px"
      //   // console.log(newHeartParticles[i].style.left)
      //   // console.log(heart.size)
      // }
      // for (let i = 0; i < newHeartParticles.length; i++) {
      //   moveHeart(newHeartParticles[i]);
      // }
      for (let i = 0; i < numOfDots; i++) {
        let angle = 360 / numOfDots * i
        let x = ((Math.sqrt(2) * Math.pow(Math.sin(angle), 3)) * heart.size) + canvasBounds.width / 2 - heart.size / 10
        let y = ((Math.pow(-Math.cos(angle), 3) - (Math.pow(Math.cos(angle), 2)) + 2 * Math.cos(angle)) * -heart.size) + canvasBounds.height / 2 - heart.size / 2
        newHeartParticles[i].style.left = x + "px"
        newHeartParticles[i].style.top = y + "px"
        newHeartParticles[i].style.background = `rgb(235,${heart.g},${heart.b})`
      }
      window.requestAnimationFrame(animate);
    }
    for (let i = 0; i < numOfDots; i++) {
      let angle = 360 / numOfDots * i
      let x = ((Math.sqrt(2) * Math.pow(Math.sin(angle), 3)) * heart.size) + canvasBounds.width / 2 - heart.size / 10
      let y = ((Math.pow(-Math.cos(angle), 3) - (Math.pow(Math.cos(angle), 2)) + 2 * Math.cos(angle)) * -heart.size) + canvasBounds.height / 2 - heart.size / 2
      newHeartParticles.push(createHeartParticles());
      newHeartParticles[i].style.left = x + "px"
      newHeartParticles[i].style.top = y + "px"
      // console.log(newHeartParticles[i].style.left)
      // console.log(heart.size)
    }

    function moveHeart() {
      if (heart.size >= heart.maxSize) {
        heart.growing = false;
      }
      if (heart.size <= heart.minSize) {
        heart.growing = true;
      }
      if (!heart.growing) {
        heart.size -= heart.growthRate;
        heart.g += heart.colorFactor;
        heart.b += heart.colorFactor;
      }
      if (heart.growing) {
        heart.size += heart.growthRate;
        heart.g -= heart.colorFactor;
        heart.b -= heart.colorFactor;
      }
    }
    function createHeartParticles() {
      let particleDiv = document.createElement("div")
      particleDiv.classList.add("TEAM_A_ANI_A_heartPoint");
      parentCanvas.appendChild(particleDiv);
      return particleDiv;
    }

  }
}