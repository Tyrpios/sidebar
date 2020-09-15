const toggleroo = document.querySelector(".sidebar-toggle");
const closeroo = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleroo.addEventListener("click", ()=>{
    console.log(sidebar.classList);
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    }
});

closeroo.addEventListener("click", ()=> {
    sidebar.classList.remove("show-sidebar");
});