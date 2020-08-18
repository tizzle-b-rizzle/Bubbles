
function createBubble() {
    jsBubble = document.createElement("div"); //creates a div
    jsBubble.id = "bubble"; //the div id
    jsBubble.className ="bubble-class";  //gives the div a class to style the bubbles
    document.getElementById("page-grid").appendChild(jsBubble); //adds the div into the DOM
    var randomNumber = Math.floor(Math.random() * 20) + 30; //generates a random number between 20 and 50
    jsBubble.style.gridRow = randomNumber; //determines the row of the bubble when it's generated
    jsBubble.style.gridColumn = randomNumber; //determines the column of the bubble when it's generated
    jsBubble.onclick = function removeBubble() { //this seems to only work when you do the onclick like this
    document.getElementById("page-grid").removeChild(jsBubble);
} ;

}

