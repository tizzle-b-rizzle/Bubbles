jsBubble = document.createElement("div");
jsBubble.id = "bubble";
jsBubble.className ="bubble-class";  
jsBubble.onclick = function removeBubble() { //this seems to only work when you do the onclick like this
    document.getElementById("page-grid").removeChild(jsBubble);
} ;
function createBubble() {
    document.getElementById("page-grid").appendChild(jsBubble);
}


