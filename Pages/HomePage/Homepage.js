
var memStorage = window.sessionStorage;
var locStorage = window.localStorage;
var userInfo;
function defaultPage()
{
    if(memStorage.getItem('user')!=null)
    {
        userInfo = JSON.parse(memStorage.getItem('user'));
        console.log(userInfo.username)
        console.log(memStorage.getItem('user'));
        document.getElementById('content').innerHTML = `<div class = pageHeader><H1>Welcome ${userInfo.username}<H1></div>
        <div id="googleMap" ></div>`;
    }
    else{
        console.log("need to sign in")
    }
    //check if there is already a user saved in memory, if so enter in values to forms
}
defaultPage();


    