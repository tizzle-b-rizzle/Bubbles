function remove() {
    bubble = document.getElementById("bubble");
    bubble.remove();
}
    document.addEventListener("DOMContentLoaded", function createBubble(){
    const bubble = document.createElement("div");
    bubble.id = "bubble";
    bubble.className ="bubble-class";
    document.body.appendChild(bubble);
}, false)


