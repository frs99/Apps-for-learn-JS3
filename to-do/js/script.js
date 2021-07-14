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


var addTodo = document.querySelector(".add-task-todo");
var addDoing = document.querySelector(".add-task-doing");
var addDone = document.querySelector(".add-task-done");
var closeData = document.querySelector(".fa-times-circle");
var boxData = document.querySelector(".box-data");
var main = document.getElementsByTagName("main");
function addTask(){
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");
}

addTodo.onclick = addTask;
addDoing.onclick = addTask;
addDone.onclick = addTask;
closeData.onclick = addTask;

// function PopupCenter(url, title, w, h) {  
//   // Fixes dual-screen position                         Most browsers      Firefox  
//   var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;  
//   var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;  
            
//   width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;  
//   height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;  
            
//   var left = ((width / 2) - (w / 2)) + dualScreenLeft;  
//   var top = ((height / 2) - (h / 2)) + dualScreenTop;  
//   var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);  

//   // Puts focus on the newWindow  
//   if (window.focus) {  
//       newWindow.focus();  
//   }  
// }
// PopupCenter('http://www.xtf.dk','xtf','900','500');