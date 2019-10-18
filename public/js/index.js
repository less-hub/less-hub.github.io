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

openContainer = function (elem) {
    let x = elem.getElementsByTagName("p");
    let y = elem.getElementsByClassName("partDescription");

    elem.classList.remove("containerImpand");
    elem.classList.add("containerExpand");
    elem.classList.remove("impanded");
    elem.classList.add("expanded");

    x[0].classList.remove("slideDown");
    x[0].classList.add("slideUp");
    x[0].classList.add("disappear");

    y[0].classList.remove("slideUp");
    y[0].classList.add("slideDown");
    y[0].classList.add("appear");
}

closeContainer = function (elem) {
    let x = elem.getElementsByTagName("p");
    let y = elem.getElementsByClassName("partDescription");

    elem.classList.remove("containerExpand");
    elem.classList.add("containerImpand");
    elem.classList.remove("expanded");
    elem.classList.add("impanded");

    x[0].classList.remove("disappear");
    x[0].classList.remove("slideUp");
    x[0].classList.add("slideDown");

    y[0].classList.remove("slideDown");
    y[0].classList.remove("appear");
    y[0].classList.add("slideUp");
}

toPage = function (pathToPage) {
    location.href=`${pathToPage}`;
}