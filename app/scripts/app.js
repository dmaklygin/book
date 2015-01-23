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

    this.slide = null;

    this.slider = $('.swiper-container').swiper({
      //Your options here:
      mode:'horizontal',
      loop: false,
      DOMAnimation: false,
      onSlideChangeStart: this.process.bind(this)
    });

    this.process(this.slider);
  },

  addSection: function(slider, sectionId) {

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
      var content = '';
      switch (page.type) {
        case 'video':
          var videoPath = 'video/sections/' + sectionId + '/' + page.video;
          content = '<video controls><source src="' + videoPath + '" type="video/mp4;"></source></video>';
          break;
        default:
          content = _this.Templates.get(page.template);
      }

      var newSlide = slider.createSlide(content);
      newSlide.setData('page', page);
      newSlide.append();
    });
  },

  process: function(slider) {
    // time to add next sector
    if (slider.activeIndex >= slider.slides.length - 2) {
      if (this.section < this.sections.length) {
        this.addSection(slider, ++this.section);
      }
    }

    this.processPage(slider);
  },

  processPage: function(slider) {
    this.removeBindings();

    this.slide = slider.getSlide(slider.activeIndex);

    this.addBindings();
  },

  addBindings: function() {
    if (!this.slide) return;

    var page = this.slide.getData('page');

    switch(page.type) {
      case 'video':
        this.videoStart(this.slide.querySelector('video'));
        break;
    }
  },

  removeBindings: function() {
    if (!this.slide) return;

    var page = this.slide.getData('page');

    switch(page.type) {
      case 'video':
        this.videoStop(this.slide.querySelector('video'));
        break;
    }
  },

  videoStart: function(video) {
    $(video).trigger('play');
  },

  videoStop: function(video) {
    $(video).trigger('pause');
  }
};


$(function () {
  'use strict';
  window.App.init();
});
