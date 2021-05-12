
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
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}