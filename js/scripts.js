/*let url = window.location.href

function highlightElements() {

    console.log(url);
}

*/
function toggle() {
    let navbar = document.querySelector("#navbarSupportedContent");
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    }
    else {
        navbar.style.display = "none";
    }
}

function switchLight() {


    if (document.body.style.backgroundColor === "#ffffff") {
        document.body.style.backgroundColor = "#18191A";
    }
    else {
        document.body.style.backgroundColor = "#ffffff";
    }
}



