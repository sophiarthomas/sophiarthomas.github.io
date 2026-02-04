/* 
Populate the desktop with folders and contains an event listener when the folder is double clicked
*/
const folder_icon = "../assets/img/logos/kali_folder.svg"
const folders = [
    { name: "projects", icon: folder_icon}, 
    { name: "about me", icon: folder_icon}, 
    { name: "resume", icon: folder_icon}, 
    { name: "skills", icon: folder_icon}, 
    { name: "notes", icon: folder_icon},
]; 

const desktop = document.getElementById("desktop");

folders.forEach(i => {
    desktop.innerHTML += `
    <div class="folder" data-name="${i.name}">
        <img src="${i.icon}">
        <span>${i.name}</span>
    </div>
    `;
});

/* click on a folder and open its respective window*/
desktop.addEventListener("dblclick", (e) => {
    const icon = e.target.closest(".folder");
    console.log(`example: ${icon.dataset.name}`); 
    if (!icon) return; 
    openWindow(icon.dataset.name)
}); 