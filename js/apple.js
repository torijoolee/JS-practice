const tabElems = document.querySelectorAll(".tab-button");

tabElems.forEach(function (button) {
  button.addEventListener("click", function () {
    for (let i = 0; i < tabElems.length; i++) {
      tabElems[i].classList.remove("orange");
    }
    button.classList.add("orange");
  });
});
