document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
  })
  document.querySelector(".header__close-button").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("active");
  })
})
