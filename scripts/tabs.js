document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__tab-btn').forEach(function(tabsBtn) {

    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.how__tab-btn').forEach(function(btn){
        btn.classList.remove('how__tab-btn--active')
      });

      e.currentTarget.classList.add('how__tab-btn--active');
      console.log(e.currentTarget);

      document.querySelectorAll('.how__item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('how__item--active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('how__item--active');
    });
  });
})
