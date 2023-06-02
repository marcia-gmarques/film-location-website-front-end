const pearsestreet = {
    id: "pearse",
    accessible: 0,
    view_360: 1,
    dublin: 1
};




function red() {
    window.localStorage.setItem('user_colour', "red");
    window.localStorage.setItem('com_colour', "blue");
    //  window.location.href = "pong.html";
};

function submit() {

    let user_preferences = $('form').serializeArray();
    //   let colour = user_preferences[1].value;
    //    let level = user_preferences[0].value;
    //  window.localStorage.setItem('user_colour', "blue");
    //  window.localStorage.setItem('com_colour', "red");
    //  console.log(colour);
    /*   if (JSON.stringify(colour) == JSON.stringify("red")) {
           red();
       }*/


    //   window.localStorage.setItem('level', level);
    // window.location.href = "pong.html"; // GO TO PONG.HTML

}



function filter_dublin() {
    let get = document.querySelectorAll('.non-dublin');
     //check if checked or not
    let dublin = document.getElementById('dublin').checked;
    if (dublin) {//show dublin
        get.forEach(element => {
            element.style.display = "none";
        });
    }
    else {//show non-dublin
        get.forEach(element => {
            element.style.display = "block";
        });
    }
}


function filter_accessibile() {
    let get = document.querySelectorAll('.inaccessible');
    //check if checked or not
    let accessibile = document.getElementById('accessible').checked;
    if (accessibile) {//show accessible only
        get.forEach(element => {
            element.style.display = "none";
        });
    }
    else {//show all
        get.forEach(element => {
            element.style.display = "block";
        });
    }
}



function filter_view() {
    let get = document.querySelectorAll('.no_view_360');
    //check if checked or not
    let view_360 = document.getElementById('view_360').checked;
    if (view_360) {//show o only
        get.forEach(element => {
            element.style.display = "none";
        });
    }
    else {//show all
        get.forEach(element => {
            element.style.display = "block";
        });
    }
}






$(document).ready(function () {
    document.getElementById("dublin").addEventListener("click", filter_dublin);
    document.getElementById("accessible").addEventListener("click", filter_accessibile);
    document.getElementById("view_360").addEventListener("click", filter_view);
});