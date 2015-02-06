window.App || (
  window.App = {});

var PageSlider = function (el, options) {

  var _this = this;

  this.$el = $(el);

  this.options = options;

  // background node for animation
  this.$background = $('.page-slider-background');

  // wrapper of slider
  this.$wrapper = this.$el.parents('.page__column');

  // is Fullsized screen
  this.fullsize = this.$wrapper.hasClass('page__column_type_fullsized');

  this.constant = this.$el.hasClass('page-slider_type_constant');

  this.direction = this.$el.hasClass('page-slider_align_left') ? 'left' : (
    this.$el.hasClass('page-slider_align_right') ? 'right' : null);

  this.swiper = this.$el.swiper({
    mode: 'horizontal',
    loop: false,
    DOMAnimation: false,
    resistance: '100%',
    wrapperClass: 'page-slider__container',
    slideClass: 'page-slider__item',
    pagination: this.$wrapper.find('.page-slider__pagination')[0],
    onSlideChangeStart: this.process.bind(this),
    onSlideClick: this.constant ? function () {
    } : this.toggleSlider.bind(this),
    onTouchEnd: function () {
      var lastSlideX = _this.swiper.slidesGrid[_this.swiper.slidesGrid.length - 1];
      if (_this.swiper.positions.current <= -lastSlideX && _this.swiper.touches.diff) {
        _this.options.onNext && _this.options.onNext.call(_this);
      } else if (_this.swiper.positions.current >= 0 && _this.swiper.touches.diff) {
        _this.options.onPrev && _this.options.onPrev.call(_this);
      }
    }
  });

  // Fix GIF's animation for iOS
  setTimeout(function () {
    _this.toggleGlobe(true);
  }, 1000);
};

PageSlider.prototype = {

  init: function() {
    var _this = this;
    // Fix GIF's animation for iOS
    setTimeout(function () {
      _this.toggleGlobe(true);
    }, 1000);
  },

  toggleSlider: function () {

    this.$wrapper.off("webkitTransitionEnd");

    if (this.fullsize) {
      this.decrease();
    } else {
      this.increase();
    }
  },

  increase: function () {

    if (this.fullsize) {
      return;
    }

    var
      _this = this,
      slide = this.swiper.getSlide(this.swiper.activeIndex),
      $slide = $(slide),
      $image = $slide.find('.page-slider__image'),
      imagePath = $image.data('image');

    // First, we need to turn off Globe animation !!!
    _this.toggleGlobe(false);

    var top = this.$el.css('top');
    var left = this.$el.css('left');

    this.$background.css({
      display: 'block',
      top: top,
      left: left,
      width: this.$el.css('width'),
      height: this.$el.css('height'),
      'background-image': 'url(' + imagePath + ')',
      'background-position': $image.css('background-position')
    });

    setTimeout(function () {
      _this.$background.off('webkitTransitionEnd');
      // Listener to AnimationEnd Event
      _this.$background.on('webkitTransitionEnd', function () {
        var sliderInfo = _this.options.slides[_this.swiper.activeIndex];
        // Remove event listener
        _this.$background.off('webkitTransitionEnd');
        _this.fullsize = true;
        // Set Page_slider to FullScreen mode
        _this.$wrapper.addClass('page__column_type_fullsized');
        // Recalculate swiper dimensions
        _this.swiper.resizeFix(true);
        // Hide Background Node
        _this.$background.hide();
        // Show Audio Player
        if (sliderInfo.sound) {
          App.showAndPlayAudio(App.getAudioPath(_this.options.id, sliderInfo.sound));
        }
      });

      _this.$background
        .addClass('animated')
        .css({
          transform: 'translate3d(-' + (left) + ', -' + (top) + ',0)',
          width: '100%',
          height: '100%'
        });

    }, 0);

    return;

    //var
    //  _this = this,
    //  fix = function () {
    //    var sliderInfo = _this.options.slides[_this.swiper.activeIndex];
    //    // Show Audio Player
    //    if (sliderInfo.sound) {
    //      App.showAndPlayAudio(App.getAudioPath(_this.options.id, sliderInfo.sound));
    //    }
    //    // Show Globe
    //    _this.toggleGlobe(false);
    //
    //    _this.fullsize = true;
    //  };
    //
    //if (this.swiper) {
    //  this.$wrapper.addClass('page__column_type_fullsized');
    //  this.swiper.resizeFix(true);
    //  this.$wrapper.addClass('page__column_align_fullscreen');
    //  fix();
    //}
  },

  decrease: function () {

    if (!this.fullsize) {
      return;
    }

    var
      _this = this,
      slide = this.swiper.getSlide(this.swiper.activeIndex),
      $slide = $(slide);

    // We have to stop Audio at first
    App.hideAndStopAudio();
    // Show Background Node
    this.$background.show();
    // Set Page_slider to FullScreen mode
    this.$wrapper
      .css('overflow', 'hidden')
      .removeClass('page__column_type_fullsized');
    // Recalculate swiper dimensions
    this.swiper.resizeFix(true);

    this.$background.off('webkitTransitionEnd');
    // Listener to AnimationEnd Event
    this.$background.on('webkitTransitionEnd', function () {
      _this.fullsize = false;
      // Show Swiper
      _this.$wrapper.css('overflow', 'visible');
      // Hide Background
      _this.$background
        .off('webkitTransitionEnd')
        .removeClass('animated')
        .hide();
      // Can Show the Globe
      _this.toggleGlobe(true);
    });

    // start animation
    this.$background
      .addClass('animated')
      .css({
        transform: 'translate3d(0, 0, 0)',
        width: this.$el.css('width'),
        height: this.$el.css('height')
      });

    return;
    //
    //var
    //  _this = this,
    //  fix = function () {
    //    if (_this.swiper) {
    //      _this.$wrapper.removeClass('page__column_type_fullsized');
    //      _this.swiper.resizeFix(true);
    //      // set fullsize to false
    //      _this.fullsize = false;
    //      // Show Globe
    //      _this.toggleGlobe(true);
    //    }
    //  };
    //
    //this.$wrapper.removeClass('page__column_align_fullscreen');
    //this.$wrapper.on('webkitTransitionEnd', function () {
    //  _this.$wrapper.off('webkitTransitionEnd');
    //  fix();
    //  return false;
    //});
    //
    //App.hideAndStopAudio();
  },

  toggleGlobe: function (show) {
    var _this = this;
    this.options.slides.forEach(function (sliderInfo, index) {
      if (_this.swiper && sliderInfo.map) {
        var globe = _this.swiper.getSlide(index).querySelector('.page-slider__globe');
        $(globe)[show ? 'show' : 'hide']();
      }
    });
  },

  process: function (slide) {
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

  reset: function () {

    var _this = this;

    if (this.constant) {
      return;
    }

    this.$wrapper.removeClass('page__column_align_fullscreen');
    this.$wrapper.on('webkitTransitionEnd', function () {
      _this.$wrapper.removeClass('page__column_type_fullsized');
      _this.$wrapper.off('webkitTransitionEnd');
      _this.swiper.resizeFix(true);
    });

    // set fullsize to false
    this.fullsize = false;
    // Show Globe
    this.toggleGlobe(false);

    this.swiper.swipeTo(0);
  },

  destroy: function () {
    // Remove additional classes
    this.reset();

    this.swiper.destroy(true);
    this.swiper = null;
    this.$el.off('click');
  }
};

App.PageSlider = PageSlider;
