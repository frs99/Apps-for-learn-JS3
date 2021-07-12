var btnNavbar = document.querySelector(".icon-resp");
var showIcon = document.querySelector(".fa-bars");
var hideIcon = document.querySelector(".fa-angle-double-left");
var list = document.querySelector(".sidebar");
var hideUl = document.querySelectorAll(".all-ul ul li");

function openList(){
  showIcon.classList.toggle("hide-icon");
  hideIcon.classList.toggle("hide-icon");
  list.classList.toggle("show-aside");
  for( i=0; i < hideUl.length; i++){
    hideUl[i].classList.toggle("li-hide");
  }
};
btnNavbar.onclick = openList;