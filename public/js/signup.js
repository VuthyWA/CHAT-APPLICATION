
// const IP = "172.20.10.2";
// const PORT = 3000;
// const URL_REQUEST = "http://" + IP + ":" + PORT;
const URL_REQUEST = "thy-sak-chatapp.herokuapp.com";
// SIGN UP PAGE
let err_txt = document.querySelector(".error-txt");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let mail = document.querySelector("#mail");
let password = document.querySelector("#password");
let btn_signup = document.querySelector("#signup");

function signupFunction(){
    localStorage.setItem("username",firstName.value);
    localStorage.setItem("password", password.value);
    // sign up data:
    let sign_up_data = {
        firstName: firstName.value,
        lastName: lastName.value,
        mail: mail.value,
        password: password.value
    };
    axios.post(URL_REQUEST + "/signup", sign_up_data).then( (response)=>{
        let could_signup = response.data;
        if (could_signup){
            window.location.pathname ="message.html";
            err_txt.style.display = "none";
        }else{
            err_txt.style.display = "block";
        };
    });
}
btn_signup.addEventListener("click", signupFunction);

