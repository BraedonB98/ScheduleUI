//Normal Sign in with JJ2628 Account
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
var users = [new User('GM','0','GM') , new User('AM','1','AM') , new User('PIC','2','PIC') , new User('IS','3','IS') , new User('D','4','D')];
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
                    locStorage.removeItem('user')
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
        document.getElementById('passWord').value = user.password;
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


//---------------------------------------------sign in with google functionality -------------------------------------------------------------

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.    
  }