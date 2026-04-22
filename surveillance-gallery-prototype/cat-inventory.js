let catInventory = JSON.parse(localStorage.getItem("cats")) || [];
console.log(catInventory)

// Get carousel div from html to be the parent div for the images to append to
const parent = document.querySelector(".carousel");
displayInventory();
// Display the inventory
function displayInventory() {
    catInventory.forEach(cat => {
        const imageDiv = document.createElement("div");
        // Add class of card to each image
        imageDiv.classList.add("card");
        // Set image source
        imageDiv.innerHTML += `<img src=${cat} />`
        parent.appendChild(imageDiv);
    });
}