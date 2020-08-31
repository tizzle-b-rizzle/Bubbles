var noOfBubbles = 0;
function createBubble() {
    noOfBubbles += 1;
    jsBubble = document.createElement("div"); //creates a div
    jsBubble.id = "bubble" + noOfBubbles; //the div id
    jsBubble.className ="bubble-class";  //gives the div a class to style the bubbles
    document.getElementById("page-grid").appendChild(jsBubble); //adds the div into the DOM
    var randomNumber = Math.floor(Math.random() * 20) + 20; //generates a random number between WORK OUT
    jsBubble.style.gridRow = randomNumber; //determines the row of the bubble when it's generated
    jsBubble.style.gridColumn = randomNumber; //determines the column of the bubble when it's generated
    var element = document.getElementById("bubble" + noOfBubbles); //each bubble
    element.onclick = async function removeBubble() { //when a bubble is clicked, that pubble us removes
        var audio = document.getElementById("pop-noise");//works but a bit slow
        if (this.style.animationName != "pop") {
            this .style.animationName = "pop";
            await audio.play();
        }
        noOfBubbles -= 1;
        this.remove()
    }
} ;

//make it so every x seconds the bubbles move up/down and left/right and when they hit the floor they pop (do this by increasing the grid row/column)


