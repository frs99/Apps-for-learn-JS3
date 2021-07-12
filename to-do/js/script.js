var btnNavbar = document.querySelector(".icon-resp");
var showIcon = document.querySelector(".fa-bars");
var hideIcon = document.querySelector(".fa-angle-double-left");
var list = document.querySelector(".sidebar");

function openList(){
  showIcon.classList.toggle("hide-icon");
  hideIcon.classList.toggle("hide-icon");
  list.classList.toggle("show-aside");
};
btnNavbar.onclick = openList;