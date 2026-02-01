const folder_icon = "../assets/img/logos/kali_folder.svg"
const folders = [
    { name: "Projects", icon: folder_icon}, 
    { name: "About Me", icon: folder_icon}, 
    { name: "Resume", icon: folder_icon}, 
    { name: "Skills", icon: folder_icon}, 
    { name: "Notes", icon: folder_icon},
]; 

const desktop = document.getElementById("desktop");

folders.forEach(i => {
    desktop.innerHTML += `
    <div class="folder" data-window"${i.name}">
        <img src="${i.icon}">
        <span>${i.name}</span>
    </div>
    `;
});

/* wip: click on a folder and it opens its respective window*/
desktop.addEventListener("dblclick", (e) => {
    const icon = e.target.closest(".folder-img"); 
    if (!icon) return; 
    openWindow(icon.dataset.window)
}); 