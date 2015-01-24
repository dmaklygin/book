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

    this.$el = $('.swiper-container')

    this.slider = this.$el.swiper({
      mode:'horizontal',
      loop: false,
      DOMAnimation: false,
      onSlideChangeStart: this.process.bind(this)
    });

    // event for click on internal slider
    this.$el.on('click', '.page-slider', this.toggleInternalSlider);

    this.process(this.slider);
  },

  /**
   * Adding new Section to Slider
   */
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

      // post handling
      switch (page.type) {
        case 'video': break;
        default:
          // handle slider
          if (page.slides) {
            var internalSlider = newSlide.querySelector('.page-slider__container');
            internalSlider && page.slides.forEach(function(info) {
              var item = $('<div/>').addClass('page-slider__item');
              item.append('<img src="' + _this.getImagePath(sectionId, page.id) + '/' + info.image + '" />');
              info.map && item.append($('<div/>').addClass('page-slider__globe'));
              // appending to slider node
              item.appendTo(internalSlider);
            });
          }
      }
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
      case 'page':
        if (page.slides) {
          page.slider = $(this.slide).find('.page-slider').swiper({
            mode:'horizontal',
            loop: false,
            DOMAnimation: false,
            wrapperClass: 'page-slider__container',
            slideClass: 'page-slider__item'
          });
        }
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
      case 'page':
        if (page.slider) {
          page.slider.destroy(true);
        }
        break;
    }
  },

  videoStart: function(video) {
    $(video).trigger('play');
  },

  videoStop: function(video) {
    $(video).trigger('pause');
  },

  getImagePath: function(sectionId, pageId) {
    return ['images', 'sections', sectionId, 'pages', pageId].join('/');
  },

  toggleInternalSlider: function($e) {
    var slider = $($e.currentTarget),
      pageColumn = slider.parents('.page__column'),
      fullsize = pageColumn.hasClass('page__column_type_fullsized') && pageColumn.hasClass('page__column_align_fullscreen');

    pageColumn.off("webkitTransitionEnd");

    if (fullsize) {
      pageColumn.removeClass('page__column_align_fullscreen');
      pageColumn.on("webkitTransitionEnd", function() {
        if (slider) {
          var swiper = slider.data('swiper');
          if (swiper) {
            swiper.reInit(true);
            pageColumn.removeClass('page__column_type_fullsized');
            pageColumn.off("webkitTransitionEnd");
          }
        }
        return false;
      });
    } else {
      var swiper = slider.data('swiper');
      if (slider && swiper) {
        pageColumn.addClass('page__column_type_fullsized');
        swiper.reInit(true);
        pageColumn.addClass('page__column_align_fullscreen');
      }
    }
  }

};


$(function () {
  'use strict';
  window.App.init();
});
