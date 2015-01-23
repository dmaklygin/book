// New file for book
window.App = {

  init: function() {

    this.slider = $('.swiper-container').swiper({
      //Your options here:
      mode:'horizontal',
      loop: true
    });

  }

};


$(function () {
  'use strict';
  window.App.init();
});
