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
    let y = elem.getElementsByClassName("partInfo");

    y[0].style.display = "flex";

    elem.classList.remove("containerImpand");
    elem.classList.add("containerExpand");
    elem.classList.remove("impanded");
    elem.classList.add("expanded");

    x[0].classList.remove("makeAppear");
    x[0].classList.remove("appear");
    x[0].classList.add("makeDisappear");
    x[0].classList.add("disappear");

    y[0].classList.remove("makeDisappear");
    y[0].classList.remove("disappear");
    y[0].classList.add("makeAppear");
    y[0].classList.add("appear");
}

closeContainer = function (elem) {
    let x = elem.getElementsByTagName("p");
    let y = elem.getElementsByClassName("partInfo");

    elem.classList.remove("containerExpand");
    elem.classList.add("containerImpand");
    elem.classList.remove("expanded");
    elem.classList.add("impanded");

    x[0].classList.remove("makeDisappear");
    x[0].classList.remove("disappear");
    x[0].classList.add("makeAppear");
    x[0].classList.add("appear");

    y[0].classList.remove("makeAppear");
    y[0].classList.remove("appear");
    y[0].classList.add("makeDisappear");
    y[0].classList.add("disappear");

    y[0].style.display = "none";
}

/*
openContainerHeight = function(elem) {
  let x = elem.getElementsByTagName("p");
  let y = elem.getElementsByTagName("ul");

  x[0].style.top = "80%";

  y[0].style.display = "block";

  y[0].classList.remove("makeDisappear");
  y[0].classList.remove("disappear");
  y[0].classList.add("makeAppear");
  y[0].classList.add("appear");
}

closeContainerHeight = function(elem) {
  let x = elem.getElementsByTagName("p");
  let y = elem.getElementsByTagName("ul");

  x[0].style.top = "50%";

  y[0].classList.remove("makeAppear");
  y[0].classList.remove("appear");
  y[0].classList.add("makeDisappear");
  y[0].classList.add("disappear");

  y[0].style.display = "none";
}
*/

toPage = function (pathToPage) {
    location.href=`${pathToPage}`;
}

$("pre code").each(function(){
    var html = $(this).html();
    var pattern = html.match(/\s*\n[\t\s]*/);
    $(this).html(html.replace(new RegExp(pattern, "g"),'\n'));
});
