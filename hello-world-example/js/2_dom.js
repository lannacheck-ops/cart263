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
    // let parentOfOne = document.querySelector("#one").parentElement.parentElement;
    // console.log(parentOfOne)

    // // Get children of an element
    // let childrenOfFlex = document.querySelector(".wrapper_flex_box").children;
    // console.log(childrenOfFlex)

    // for (let i = 0; i < childrenOfFlex.length; i++) {
    //     console.log(childrenOfFlex[i])
    // }

    document.querySelector("#four").textContent = "<h3> a new h3 </h3>"

    console.log(document.querySelector("p span"))
    // document.querySelector(".square_shape").classList.add("another_class_2")
    document.querySelector(".square_shape").style.background = "rgba(200,160,0)";

    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";

    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)
}
// Order of priority of styles(most prioritized to least prioritized) = style in the html, id, class
// What do you want to access and what will you do once you access it