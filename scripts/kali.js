const windowEl = document.getElementById("window"); 
const fileList = document.getElementById("fileList"); 
const folder = document.querySelector(".folder");


/* projects */
const projects = [
     { name: "EXPLORE", icon: "" },
     { name: "Kali Linux Emulator", icon: "" }
];

/* Open window */
function openWindow() {
     // console.log(windowEl.outerHTML);
     windowEl.classList.remove("hidden");

     fileList.innerHTML = projects
     .map(p => `<div class="file">${p.icon} ${p.name}</div>`)
    .join("");
}

function closeWindow() {
     windowEl.classList.add("hidden"); 
}
folder.addEventListener("click", openWindow);
