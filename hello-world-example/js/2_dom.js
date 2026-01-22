window.onload = setup
function setup() {
    console.log("running setup");
    // // let second_element = document.getElementById("two");
    // // // With QuerySelector you need to specify if it is an id or a class. So "#"" for ids "." for a class
    // // let second_again = document.querySelector("#two");
    // // console.log(second_element);
    // // console.log(second_again);

    // // Get the the info of all the tags. So ex: divs, p tags, h2 etc.
    // let elements = document.getElementsByTagName("div")
    // // Shows the elements as an array so you can access elements like an array
    // // Accesses the last element
    // console.log(elements[elements.length - 1])

    // // Shows all elements using for loop
    // for (let i = 0; i < elements.length; i++) {
    //     console.log(elements[i])
    // }
    // // Gets first div on the html page
    // let firstDiv = document.querySelector("div");
    // // Gets all div on html page (also can be called on as an array)
    // let allDivs = document.querySelectorAll("div");

    // let elementsWithClass = document.getElementsByClassName("square_shape")

    // let firstEl = document.querySelector(".square_shape");
    // // "textContent" gets the text of what is inside the specific class or id or div or whatever"
    // let htmlOfEl = firstEl.innerHTML;
    // let textOfEl = firstEl.textContent;
    // console.log(firstEl)
    // console.log(htmlOfEl)
    // console.log(textOfEl)

    // The id of the first selector that has the class square_shape has which id?
    // let idOfFive = document.querySelector(".square_shape").id;
    // console.log(idOfFive)
    // // Get attribute of the id two called sabines_attribute
    // let el = document.querySelector("#two").getAttribute("sabines_attribute")
    // console.log(el)

    // Get parent of an element
    let parentOfOne = document.querySelector("#one").parentElement.parentElement;
    console.log(parentOfOne)

    // Get children of an element
    let childrenOfFlex = document.querySelector(".wrapper_flex_box").children;
    console.log(childrenOfFlex)

    // for (let i = 0; i < childrenOfFlex.length; i++) {
    //     console.log(childrenOfFlex[i])
    // }
}
