window.onload = setup;
function setup() {
    console.log("events!")
    let introSection = document.querySelector("#intro");
    introSection.addEventListener("click", mouseClickCallBack)
    // When you add mouseClickCallBack with paranthesis "()" it immediately calls the function. But without the parantheis makes sure it only calls when the introSection is clicked

    let s1 = document.querySelector("#s1");
    s1.addEventListener("click", mouseClickCallBack);

}

function mouseClickCallBack(eventObj) {
    //console.log("clicked");
    // console.log(this)
    console.log(eventObj)
    // "this" refers to the elements that triggered the event listener. So when the intro is clicked it will return the intro section elements. Useful way to access who triggered the click
    this.style.bacground = "blue"
    //eventObj.target.style.background = "blue" => This changes the color of the specific element being clicked Ex: the paragraph being clicked not the whole element.
    let idOfThis = this.id
    //console.log(document.querySelector(`#${idOfThis} p`))
    // Template strings => `#${variable} attribute` have to use back quotation marks
    let classToAdd = `${idOfThis}-section-active`
    // The class name will become the name of the id + -section-active
    this.classList.add(classToAdd);
}

function mouseClicks1CallBack() {
    console.log("s1 clicked")
}