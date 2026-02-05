/* 
Populate the desktop with folders and contains an event listener when the folder is double clicked
*/
const folder_icon = "../assets/img/logos/kali_folder.svg"
const desktopFolders = [
    { name: "projects", icon: folder_icon}, 
    { name: "about_me", icon: folder_icon}, 
    { name: "experience", icon: folder_icon}, 
    { name: "skills", icon: folder_icon}, 
    { name: "notes", icon: folder_icon},
]; 

const desktop = document.getElementById("desktop");

/* issue: The content keeps getting added each time you click on the folder icon */
desktopFolders.forEach(i => {
    desktop.innerHTML += `
    <div class="folder" data-name="${i.name}">
        <img src="${i.icon}">
        <span>${i.name}</span>
    </div>
    `;
});

/* click on a folder and open its respective window*/
desktop.addEventListener("click", (e) => {
    const icon = e.target.closest(".folder");
    console.log(`example: ${icon.dataset.name}`); 
    if (!icon) return; 
    openWindow(icon.dataset.name)
}); 