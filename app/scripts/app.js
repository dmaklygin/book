// New file for book
window.Modernizr = {
  csstransforms: true
};

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

  options: {
    circlePlayer: {
      cssSelector: '.audio-player_circle_true'
    }
  },

  init: function() {

    this.section = 0;

    this.slide = null;

    this.player = null;

    this.circlePlayer = new CirclePlayer('.audio-player', {
      }, {
        cssSelectorAncestor: this.options.circlePlayer.cssSelector,
        swfPath: 'scripts/',
        supplied: 'mp3',
        wmode: 'window',
        keyEnabled: true
    });

    this.$el = $('.swiper-container');

    this.slider = this.$el.swiper({
      mode:'horizontal',
      loop: false,
      DOMAnimation: false,
      onSlideChangeStart: this.process.bind(this)
    });

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
        case 'rubric':
          var rubricEl = $('<div/>').addClass('rubric').addClass('rubric_state_initialized'),
              rubricContainerEl = $('<div/>').addClass('rubric__container');
          rubricEl.append(rubricContainerEl);
          page.images && page.images.forEach(function(image) {
            var imagePath = ['images', 'sections', sectionId, 'rubrics', image].join('/'),
                slideEl = $('<div/>').addClass('rubric__slide');
            slideEl.append('<img src="' + imagePath + '" />');
            slideEl.appendTo(rubricContainerEl);
          });
          rubricEl.appendTo(newSlide);
          break;
        default:
          // handle slider
          if (page.slides) {
            var internalSlider = newSlide.querySelector('.page-slider__container');
            internalSlider && page.slides.forEach(function(info) {
              var item = $('<div/>').addClass('page-slider__item');
              item.append('<img src="' + _this.getImagePath(sectionId, page.id) + '/' + info.image + '" />');
              info.description && item.append($('<div/>').addClass('page-slider__description').html(info.description));
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
          page.slider = App.PageSlider.init($(this.slide).find('.page-slider'), $.extend({
            onEnded: this.goToNextPage.bind(this)
          }, page));
        }
        if (page.sound) {
          setTimeout(function() {
            App.showAndPlayAudio(App.getAudioPath(page.id, page.sound));
          },0);
        }
        break;
      case 'rubric':
        page.rubric = App.Rubric.init($(this.slide).find('.rubric'), $.extend({
          onEnded: this.goToNextPage.bind(this)
        }, page));
        break;
    }

    // Maps click Listener
    $(this.slide).find('.page-slider__globe').on('click', this.showMap.bind(this));

  },

  goToNextPage: function() {
    this.slider.swipeNext(true);
  },

  removeBindings: function() {
    if (!this.slide) return;

    var page = this.slide.getData('page');

    switch(page.type) {
      case 'video':
        this.videoStop(this.slide.querySelector('video'));
        break;
      case 'page':
        page.slider && setTimeout(function() { page.slider.destroy(true); }, 0);
        page.sound && App.hideAndStopAudio();
        break;
      case 'rubric':
        page.rubric && setTimeout(function() {
          page.rubric.destroy();
        }, 0);
        break;
    }

    // Maps click Listener
    $(this.slide).find('.page-slider__globe').off('click');

    this.hideAndStopAudio();
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

  getAudioPath: function(pageId, audio) {
    return ['audio', 'pages', pageId, audio].join('/');
  },

  showAndPlayAudio: function(audio) {

    this.player = $('.audio-player').jPlayer('setMedia', {
      mp3: audio
    });

    this.player
      .jPlayer('playHead', 0)
      .jPlayer('play');

    $(this.options.circlePlayer.cssSelector).show();

    this.isPlaying = true;
  },

  hideAndStopAudio: function() {
    if (!this.player || !this.isPlaying) return;
    this.player.jPlayer('stop').hide();
    $(this.options.circlePlayer.cssSelector).hide();
    this.isPlaying = false;
  },

  isAudioPlaying: function() {
    return this.isPlaying;
  },

  showMap: function(event) {
    if (!this.slide) return;
    event.preventDefault();
    $(this.slide).find('.page__map').show();
    return false;
  },

  hideMap: function() {
    if (!this.slide) return;
    $(this.slide).find('.page__map').hide();
    return false;
  }
};


$(function () {
  'use strict';
  window.App.init();
});
