//remember me = save username and password to local storage
var form = document.getElementById("formId")

class User{
    constructor(username,password,job){
        this.username=username;
        this.password = password;
        this.job=job;
    }
}


function loginSubmit()
{
    console.log("here");
    event.preventDefault();
    username = document.getElementById("userName").value
    password = document.getElementById("passWord").value
    console.log(username);
    console.log(password);
}

function defaultPage()
{
    //put the check if there is a username and password saved in local memory here.
}
defaultPage();








document.querySelector("#loginsubmitbutton").addEventListener("click", loginSubmit);