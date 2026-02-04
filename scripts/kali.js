const folder = document.querySelector(".folder");
const cloud = '../assets/img/icons/cloud.png'
let z = 10; 

/* projects */
const projects = [
     { name: "EXPLORE", icon: cloud },
     { name: "Kali Linux Emulator", icon: cloud },
     { name: "Digital Certificate Automation", icon: cloud}
];

/* skills */

/* notes */

/* about me */

/* Open window */
function openWindow(name) {
     const win = document.getElementById(`window-${name}`); 
     if (!win) return; 
     win.classList.remove("hidden");
     win.style.zIndex = ++z; 
//      win.innerHTML = projects.map(p => 
//           `<div class="file">
//            <img src="${p.icon}" class="file-icon" />
//           <span>${p.name}</span>
//           </div>`)
//     .join(" ");
}

function closeWindow(name) {
     const win = document.getElementById(`window-${name}`); 
     win.classList.add("hidden"); 
}

function openProject() {
     

}
