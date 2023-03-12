var username= ["lap"];
var password = ["12345"];

var username= ["sup"];
var password = ["12123213345"];

var username= ["howkkskskskkkgkkgkgkgk"];
var password = ["121237849378939783437894234789213345"];




localStorage.setItem('AccountName', JSON.stringify(username));
localStorage.setItem('AccountPass', JSON.stringify(password));

function SignUp (){
    let username =document.getElementById('username').value;
    let password =document.getElementById('password').value;
    if(CheckAccount(username,password) == 1){
           location.href= "http://127.0.0.1:5500/--buoi5.2adv--/page/home.html" 
    }

    else{
            alert('wrong pass or username dumbass')
    }
}

function CheckAccount(username,password){
    let passwordLocal = JSON.parse(localStorage.getItem("AccountPass"));
    let usernameLocal = JSON.parse(localStorage.getItem("AccountName"));
    for (let i =0 ;i < usernameLocal.length; i++ ){
        if( username == usernameLocal[i]){
            if(    password == passwordLocal[i]){
                return 1;
            } 
            else {
                return 0;
            }
        }
        else {
            return 0;
            }
    }
}
