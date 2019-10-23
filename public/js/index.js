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

$( document ).ready(function() {
    var is_mobile = false;

    if( $('.headerMobile').css('display')=='flex') {
        is_mobile = true;
    }

    if (is_mobile == true) {
      showMobileMenu = function () {
        let x = document.body.getElementsByTagName("header")[0];

        x.style.left = "0";
      }

      hideMobileMenu = function () {
        let x = document.body.getElementsByTagName("header")[0];

        x.style.left = "-100%";
      }

      $(document).click(function (e) {
          var popup = $("header");
          if (popup.is(e.target) && popup.has(e.target).length == 0) {
              hideMobileMenu();
          }
      });

      $("html, body, #wrapper").css({ height: $(window).height() });

    }
 });
