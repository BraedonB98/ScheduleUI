
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
        document.getElementById('content').innerHTML = `<H1>Welcome ${userInfo.username}<H1>`;
    }
    else{
        console.log("need to sign in")
    }
    //check if there is already a user saved in memory, if so enter in values to forms
}
defaultPage();
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(39.365890,-104.861590),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);}

    