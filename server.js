
const express = require("express");
const fs = require("fs");
const app = express();
let PORTs = 3000;
app.listen(process.env.PORT || PORTs, ()=> console.log("server is running.."))

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

let datas = JSON.parse(fs.readFileSync("datas.json"));
// GET DATA FROM SIGN UP
app.post("/sign_up", (req, res) =>{
    let could_sign_up = true;
    let sign_up_infor = req.body;
    for (let data of datas){
        if(data.mail === sign_up_infor.mail){
            could_sign_up = false;
        }
    }
    res.send (could_sign_up);
    datas.push(sign_up_infor);
    fs.writeFileSync("datas.json",JSON.stringify(datas));
})

// LOGIN MESSAGE
app.post("/login", (req, res) => {
    let input_infor = req.body;
    let status =false;
    for (let user of datas) {
        if(input_infor.user === user.firstName && input_infor.password === user.password){
            status = true;
        }
    }
    res.send(status);
});


// MESSAGE CHAT 
let message = JSON.parse(fs.readFileSync("message.json"));
app.get("/getdata", (req, res) => {
    res.send(JSON.parse(fs.readFileSync("message.json")));
});
// add message to message.json
app.post("/add", (req, res) => {
    let username = req.body.name;
    let txt = req.body.text;
    let new_data = {
        name: username,
        text: txt
    }
    message.push(new_data);
    fs.writeFileSync("message.json", JSON.stringify(message));
    res.send(message);
});