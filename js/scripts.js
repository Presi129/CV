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
    const body = document.querySelector('body');
    if (body.classList.contains('body-light')) {
        body.classList.remove('body-light')
        body.classList.add('body-dark');
    }
    else {
        body.classList.add('body-light');
        body.classList.remove('body-dark');
    }
}


