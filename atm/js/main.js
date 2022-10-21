
//FOR PAGE LOGIN

let login = document.querySelector(".login input");
let user = document.querySelector(".user input");
let pass = document.querySelector(".pass input");

login.addEventListener("click", () => {
  if (user.value === "admin" && pass.value === "admin"){
    window.location.href = "pull.html";
  } else{
    // SWAL2
    // THANKS: https://sweetalert2.github.io/
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'ERROR IN PASSWORD OR USERNAME, PLEASE TRY: admin',
    })
    document.querySelector(".user").style.border = "solid #ff0000 2px";
    document.querySelector(".pass").style.border = "solid #ff0000 2px";
    document.querySelector(".user input").value = "admin";
    document.querySelector(".pass input").value = "admin";
  };
});



