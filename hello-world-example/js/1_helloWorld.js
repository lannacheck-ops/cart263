// When the window is loaded run function "setup"
//Window object hasevent called onload
window.onload = setup
/**
 * Function setup runs when page has loaded
 */
function setup() {
    console.log("running setup");
    // Writes to the html page
    // Document.write overwrites the whole document. You can add p tag or H2 to specify where to write what is written in the document.write
    document.write("HELLO WORLD AFTER LOAD IN FUNCTION");
}