// New file for book
window.Modernizr = {
  csstransforms: true
};

window.App = {

  Templates: {
    items: {},
    put: function (key, template) {
      this.items[key] = template;
    },
    'get': function (key) {
      return this.items[key] || null;
    }
  },

  options: {
    circlePlayer: {
      cssSelector: '.audio-player_circle_true'
    }
  },

  tasks: [],

  init: function () {

    this.section = 0;

    this.slide = null;

    this.player = null;

    this.circlePlayer = new CirclePlayer('.audio-player', {}, {
      cssSelectorAncestor: this.options.circlePlayer.cssSelector,
      swfPath: 'scripts/',
      supplied: 'mp3',
      wmode: 'window',
      keyEnabled: true
    });

    this.$el = $('.swiper-container');

    this.$article = $('.article');

    // Hide articles
    $(document.body).on('click', this.hideArticle.bind(this));

    this.slider = this.$el.swiper({
      mode: 'horizontal',
      loop: false,
      DOMAnimation: false,
      speed: 300,
      onSlideChangeStart: this.process.bind(this)
    });

    this.process(this.slider);
  },

  /**
   * Adding new Section to Slider
   */
  addSection: function (slider, sectionId) {

    var _this = this,
      section = this.sections.filter(function (section) {
        return section.id == sectionId
      }).shift();

    if (!section) {
      throw new Error('section not found');
    }

    if (!section.pages || !section.pages.length) {
      return false;
    }
    // Append pages to slider
    section.pages.forEach(function (page) {
      var content = '';
      switch (page.type) {
        case 'video':
          var videoPath = 'video/sections/' + sectionId + '/' + page.video;
          content = '<video><source src="' + videoPath + '" type="video/mp4;"></source></video>';
          break;
        default:
          content = _this.Templates.get(page.template);
      }

      var newSlide = slider.createSlide(content);
      newSlide.setData('page', page);
      newSlide.append();

      // post handling
      switch (page.type) {
        case 'video':
          break;
        case 'rubric':
          var rubricEl = $('<div/>').addClass('rubric')
              .addClass('rubric_state_initialized')
              .addClass('rubric_num_' + page.id),
            rubricContainerEl = $('<div/>').addClass('rubric__container');
          rubricEl.append(rubricContainerEl);
          page.images && page.images.forEach(function (image) {
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
            internalSlider && page.slides.forEach(function (info) {
              var item = $('<div/>').addClass('page-slider__item'),
                imagePath = _this.getImagePath(sectionId, page.id) + '/' + info.image;
              var image = $('<div style="background-image:url(' + imagePath + ')" />')
                .attr('data-image', imagePath)
                .addClass('page-slider__image');

              item.append(image);
              info.description && item.append($('<div/>').addClass('page-slider__description').html(info.description));
              info.map && item.append($('<div/>').addClass('page-slider__globe'));
              // appending to slider node
              item.appendTo(internalSlider);
            });
          }
      }
    });
  },

  process: function (slider) {
    var _this = this;
    // time to add next sector
    if (slider.activeIndex >= slider.slides.length - 2) {
      if (this.section < this.sections.length) {
        setTimeout(function() {
          _this.addSection(slider, ++_this.section);
        }, 300);
      }
    }

    this.processPage(slider);
  },

  processPage: function (slider) {
    var slide = this.slide;

    this.removeBindings(slide);

    this.slide = slider.getSlide(slider.activeIndex);

    this.addBindings();
  },

  addBindings: function () {
    if (!this.slide) return;

    var page = this.slide.getData('page');

    switch (page.type) {
      case 'video':
        this.videoStart(this.slide.querySelector('video'));
        break;
      case 'page':
        if (page.slides && !page.slider) {
          page.slider = new App.PageSlider($(this.slide).find('.page-slider'), $.extend({
            onNext: this.goToNextPage.bind(this),
            onPrev: this.goToPrevPage.bind(this)
          }, page));
        }
        // first initialization
        page.slider && page.slider.init();

        if (page.sound) {
          setTimeout(function () {
            App.showAndPlayAudio(App.getAudioPath(page.id, page.sound));
          }, 0);
        }
        // Add Handler to Article Link
        $(this.slide).on('click', '.article-link', this.showArticle.bind(this));
        break;
      case 'rubric':
        page.rubric = App.Rubric.init($(this.slide).find('.rubric'), $.extend({
          onNext: this.goToNextPage.bind(this),
          onPrev: this.goToPrevPage.bind(this)
        }, page));
        break;
    }

    // Maps click Listener
    this.addGlobeHandler(this.slide);
  },

  goToPrevPage: function () {
    if (this.slider.activeIndex > 0) {
      this.slider.swipePrev(true);
    }
  },

  goToNextPage: function () {
    if (this.slider.activeIndex < this.slider.slides.length - 1) {
      this.slider.swipeNext(true);
    }
  },

  removeBindings: function (slide) {
    if (!slide) return;

    this.hideArticle();

    this.hideAndStopAudio();

    this.removeGlobeHandler();

    // Push with task to pull
    this.tasks.push({ slide: slide, page: slide.getData('page') });

    this.clearPool();
  },

  clearPool: function () {

    var
      _this = this,
      clear = function () {
        while (this.tasks.length) {
          var
            task = this.tasks.pop(),
            page = task.page,
            slide = task.slide;

          switch (page.type) {
            case 'video':
              _this.videoStop(slide.querySelector('video'));
              break;
            case 'page':
              page.slider && page.slider.reset(true);
              // Add Handler to Article Link
              $(slide).off('click');
              break;
            case 'rubric':
              page.rubric && page.rubric.destroy();
              break;
          }
        }
      };

    // force clear
    if (this.pollInterval) {
      clear.call(this);
      clearInterval(this.pollInterval);
      this.pollInterval = null;
      return;
    }

    this.pollInterval = setTimeout(function () {
      clear.call(_this);
      clearInterval(_this.pollInterval);
      _this.pollInterval = null;
    }, 500);
  },

  videoStart: function (video) {
    video.currentTime = 0;
    $(video).trigger('play');
  },

  videoStop: function (video) {
    $(video).trigger('pause');
  },

  getImagePath: function (sectionId, pageId) {
    return ['images', 'sections', sectionId, 'pages', pageId].join('/');
  },

  getAudioPath: function (pageId, audio) {
    return ['audio', 'pages', pageId, audio].join('/');
  },

  showAndPlayAudio: function (audio) {

    this.player = $('.audio-player').jPlayer('setMedia', {
      mp3: audio
    });

    this.player
      .jPlayer('playHead', 0)
      .jPlayer('play');

    $(this.options.circlePlayer.cssSelector).addClass('audio-player_show_yes');

    this.isPlaying = true;
  },

  hideAndStopAudio: function () {
    if (!this.player || !this.isPlaying) return;
    this.player.jPlayer('pause').hide();
    $(this.options.circlePlayer.cssSelector).removeClass('audio-player_show_yes');
    this.isPlaying = false;
  },

  addGlobeHandler: function(slide) {
    $(this.slide).find('.page-slider__globe').on('click', this.showMap.bind(this));
  },

  /**
   * Remove maps click Listener
   * @param slide
   */
  removeGlobeHandler: function(slide) {
    $(slide).find('.page-slider__globe').off('click');
  },

  showMap: function (event) {
    if (!this.slide) return;
    event.preventDefault();
    $(this.slide).find('.page__map').show();
    return false;
  },

  hideMap: function () {
    if (!this.slide) return;
    $(this.slide).find('.page__map').hide();
    return false;
  },

  showArticle: function (el) {
    var $el = $(el.currentTarget),
      article = $el.data('text'),
      position = $el.position();

    position.top += 20;
    this.$article
      .css(position)
      .html(article)
      .show();
    return false;
  },

  hideArticle: function () {
    this.$article.hide();
  }
};

$(function () {
  'use strict';
  window.App.init();
});
