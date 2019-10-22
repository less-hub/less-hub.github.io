toggleContent = function (elem) {
    for ( let i = 0; i < elem.children.length; i++){
      slide( elem.children[i] );
      fade ( elem.children[i] );
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

containerHeight = function(elem) {
  toggleContent(elem);
  setHeight(elem);
}

containerLanguageDescriptionOn = function (elem) {
  let x = elem.getElementsByClassName("languageDescription");
  x[0].style.display = "block";
}

containerLanguageDescriptionOff = function (elem) {
  let x = elem.getElementsByClassName("languageDescription");
  x[0].style.display = "none";
}

toPage = function (pathToPage) {
    location.href=`${pathToPage}`;
}
