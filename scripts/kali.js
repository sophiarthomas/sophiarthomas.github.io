const windowEl = document.getElementById("window"); 
const fileList = document.getElementById("fileList"); 
const folder = document.querySelector(".folder");
const cloud = '../assets/img/icons/cloud.png'


/* projects */
const projects = [
     { name: "EXPLORE", icon: cloud },
     { name: "Kali Linux Emulator", icon: cloud },
     { name: "Digital Certificate Automation", icon: cloud}
];

/* Open window */
function openWindow() {
     windowEl.classList.remove("hidden");

     fileList.innerHTML = projects
     .map(p => 
          `<div class="file">
           <img src="${p.icon}" class="file-icon" />
          <span>${p.name}</span>
          </div>`)
    .join(" ");
}

function closeWindow() {
     windowEl.classList.add("hidden"); 
}

function openProject() {
     

}

folder.addEventListener("dblclick", openWindow);
