window.onload = function () {
    typeText();
}

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
var i = 0;

    function typeText() {
        const speed = 10;
        let txtClass = document.querySelector('.text-typing')
        const txt = "I have about 1.5 years of experience in software development as Web Developer and Software Engineer in banking industry. I got experience with new functionalities and maintenance software. Last months I worked in Scrum teams in projects concerning banking website and integrate them with internal systems. I am oriented for further development as Front-end Developer";
        if (i < txt.length) {
            txtClass.textContent += txt.charAt(i);
            i++;
            setTimeout(typeText, speed);
        }
}
