// //CLOSE
// // FOR NAVBAR

// var btnNavbar = document.querySelector(".icon-resp");
// var showIcon = document.querySelector(".fa-bars");
// var hideIcon = document.querySelector(".fa-angle-double-left");
// var list = document.querySelector(".sidebar");
// var hideUl = document.querySelectorAll(".all-ul ul li");

// function openList(){
//   showIcon.classList.toggle("hide-icon");
//   hideIcon.classList.toggle("hide-icon");
//   list.classList.toggle("show-aside");
//   for( i=0; i < hideUl.length; i++){
//     hideUl[i].classList.toggle("li-hide");
//   }
// };
// btnNavbar.onclick = openList;




// // FOR ADD TASK
// var addTodo = document.querySelector(".add-task-todo");
// var addDoing = document.querySelector(".add-task-doing");
// var addDone = document.querySelector(".add-task-done");
// var closeData = document.querySelector(".fa-times-circle");
// var boxData = document.querySelector(".box-data");
// var main = document.getElementsByTagName("main");
// var btnsavTask = document.querySelector(".save-task");
// var data = document.querySelector(".data");
// var numTodo = document.querySelector('.num-todo');
// var numDoing = document.querySelector('.num-doing');
// var numDone = document.querySelector('.num-done');

// // function addTask(){
// //   boxData.classList.toggle("show-box-data");
// //   main[0].classList.toggle("filter");
// // }


// //FOR ADD TASK - TODO
// var listTodo = document.querySelector(".list-todo");
// addTodo.onclick = function(){
//   //OPEN BOX FOR DATA
//   boxData.classList.toggle("show-box-data");
//   main[0].classList.toggle("filter");

//   btnsavTask.setAttribute("id", "fortodo");
//   var savTaskTodo = document.getElementById("fortodo");
//   data.value = "";

//   //FOR CREATE NEW TODO
//   savTaskTodo.onclick = function(){
//     var newLi = document.createElement("li");
//     listTodo.appendChild(newLi);
//     newLi.classList.add("task-todo");

//     var nameTask = document.createElement("p");
//     newLi.appendChild(nameTask);


//     nameTask.textContent = data.value;

//     var icon = document.createElement("i");
//     newLi.appendChild(icon);
//     icon.classList.add("fas", "fa-trash", "btn-delete");

//     boxData.classList.toggle("show-box-data");
//     main[0].classList.toggle("filter");
//     numTodo.textContent = listTodo.children.length;

//     // FOR DELETE TASK TODO
//     var btnDeleteTodo = document.getElementsByClassName("btn-delete");
//     for (iBtnTodo = 0; iBtnTodo < btnDeleteTodo.length; iBtnTodo++){
//       btnDeleteTodo[iBtnTodo].onclick = function(){
//         this.parentNode.remove();
//         numTodo.textContent = listTodo.children.length;
//       };
//     };
//   };
// };



// // FOR ADD TASK - DOING
// var listDoing = document.querySelector(".list-doing");
// addDoing.onclick = function(){
//   boxData.classList.toggle("show-box-data");
//   main[0].classList.toggle("filter");

//   btnsavTask.setAttribute("id", "fordoing");
//   var savTaskDoing = document.getElementById("fordoing");
//   data.value = "";

//   //FOR CREATE NEW TODO
//   savTaskDoing.onclick = function(){
//     var newLi = document.createElement("li");
//     listDoing.appendChild(newLi);
//     newLi.classList.add("task-doing");

//     var nameTask = document.createElement("p");
//     newLi.appendChild(nameTask);


//     nameTask.textContent = data.value;

//     var icon = document.createElement("i");
//     newLi.appendChild(icon);
//     icon.classList.add("fas", "fa-trash", "btn-delete");

//     boxData.classList.toggle("show-box-data");
//     main[0].classList.toggle("filter");
//     numDoing.textContent = listDoing.children.length;
//     // FOR DELETE TASK TODO
//     var btnDeleteDoing = document.getElementsByClassName("btn-delete");
//     for (iBtnDoing = 0; iBtnDoing < btnDeleteDoing.length; iBtnDoing++){
//       btnDeleteDoing[iBtnDoing].onclick = function(){
//         this.parentNode.remove();
//         numDoing.textContent = listDoing.children.length;
//       };
//     };
//   };
// }

// // FOR ADD TASK - DONE
// var listDone = document.querySelector(".list-done");
// addDone.onclick = function(){
//   boxData.classList.toggle("show-box-data");
//   main[0].classList.toggle("filter");

//   btnsavTask.setAttribute("id", "fordone");
//   var savTaskDone = document.getElementById("fordone");
//   data.value = "";

//   //FOR CREATE NEW TODO
//   savTaskDone.onclick = function(){
//     var newLi = document.createElement("li");
//     listDone.appendChild(newLi);
//     newLi.classList.add("task-done");

//     var nameTask = document.createElement("p");
//     newLi.appendChild(nameTask);


//     nameTask.textContent = data.value;

//     var icon = document.createElement("i");
//     newLi.appendChild(icon);
//     icon.classList.add("fas", "fa-trash", "btn-delete");

//     boxData.classList.toggle("show-box-data");
//     main[0].classList.toggle("filter");
//     numDone.textContent = listDone.children.length;
//     // FOR DELETE TASK TODO
//     var btnDeleteDone = document.getElementsByClassName("btn-delete");
//     for (iBtnDone = 0; iBtnDone < btnDeleteDone.length; iBtnDone++){
//       btnDeleteDone[iBtnDone].onclick = function(){
//         this.parentNode.remove();
//         numDone.textContent = listDone.children.length;
//       };
//     };
//   };
// }
// closeData.onclick = function(){
//   boxData.classList.toggle("show-box-data");
//   main[0].classList.toggle("filter");
// }





// //CREATE BOX OP

//     // var crboxOp = document.createElement("div");
//     // newLi.appendChild(crboxOp);
//     // crboxOp.classList.add("op-task");
//     // var crUl = document.createElement("ul");
//     // crboxOp.appendChild(crUl);



//     // //CREAT BTN RENAME
//     // var rnm = document.createElement("li");
//     // crUl.appendChild(rnm);
//     // rnm.classList.add("li-op");
//     // var iconrnm = document.createElement("i");
//     // rnm.appendChild(iconrnm);
//     // iconrnm.classList.add("fas", "fa-edit")
//     // var txtrnm = document.createElement("p");
//     // txtrnm.textContent = "Rename"
//     // rnm.appendChild(txtrnm);

//     // //CREATE BTN DELETE
//     // var dlt = document.createElement("li");
//     // crUl.appendChild(dlt);
//     // dlt.classList.add("li-op");
//     // var icondlt = document.createElement("i");
//     // dlt.appendChild(icondlt);
//     // icondlt.classList.add("fas", "fa-trash-alt")
//     // var txtdlt = document.createElement("p");
//     // txtdlt.textContent = "Delete"
//     // dlt.appendChild(txtdlt);

//     // var toTodo = document.createElement("li");
//     // toTodo.classList.add("to-todo");
//     // toTodo.textContent = "To Do";
//     // crUl.appendChild(toTodo);

//     // var toDoing = document.createElement("li");
//     // toDoing.classList.add("to-doing");
//     // toDoing.textContent = "Doing";
//     // crUl.appendChild(toDoing);

//     // var toDone = document.createElement("li");
//     // toDone.classList.add("to-done");
//     // toDone.textContent = "Done"
//     // crUl.appendChild(toDone);