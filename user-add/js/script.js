let name = document.querySelector(".data-name");
let age = document.querySelector(".data-age");
let country = document.querySelector(".data-country");
let sex = document.querySelector(".data-sex");

let btnAdd = document.querySelector(".data-submit");

let box = document.querySelector(".boxs");

let listArray = []

//WHEN CLICK BTN "ADD"
btnAdd.addEventListener("click", () => {
  if(name.value == "" || age.value == "" || country.value == "" || isNaN(age.value) == true){
    alert("ERROR")
  } else{
    addToArray()
    creatHtml()
    deleteValue()
  }
});

//DELETE CARD
box.addEventListener("click", (e) => {
  if(e.target.classList.contains("fa-times-circle")){
    deleteCard(e.target.parentNode.parentNode.getAttribute("data-id"))
  };
});


//ADD DATA TO ARRAY
function addToArray() {
  const person = {
    id: Date.now(),
    Name:name.value,
    Age: age.value,
    Country: country.value,
    Sex: sex.value,
  }

  listArray.push(person);
};

//CREATE ELEMENT HTML
function creatHtml(){
  box.innerHTML = "";
  
  listArray.forEach((theArray) => {

    //THE VALUE FOR IMG (SEX)
    var src = "";
    if(theArray.Sex == "man"){
      src = "img/beard.png";
    } else{
      src = "img/curly-hair.png"
    };

    let codeHtml = document.createRange().createContextualFragment(`
      <div class="box" data-id = ${theArray.id}>
        <div class="header">
          <img src=${src}>
          <i class="fas fa-times-circle"></i>
        </div>

        <div class="box-info">
          <p class="name">Im ${theArray.Name}</p>
          <p class="age">${theArray.Age} Year</p>
          <p class="country">From ${theArray.Country}</p>
        </div>
      </div>
    `)

    box.appendChild(codeHtml);
  })
};

function deleteValue(){
  name.value = "";
  age.value = "";
  country.value = "";
};

function deleteCard(id){
  listArray = listArray.filter((index) => index.id != id); 
  creatHtml();
};