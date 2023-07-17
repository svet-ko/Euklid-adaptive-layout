document.addEventListener('DOMContentLoaded', function() {
  function addHidden(){
    document.querySelector(".header__form").classList.add("header__form_hidden");
  }

  document.querySelector(".header__button_type_open").addEventListener("click", function() {
    document.querySelector(".header__form").classList.remove("header__form_hidden");
    document.querySelector(".header__form").classList.remove("header__form_fade");
    document.querySelector(".header__form").classList.add("active");
    this.style.visibility = "hidden";
  })
  document.querySelector(".header__button_type_close").addEventListener("click", function() {
    document.querySelector(".header__form").classList.remove("active");
    document.querySelector(".header__button_type_open").style.visibility = "visible";
    document.querySelector(".header__form").classList.add("header__form_fade");
    setTimeout(addHidden, 300);
  })
})
