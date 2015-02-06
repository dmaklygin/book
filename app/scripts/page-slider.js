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

  // Init Animation Background
  this.initBackground();

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

  initBackground: function() {
    var
      _this = this,
      slide = this.swiper.getSlide(this.swiper.activeIndex),
      $slide = $(slide),
      $image = $slide.find('.page-slider__image'),
      imagePath = $image.data('image'),
      top = this.$el.css('top'),
      left = this.$el.css('left');

    this.$background
      .css({
        top: top,
        left: left,
        width: this.$el.css('width'),
        height: this.$el.css('height'),
        'background-image': 'url(' + imagePath + ')',
        'background-position': $image.css('background-position')
      })
      .addClass('animated');
  },

  increase: function () {

    if (this.fullsize) {
      return;
    }

    var _this = this,
      slide = this.swiper.getSlide(this.swiper.activeIndex),
      $slide = $(slide),
      $image = $slide.find('.page-slider__image'),
      imagePath = $image.data('image');

    // First, we need to turn off Globe animation !!!
    _this.toggleGlobe(false);
    // hide wrapper
    this.$wrapper.css('visibility', 'hidden');

    //var top = this.$el.css('top');
    //var left = this.$el.css('left');

    //this.$background.css({
    //  display: 'block',
    //  top: top,
    //  left: left,
    //  width: this.$el.css('width'),
    //  height: this.$el.css('height'),
    //  'background-image': 'url(' + imagePath + ')',
    //  'background-position': $image.css('background-position')
    //});

    //setTimeout(function () {
      _this.$background.off('webkitTransitionEnd');
      // Listener to AnimationEnd Event
      _this.$background.on('webkitTransitionEnd', function () {
        var sliderInfo = _this.options.slides[_this.swiper.activeIndex];
        _this.fullsize = true;
        // Set Page_slider to FullScreen mode
        _this.$wrapper
          .addClass('page__column_type_fullsized')
          .css('visibility', 'visible');
        // Recalculate swiper dimensions
        _this.swiper.resizeFix(true);
        // Hide Background Node
        // Remove event listener
        _this.$background
          .css({ 'visibility': 'hidden' })
          .off('webkitTransitionEnd');
        // Show Audio Player
        if (sliderInfo.sound) {
          App.showAndPlayAudio(App.getAudioPath(_this.options.id, sliderInfo.sound));
        }
      });

      this.$background
        // @TODO не назначать здесь background-image. Назначать его в момент перелистывания слайдера
        // 'background-image': 'url(' + imagePath + ')',
        .css({ 'visibility': 'visible' })
        .addClass('fullsized');
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
    this.$background.css({ 'visibility': 'visible' });
    // Turn off Page_slider from FullScreen mode
    this.$wrapper
      .css('visibility', 'hidden')
      .removeClass('page__column_type_fullsized');
    // Recalculate swiper dimensions
    this.swiper.resizeFix(true);
    // Listener to AnimationEnd Event
    this.$background.on('webkitTransitionEnd', function () {
      _this.fullsize = false;
      // Show Swiper
      _this.$wrapper.css('visibility', 'visible');
      // Hide Background
      _this.$background
        .css({ 'visibility': 'hidden' })
        .off('webkitTransitionEnd');
      // Can Show the Globe
      _this.toggleGlobe(true);
    });

    // start animation
    this.$background.removeClass('fullsized');
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
