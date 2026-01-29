window.onload = setup;
function setup() {
    console.log("events!")
    let introSection = document.querySelector("#intro");
    introSection.addEventListener("click", mouseClickCallBack)
    // When you add mouseClickCallBack with paranthesis "()" it immediately calls the function. But without the parantheis makes sure it only calls when the introSection is clicked

}

function mouseClickCallBack() {
    console.log("clicked");
}