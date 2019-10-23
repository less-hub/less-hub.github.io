toggleContent = function (elem) {
    for ( let i = 0; i < elem.children.length; i++){
      slide( elem.children[i] );
      fade ( elem.children[i] );
    }
}

toggleContentFromLeft = function (elem) {
    for ( let i = 0; i < elem.children.length; i++){
      slideFromLeft( elem.children[i] );
      fade ( elem.children[i] );
    }
}

containerWidth = function (elem) {
  toggleContentFromLeft(elem);
  setWidth(elem);
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

containerPartIndexOn = function (elem) {
  let x = elem.getElementsByClassName("partInfo");
  x[0].style.display = "block";
}

containerPartIndexOff = function (elem) {
  let x = elem.getElementsByClassName("partInfo");
  x[0].style.display = "none";
}

toPage = function (pathToPage) {
    location.href=`${pathToPage}`;
}

toggleContentMobile = function (divToChange) {
  toggleContent(document.body.getElementsByClassName("projectContainerMobile")[divToChange].getElementsByClassName("projectContainer")[0]);
}
