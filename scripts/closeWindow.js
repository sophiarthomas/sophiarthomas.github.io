/* 
    1. Selection: select the specific element it wants to change. Using methods provided by the Document object 
        document.getElementById("myId")
        document.querySelector(".myClass")
        document.querySelectorAll("p") (returns a list of elements)
    2. Manipulation: element is selected you can modify its properties 
        element.textContent = "New Text Here"
        element.innerHTML = "<h1>New HTML</h1>"
        element.style.color = "blue";
        element.setAttribute("src", "newimage.jpg")
        document.createElement("div") - create new eleemt added using methods like appendChild()
        element.remove()
    3. Event Handling: Changes in response to a users actions 
        button.addEventListener("click", function() { /* Manipulation code *})
*/
function toggleMinimize(dot) {
  const windowEl = dot.closest('.window');
  windowEl.classList.toggle('minimized');
}

document.querySelectorAll(".dot.yellow").forEach(toggleMinimize);

function toggleFullScreen(dot) {
    const windowEl = dot.closest('.window'); 
    windowEl.classList.toggle('maxmimized')
}
docuement.querySelectorAll('.dot.green').forEach(toggleFullScreen); 
