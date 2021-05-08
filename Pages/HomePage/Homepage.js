
var memStorage = window.sessionStorage;
var locStorage = window.localStorage;

function defaultPage()
{
    if(memStorage.getItem('user')!=null)
    {
        document.getElementById('content').innerHTML = "<H1>Welcome User<H1>";
    }
    else{
        console.log("need to sign in")
    }
    //check if there is already a user saved in memory, if so enter in values to forms
}
defaultPage();