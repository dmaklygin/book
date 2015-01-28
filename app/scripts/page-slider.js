window.App || (window.App = {});

//App.PageSlider = {
//
//  init: function(el, options) {
//
//    var _this = this;
//
//    this.$el = $(el);
//
//    this.options = options;
//
//    // wrapper of slider
//    this.$wrapper = this.$el.parents('.page__column');
//
//    // is Fullsized screen
//    this.fullsize = this.$wrapper.hasClass('page__column_type_fullsized');
//
//    this.constant = this.$el.hasClass('page-slider_type_constant');
//
//    this.swiper = this.$el.swiper({
//      mode: 'horizontal',
//      loop: false,
//      DOMAnimation: false,
//      resistance: '100%',
//      wrapperClass: 'page-slider__container',
//      slideClass: 'page-slider__item',
//      pagination: '.page-slider__pagination',
//      onSlideChangeStart: this.process.bind(this),
//      onSlideClick: this.constant ? function(){} : this.toggleSlider.bind(this),
//      onTouchEnd: function() {
//        var lastSlideX = _this.swiper.slidesGrid[_this.swiper.slidesGrid.length - 1];
//        if (_this.swiper.positions.current <= -lastSlideX && _this.swiper.touches.diff) {
//          _this.options.onNext && _this.options.onNext.call(_this);
//        } else if (_this.swiper.positions.current >= 0 && _this.swiper.touches.diff && _this.fullsize) {
//          _this.options.onPrev && _this.options.onPrev.call(_this);
//        }
//      }
//    });
//
//    // Fix GIF's animation for iOS
//    setTimeout(function() {
//      _this.toggleGlobe(true);
//    }, 1000);
//
//    return this;
//  },
//
//  toggleSlider: function() {
//    this.$wrapper.off("webkitTransitionEnd");
//
//    if (this.fullsize) {
//      this.decrease();
//    } else {
//      this.increase();
//    }
//  },
//
//  increase: function() {
//    if (this.swiper) {
//      this.$wrapper.addClass('page__column_type_fullsized');
//      this.swiper.resizeFix(true);
//      this.$wrapper.addClass('page__column_align_fullscreen');
//      var sliderInfo = this.options.slides[this.swiper.activeIndex];
//      // Show Audio Player
//      if (sliderInfo.sound) {
//        App.showAndPlayAudio(App.getAudioPath(this.options.id, sliderInfo.sound));
//      }
//      // Show Globe
//      this.toggleGlobe(false);
//    }
//
//    this.fullsize = true;
//  },
//
//  decrease: function() {
//
//    var _this = this;
//
//    this.$wrapper.removeClass('page__column_align_fullscreen');
//    this.$wrapper.on('webkitTransitionEnd', function() {
//      if (_this.swiper) {
//        _this.$wrapper.removeClass('page__column_type_fullsized');
//        _this.swiper.resizeFix(true);
//        _this.$wrapper.off('webkitTransitionEnd');
//        // set fullsize to false
//        _this.fullsize = false;
//        // Show Globe
//        _this.toggleGlobe(true);
//      }
//      return false;
//    });
//
//    App.hideAndStopAudio();
//  },
//
//  toggleGlobe: function(show) {
//    var _this = this;
//    this.options.slides.forEach(function(sliderInfo, index) {
//      if (_this.swiper && sliderInfo.map) {
//        var globe = _this.swiper.getSlide(index).querySelector('.page-slider__globe');
//        $(globe)[show ? 'show' : 'hide']();
//      }
//    });
//  },
//
//  process: function(slide) {
//    if (!this.fullsize) {
//      return App.hideAndStopAudio();
//    }
//    // slider info
//    var sliderInfo = this.options.slides[this.swiper.activeIndex];
//    // Show Audio Player
//    if (sliderInfo.sound) {
//      App.showAndPlayAudio(App.getAudioPath(this.options.id, sliderInfo.sound));
//    } else {
//      App.hideAndStopAudio();
//    }
//  },
//
//  reset: function() {
//
//    if (this.constant) {
//      return;
//    }
//
//    this.$wrapper.removeClass('page__column_align_fullscreen');
//    this.$wrapper.removeClass('page__column_type_fullsized');
//    this.$wrapper.off('webkitTransitionEnd');
//
//    // set fullsize to false
//    this.fullsize = false;
//    // Show Globe
//    this.toggleGlobe(false);
//  },
//
//  destroy: function() {
//    // Remove additional classes
//    this.reset();
//
//    this.swiper.destroy(true);
//    this.swiper = null;
//    this.$el.off('click');
//
//    this.fullsize = false;
//  }
//};

