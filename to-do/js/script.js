
// FOR NAVBAR

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




// FOR ADD TASK
var addTodo = document.querySelector(".add-task-todo");
var addDoing = document.querySelector(".add-task-doing");
var addDone = document.querySelector(".add-task-done");
var closeData = document.querySelector(".fa-times-circle");
var boxData = document.querySelector(".box-data");
var main = document.getElementsByTagName("main");
var btnsavTask = document.querySelector(".save-task");
var data = document.querySelector(".data");

// function addTask(){
//   boxData.classList.toggle("show-box-data");
//   main[0].classList.toggle("filter");
// }


//FOR ADD TASK - TODO
var listTodo = document.querySelector(".list-todo");
addTodo.onclick = function(){
  //OPEN BOX FOR DATA
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");

  btnsavTask.setAttribute("id", "fortodo");
  var savTaskTodo = document.getElementById("fortodo");
  data.value = "";

  //FOR CREATE NEW TODO
  savTaskTodo.onclick = function(){
    var newLi = document.createElement("li");
    listTodo.appendChild(newLi);
    newLi.classList.add("task-todo");

    var nameTask = document.createElement("p");
    newLi.appendChild(nameTask);


    nameTask.textContent = data.value;

    var icon = document.createElement("i");
    newLi.appendChild(icon);
    icon.classList.add("fas", "fa-ellipsis-h", "edit-todo");

    boxData.classList.toggle("show-box-data");
    main[0].classList.toggle("filter");

    //CREATE BOX OP

    var crboxOp = document.createElement("div");
    newLi.appendChild(crboxOp);
    crboxOp.classList.add("op-task");
    var crUl = document.createElement("ul");
    crboxOp.appendChild(crUl);
    

    
    //CREAT BTN RENAME
    var rnm = document.createElement("li");
    crUl.appendChild(rnm);
    rnm.classList.add("li-op");
    var iconrnm = document.createElement("i");
    rnm.appendChild(iconrnm);
    iconrnm.classList.add("fas", "fa-edit")
    var txtrnm = document.createElement("p");
    txtrnm.textContent = "Rename"
    rnm.appendChild(txtrnm);

    //CREATE BTN DELETE
    var dlt = document.createElement("li");
    crUl.appendChild(dlt);
    dlt.classList.add("li-op");
    var icondlt = document.createElement("i");
    dlt.appendChild(icondlt);
    icondlt.classList.add("fas", "fa-trash-alt")
    var txtdlt = document.createElement("p");
    txtdlt.textContent = "Delete"
    dlt.appendChild(txtdlt);

    var toTodo = document.createElement("li");
    toTodo.classList.add("to-todo");
    toTodo.textContent = "To Do";
    crUl.appendChild(toTodo);

    var toDoing = document.createElement("li");
    toDoing.classList.add("to-doing");
    toDoing.textContent = "Doing";
    crUl.appendChild(toDoing);

    var toDone = document.createElement("li");
    toDone.classList.add("to-done");
    toDone.textContent = "Done"
    crUl.appendChild(toDone);
  }
}


//FOR OPEN OP
var op = listTodo.children;
var openOp = document.querySelectorAll(".op-task");
for (iTodo = 0; iTodo < op.length; iTodo++){
  op[iTodo].onclick = function(){
    openOp.classList.toggle("show-op-task")
    openOp.classList.toggle("op-todo")
  }
}


// FOR ADD TASK - DOING
addDoing.onclick = function(){
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");

  btnsavTask.setAttribute("id", "fordoing");
  var savTaskDoing = document.getElementById("fordoing");
  data.value = "";

  savTaskDoing.onclick = function(){};
}
addDone.onclick = function(){
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");
}
closeData.onclick = function(){
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");
}
