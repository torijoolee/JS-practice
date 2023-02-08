const tabElems = document.querySelectorAll(".tab-button");
const contentElems = document.querySelectorAll(".tab-content");
let currentActive;

tabElems.forEach(function (item, i) {
  tabElems[i].addEventListener("click", function () {
    for (let i = 0; i < tabElems.length; i++) {
      tabElems[i].classList.remove("orange");
      contentElems[i].classList.remove("show");
    }
    tabElems[i].classList.add("orange");
    for (let j = 0; j < contentElems.length; j++) {
      contentElems[i].classList.add("show");
    }
  });
});

//전체에서 orange 클래스를 제거한다.
//버튼을 누르면 해당 버튼의 인덱스에 orange 클래스가 붙는다.
