const cloud = '../assets/img/icons/cloud.png';
let z = 10; 

const projects = [
     { name: "EXPLORE", icon: cloud },
     { name: "Kali Linux Emulator", icon: cloud },
     { name: "Digital Certificate Automation", icon: cloud}
]; 
const skills = [
     { name: "React", icon: cloud}
]; 
const experience = [
    { name: "Technical Support Intern", icon: cloud },  
];
const about_me = [
    
]
const folders = {
     projects: projects,
     skills: skills, 
     experience: experience, 
     about_me: about_me
};

/* Open window */
function openWindow(name) {
     const left = (Math.random() * window.innerWidth - 150); 
     const top = (Math.random() * window.innerHeight - 150);
     const win = document.getElementById(`window-${name}`); 
     if (!win) return; 
     // win.style.left = `${left}px`;
     // win.style.top = `${top}px`;
     win.classList.remove("hidden");
     win.style.zIndex = ++z; 

     const items = folders[name] || []; 
     if (name == "about_me") return; 
     if (name == "notes") {
          const url = "../src/listall.html"; 
          window.open(url, '_blank');
     }; 
     win.innerHTML = 
          `<div class=titlebar-kali>
          <span>root@kali:~/${name}</span>
          <button class="window-close" onclick="closeWindow()">x</button>
          </div>`
     win.innerHTML += items.map(p => 
          `<div class="file">
           <img src="${p.icon}" class="file-icon" />
          <span>${p.name}</span>
          </div>`)
    .join(" ");
}

function closeWindow(name) {
     const win = document.getElementById(`window-${name}`); 
     win.classList.add("hidden"); 
}

function openProject() {
     

}

document.addEventListener("click", (e) => {
     const btn = e.target.closest(".window-close"); 
     if (!btn) return; 

     btn.closest(".window-kali").classList.add("hidden"); 
});