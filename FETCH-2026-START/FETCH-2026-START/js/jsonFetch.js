// window.onload = goApp;

// async function goApp(){
// console.log("hello fetch")

// }

window.onload = goFetch;

// async is used when functions are waiting for things
async function goFetch() {
    try {
        // Try to do what is in the accolades
        // Certain functions use waiting mechanics(see MDN functions that use waiting)
        let response = await fetch('files/tests.json');
        let data = await response.json();
        // console.log(response);
        console.log(data);
        displayResults(data);
    }
    catch (err) {
        // Catches the error if the "response" is not fetched
        console.log(err)
    }

    function displayResults(parsedResultJS) {
        for (let i = 0; i < parsedResultJS.length; i++) {
            console.log(parsedResultJS)

            //the object
            let donutObj = parsedResultJS[i];
            //container
            let containerDiv = document.createElement("div");
            containerDiv.classList.add("donutItem");
            document.querySelector("#output").appendChild(containerDiv);

            let title = document.createElement("h3");
            title.textContent = donutObj.name;
            containerDiv.appendChild(title)

            //access the image
            let donutImage = document.createElement("img");
            donutImage.src = donutObj.image;
            containerDiv.appendChild(donutImage)
        }

    }
}