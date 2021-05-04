//remember me = save username and password to local storage
var form = document.getElementById("formId")

class User{
    constructor(username,password,job){
        this.username=username;
        this.password = password;
        this.job=job;
    }
}

const usr0 = new User('GM','0','GM');//creating profiles and making test profiles
const usr1 = new User('AM','1','AM');
const usr2 = new User('PIC','2','PIC');
const usr3 = new User('IS','3','IS');
const usr4 = new User('D','4','D');
var users = [usr0 , usr1 , usr2 , usr3 , usr4];

function loginSubmit()
{
    event.preventDefault();
    
    var username = document.getElementById("userName").value
    var password = document.getElementById("passWord").value
    var rememberMe = document.getElementById("remember").checked
    for(i in users)
    {
        
        if(users[i].username == username)
        {
            if(users[i].password == password)
            {
                console.log("sign in success")
                if(rememberMe)
                {
                    //save to local storage
                }
                //save to temp memory that the user is signed in to the user
            }
            else
            {
                console.log("sign in fail")
            }
        }
    }
}

function defaultPage()
{
    //check if there is already a user saved in memory, if so enter in values to forms
}
defaultPage();








document.querySelector("#loginsubmitbutton").addEventListener("click", loginSubmit);