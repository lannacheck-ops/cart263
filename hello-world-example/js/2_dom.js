window.onload = setup
function setup() {
    console.log("running setup");
    // let second_element = document.getElementById("two");
    // // With QuerySelector you need to specify if it is an id or a class. So "#"" for ids "." for a class
    // let second_again = document.querySelector("#two");
    // console.log(second_element);
    // console.log(second_again);

    // Get the the info of all the tags. So ex: divs, p tags, h2 etc.
    let elements = document.getElementsByTagName("div")
    // Shows the elements as an array so you can access elements like an array
    // Accesses the last element
    console.log(elements[elements.length - 1])

    // Shows all elements using for loop
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i])
    }
    // Gets first div on the html page
    let firstDiv = document.querySelector("div");
    // Gets all div on html page (also can be called on as an array)
    let allDivs = document.querySelectorAll("div");

    let elementsWithClass = document.getElementsByClassName("square_shape")


}
