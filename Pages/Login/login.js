//remember me = save username and password to local storage
var form = document.getElementById("formId")
var memStorage = window.sessionStorage;
var locStorage = window.localStorage;
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
                
                if(rememberMe)
                {
                    //save to local storage
                    localStorage.setItem('user',JSON.stringify(users[i]));
                }
                else{
                    //remove from local storage
                }
                //save to temp memory that the user is signed in to the user
                console.log("sign in success")
                window.location.replace("https://jj2628.netlify.app/index.html");
                memStorage.setItem('user',JSON.stringify(users[i]));
            }
            else
            {
                console.log("sign in fail");
            }
        }
    }
}

function defaultPage()
{
    if(locStorage.getItem('user')!=null)
    {
        var user = JSON.parse(locStorage.getItem('user'));
        console.log(user.username);
        console.log(user.password);
        document.getElementById('userName').value = user.username;
        document.getElementById('passWord').value = locStorage.getItem('user').password;
    }
    if(memStorage.getItem('user')!=null)
    {
        console.log('I am signed in'); //setup an account page to view with a log out button
    }
    else{
        console.log("need to sign in")
    }
    //check if there is already a user saved in memory, if so enter in values to forms
}
defaultPage();








document.querySelector("#loginsubmitbutton").addEventListener("click", loginSubmit);