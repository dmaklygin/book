// New file for book
window.App = {

  Templates: {
    items: {},
    put: function(key, template) {
      this.items[key] = template;
    },
    'get': function(key) {
      return this.items[key] || null;
    }
  },

  init: function() {

    this.section = 0;

    this.slider = $('.swiper-container').swiper({
      //Your options here:
      mode:'horizontal',
      loop: false
    });

    this.addSection(++this.section);
  },

  addSection: function(sectionId) {
    var _this = this,
        section = this.sections.filter(function(section) { return section.id == sectionId }).shift();

    if (!section) {
      throw new Error('section not found');
    }

    if (!section.pages || !section.pages.length) {
      return false;
    }
    // Append pages to slider
    section.pages.forEach(function(page) {
      var newSlide = _this.slider.createSlide(_this.Templates.get(page.template));
      newSlide.append();
    });
  }
};


$(function () {
  'use strict';
  window.App.init();
});
