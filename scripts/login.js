if (localStorage.getItem("currentUser")) {
    location.href = "./index.html" ;

}
let form = document.querySelector("form") ;
form.addEventListener("submit" , function(event) {
    event.preventDefault () ;
    let users = JSON.parse(localStorage.getItem("users"));

    let ussername = document.getElementById("username").value.trim();
 let password = document.getElementById("password").value.trim();
 let email = document.getElementById("email").value.trim();

 let existingUser = users.find(function (index) {
    return index.email === email && index.password === password


 })
 if ( existingUser){
    localStorage.setItem("currentUser"),JSON.stringify(existingUser)
    alert("dang nhap thanh cong")
    location.href = "./index.html"
 } else {
    alert("khong chinh xac")
 }
});

