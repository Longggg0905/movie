if (localStorage.getItem("curentUser")) {
    location.href = "./index.html";
}
// lấy thẻ form từ document đầu tiên ra
let form = document.querySelector("form") ;

form.addEventListener("submit" , function(event)
{ 
    event.preventDefault () ; // dừng toàn bộ chức năng mặc định 

let username = document.getElementById("username").value.trim();
let password = document.getElementById("password").value.trim();
let email = document.getElementById("email").value.trim();

if ( password.length < 6) {
    alert("mật khẩu cần trên 6 ký tự ")
} else {
    if (localStorage.getItem("users")) {
        let users = JSON.parse(localStorage.getItem("users")) ;
        users.push({
            username,
            password,
            email,
        }) ; 
        localStorage.setItem("users", JSON.stringify(users)) ;
    } else {
        localStorage.setItem(
            "users",
            JSON.stringify([{
                username,
                password,
                email,
            }])
        )
    }
    alert("Bạn đã đăng ký thành công ");
    location.href = "./login.html";
}
}) ;

