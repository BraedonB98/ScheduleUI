var display = false;
function newAnnouncement(){
    addAnnouncementPage();
}
function addAnnouncementPage(){
    console.log ("I am here")
    var announcementDiv = document.getElementById("announcementDiv");
    var announcementTitle = document.getElementById("subject").value;
    var announcementContent = document.getElementById("content").value;
    //get date and insert here
    var date = getDateFormat();
    var newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="card">
    <h2>${announcementTitle}</h2>
    <h5>Jimmy Johns, ${date}</h5>
    `//<div class="fakeimg" style="height:200px;">Image</div> 
    +`<p>${announcementContent}</p>
    </div>`;
    announcementDiv.prepend(newDiv);
}

function showForm(){
    var announcementFormDiv = document.getElementById("newAnnouncementForm");
    if (display){
        console.log("hiding div")
        announcementFormDiv.style.display = "none";
        display = false
    }
    else{
        console.log("showing div")
        announcementFormDiv.style.display = "block";
        display = true;
    }
}
function getDateFormat(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    switch(month){
        case 0: month = "January";
            break;
        case 1: month = "February";
            break;
        case 2: month = "March";
            break;
        case 3: month = "April";
            break;
        case 4: month = "May";
            break;
        case 5: month = "June"; 
            break;
        case 6: month = "July";
            break;
        case 7: month = "August";
            break;
        case 8: month = "September";
            break;
        case 9: month = "October";
            break;
        case 10: month = "November";
            break;
        case 11: month = "December";
            break;
        }
    var fullDate = (month +" " + day +", " +year);

    console.log(fullDate);
    return (fullDate);
}

document.querySelector("#newAnnouncementSubmitButton").addEventListener("click", newAnnouncement);
document.querySelector("#newAnnouncementButton").addEventListener("click", showForm);