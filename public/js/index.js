fadeIn = function (elem) {
    let x = elem.getElementsByTagName("p");

    x[0].classList.remove("slideDown");
    x[0].classList.add("slideUp");
    x[0].classList.add("disappear");
    
    for (let i = 1; i < x.length; i++)
    {
        x[i].classList.remove("slideUp");
        x[i].classList.add("slideDown");
        x[i].classList.add("appear");
    }
}

fadeOut = function (elem) {
    let x = elem.getElementsByTagName("p");

    x[0].classList.remove("disappear");
    x[0].classList.remove("slideUp");
    x[0].classList.add("slideDown");

    for (let i = 1; i < x.length; i++)
    {
        x[i].classList.remove("slideDown");
        x[i].classList.remove("appear");
        x[i].classList.add("slideUp");
    }
}

toPage = function (pathToPage) {
    location.href=`${pathToPage}`;
}