var PageSlider = function(el, options) {

  var _this = this;

  this.$el = $(el);

  this.options = options;

  // wrapper of slider
  this.$wrapper = this.$el.parents('.page__column');

  // is Fullsized screen
  this.fullsize = this.$wrapper.hasClass('page__column_type_fullsized');

  this.constant = this.$el.hasClass('page-slider_type_constant');

  this.direction = this.$el.hasClass('page-slider_align_left') ? 'left' : (this.$el.hasClass('page-slider_align_right') ? 'right': null);

  this.swiper = this.$el.swiper({
    mode: 'horizontal',
    loop: false,
    DOMAnimation: false,
    resistance: '100%',
    wrapperClass: 'page-slider__container',
    slideClass: 'page-slider__item',
    pagination: '.page-slider__pagination',
    onSlideChangeStart: this.process.bind(this),
    onSlideClick: this.constant ? function(){} : this.toggleSlider.bind(this),
    onTouchEnd: function() {
      var lastSlideX = _this.swiper.slidesGrid[_this.swiper.slidesGrid.length - 1];
      if (_this.swiper.positions.current <= -lastSlideX && _this.swiper.touches.diff) {
        _this.options.onNext && _this.options.onNext.call(_this);
      } else if (_this.swiper.positions.current >= 0 && _this.swiper.touches.diff && _this.fullsize) {
        _this.options.onPrev && _this.options.onPrev.call(_this);
      }
    }
  });

  // Fix GIF's animation for iOS
  setTimeout(function() {
    _this.toggleGlobe(true);
  }, 1000);
};

PageSlider.prototype = {

  toggleSlider: function() {

    this.$wrapper.off("webkitTransitionEnd");

    if (this.fullsize) {
      this.decrease();
    } else {
      this.increase();
    }
  },

  increase: function() {
    var
      _this = this,
      fix = function() {
        var sliderInfo = _this.options.slides[_this.swiper.activeIndex];
        // Show Audio Player
        if (sliderInfo.sound) {
          App.showAndPlayAudio(App.getAudioPath(_this.options.id, sliderInfo.sound));
        }
        // Show Globe
        _this.toggleGlobe(false);

        _this.fullsize = true;
      };

    if (this.swiper) {
      if (this.direction == 'left') {
        this.$wrapper.addClass('page__column_type_fullsized');
        this.$wrapper.addClass('page__column_align_fullscreen');
        var slide = this.swiper.getSlide(this.swiper.activeIndex);
        // hardly set width
        $(slide).width('100%');
        this.$wrapper.on('webkitTransitionEnd', function() {
          _this.$wrapper.off('webkitTransitionEnd');
          if (_this.swiper) {
            _this.swiper.resizeFix(true);
            fix();
          }
        });
      } else if (this.direction == 'right') {
        this.$wrapper.addClass('page__column_type_fullsized');
        this.swiper.resizeFix(true);
        this.$wrapper.addClass('page__column_align_fullscreen');
        fix();
      }
    }
  },

  decrease: function() {
    var
      _this = this,
      fix = function() {
        if (_this.swiper) {
          _this.$wrapper.removeClass('page__column_type_fullsized');
          _this.swiper.resizeFix(true);
          // set fullsize to false
          _this.fullsize = false;
          // Show Globe
          _this.toggleGlobe(true);
        }
      };

    this.$wrapper.removeClass('page__column_align_fullscreen');
    this.$wrapper.on('webkitTransitionEnd', function() {
      _this.$wrapper.off('webkitTransitionEnd');
      fix();
      return false;
    });

    App.hideAndStopAudio();
  },

  toggleGlobe: function(show) {
    var _this = this;
    this.options.slides.forEach(function(sliderInfo, index) {
      if (_this.swiper && sliderInfo.map) {
        var globe = _this.swiper.getSlide(index).querySelector('.page-slider__globe');
        $(globe)[show ? 'show' : 'hide']();
      }
    });
  },

  process: function(slide) {
    if (!this.fullsize) {
      return App.hideAndStopAudio();
    }
    // slider info
    var sliderInfo = this.options.slides[this.swiper.activeIndex];
    // Show Audio Player
    if (sliderInfo.sound) {
      App.showAndPlayAudio(App.getAudioPath(this.options.id, sliderInfo.sound));
    } else {
      App.hideAndStopAudio();
    }
  },

  reset: function() {

    var _this =  this;

    if (this.constant) {
      return;
    }

    this.$wrapper.removeClass('page__column_align_fullscreen');
    this.$wrapper.on('webkitTransitionEnd', function() {
      _this.$wrapper.removeClass('page__column_type_fullsized');
      _this.$wrapper.off('webkitTransitionEnd');
      _this.swiper.resizeFix(true);
    });

    // set fullsize to false
    this.fullsize = false;
    // Show Globe
    this.toggleGlobe(false);
  },

  destroy: function() {
    // Remove additional classes
    this.reset();

    this.swiper.destroy(true);
    this.swiper = null;
    this.$el.off('click');
  }
};


App.PageSlider = PageSlider;
