// scroll top
const scroll = document.querySelector(".scroll-top");

window.addEventListener('scroll', () =>{
    if (window.pageYOffset > 100){
        scroll.classList.add("active");
    }else{
        scroll.classList.remove("active");
    }
});


const sideMenu = document.querySelector(".nav-bar");
const sideBar = document.querySelector(".sidemenu-wrapper");

sideMenu.addEventListener('click', () =>{
    sideBar.style.display = "block";
});

// display window none
window.onclick = function(event){
    if (event.target == sideBar){
        sideBar.style.display = "none";
    }
}


// see more
// const more = document.querySelector(".view");
// const newproj = document.querySelector('.new-projects');

// more.addEventListener('click', () =>{
//     if(newproj.style.display === "none"){
//         newproj.style.display = "flex";
//         more.innerHTML = "View less";
//     }else{
//         newproj.style.display = "none";
//         more.innerHTML = "View more";
//     }
// });