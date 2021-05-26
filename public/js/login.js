
// const IP = "172.20.10.2";
// const PORT = 3000;
// const URL_REQUEST = "http://" + IP + ":" + PORT;

// // const URL_REQUEST = "https://sv1communication.herokuapp.com";
// // LOGIN

// let username = document.querySelector("#name");
// let password = document.querySelector("#password");
// let error_txt = document.querySelector(".error-txt")

// function login() {
//     let input_infor = {
//         user: username.value,
//         password: password.value
//     };
//     axios.post(URL_REQUEST + "/login", input_infor).then( (response) =>{
//         if (response.data){
//             localStorage.setItem("username", username.value);
//             window.location.pathname = "message.html";
//             error_txt.style.display = "none";
//         }else{
//             error_txt.style.display = "block";
//         }
//     });
// }
// let loginBtn = document.querySelector("#login");
// loginBtn.addEventListener("click", login);