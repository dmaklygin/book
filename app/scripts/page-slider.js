window.App || (window.App = {});

App.PageSlider = {

  init: function(el, options) {

    var _this = this;

    this.$el = $(el);

    this.options = options;

    this.fullsize = false;
    // wrapper of slider
    this.wrapper = this.$el.parents('.page__column');

    var isConstant = this.$el.hasClass('page-slider_type_constant');

    this.swiper = this.$el.swiper({
      mode: 'horizontal',
      loop: false,
      DOMAnimation: false,
      wrapperClass: 'page-slider__container',
      slideClass: 'page-slider__item',
      pagination: '.page-slider__pagination',
      onSlideChangeStart: this.process.bind(this),
      onSlideClick: isConstant ? function(){} : this.toggleSlider.bind(this),
      onTouchEnd: function() {
        var lastSlideX = _this.swiper.slidesGrid[_this.swiper.slidesGrid.length - 1];
        if (_this.swiper.positions.current < -lastSlideX) {
          _this.options.onEnded && _this.options.onEnded.call(_this);
        }
      }
    });

    // event for click on internal slider
    //this.$el.on('click', this.toggleSlider.bind(this));

    return this;
  },

  toggleSlider: function() {
    this.wrapper.off("webkitTransitionEnd");

    if (this.fullsize) {
      this.decrease();
    } else {
      this.increase();
    }
  },

  increase: function() {
    if (this.swiper) {
      this.wrapper.addClass('page__column_type_fullsized');
      this.swiper.resizeFix(true);
      this.wrapper.addClass('page__column_align_fullscreen');
      var sliderInfo = this.options.slides[this.swiper.activeIndex];
      // Show Audio Player
      if (sliderInfo.sound) {
        App.showAndPlayAudio(App.getAudioPath(this.options.id, sliderInfo.sound));
      }
      // Show Globe
      this.toggleGlobe(false);
    }

    this.fullsize = true;
  },

  decrease: function() {
    var _this = this;
    this.wrapper.removeClass('page__column_align_fullscreen');
    this.wrapper.on("webkitTransitionEnd", function() {
      if (_this.swiper) {
        _this.wrapper.removeClass('page__column_type_fullsized');
        _this.swiper.resizeFix(true);
        _this.wrapper.off("webkitTransitionEnd");
        // Show Globe
        _this.toggleGlobe(true);
      }
      return false;
    });

    App.hideAndStopAudio();

    this.fullsize = false;
  },

  toggleGlobe: function(show) {
    var _this = this;
    this.options.slides.forEach(function(sliderInfo, index) {
      if (sliderInfo.map) {
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

  destroy: function() {
    // Remove additional classes
    this.decrease();

    this.swiper.destroy(true);
    this.swiper = null;
    this.$el.off('click');

    this.fullsize = false;
  }
};
