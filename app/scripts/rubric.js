window.App || (window.App = {});

App.Rubric = {

  init: function(el, options) {

    var _this = this;

    this.$el = $(el);

    this.$final = this.$el.find('.rubric__final');

    this.$slides = this.$el.find('.rubric__slide');

    this.options = options;

    this.$final.length || this.createFinalScreen();

    this.$final.find('.rubric__final-message').on('click', this.showSlider.bind(this));

    this.swiper = null;

    this.state = 'init';

    this.showAnimationScreen();

    return this;
  },

  createFinalScreen: function() {

    var _this = this;

    this.$final = this.$el.find('.rubric__final');
    if (this.$final.length) return;

    this.$final = $('<div/>').addClass('rubric__final');

    var leftScreen = $('<div/>').addClass('rubric__final-left');
    var rightScreen = $('<div/>').addClass('rubric__final-right');
    var messageScreen = $('<div/>').addClass('rubric__final-message');

    messageScreen.on('webkitTransitionEnd', function() {
      if (_this.state == 'opened') {
        _this.$final.hide();
      }
    });

    this.$final
      .append(leftScreen)
      .append(rightScreen)
      .append(messageScreen)
      .appendTo(this.$el);
  },

  showAnimationScreen: function() {
    var _this = this;

    if (this.$slides.length) {
      var count = 0,
          slideIn = function(el, callback) {
            var $el = $(el);
            $el.addClass('rubric__slide_animation_yes');
            if (count > 2) {
              $el.on('webkitTransitionEnd', function() {
                $el.off('webkitTransitionEnd');
                if (!_this.$slides && !_this.swiper && !_this.$el) {
                  return _this.reset();
                }
                return callback();
              });
              return;
            }
            count++;
            // call next slide
            setTimeout(function() {
              var $slide = _this.$slides[count];
              slideIn($slide, callback);
            }, 200);

          };
      //// Slide First element
      slideIn(this.$slides[count], function() {
        _this.$final.addClass('rubric__final_state_closed');

        _this.state = 'inited';

      });
    } else {
      _this.$final.addClass('rubric__final_state_closed');
    }
  },

  showSlider: function() {
    var _this = this;

    if (this.swiper || this.state != 'inited') return;

    this.$el.removeClass('rubric_state_initialized');

    this.swiper = this.$el.swiper({
      mode: 'horizontal',
      loop: false,
      DOMAnimation: false,
      wrapperClass: 'rubric__container',
      slideClass: 'rubric__slide',
      //onSlideChangeStart: this.process.bind(this),
      //onSlideClick: isConstant ? function(){} : this.toggleSlider.bind(this),
      onTouchEnd: function() {
        var lastSlideX = _this.swiper.slidesGrid[_this.swiper.slidesGrid.length - 1];
        if (_this.swiper.positions.current <= -lastSlideX) {
          _this.options.onEnded && _this.options.onEnded.call(_this);
        }
      }
    });

    this.$final.removeClass('rubric__final_state_closed');

    this.state = 'opened';
  },

  reset: function() {

    if (this.$el) {
      this.$el.addClass('rubric_state_initialized');
      this.$el.find('.rubric__container').css({ width: 'auto', height: 'auto' });
    }

    this.$slides && this.$slides.removeClass('rubric__slide_animation_yes');

    if (this.$final) {
      this.$final.show();
      this.$final.removeClass('rubric__final_state_closed');
      this.$final.find('.rubric__final-message').off('click');
    }

    this.$el = null;
    this.$slides = null;
    this.$final = null;

    this.options = null;
    this.state = 'reset';
  },

  destroy: function() {

    if (this.swiper) {
      this.swiper.destroy(true);
      this.swiper = null;
    }

    this.reset();
  }
};
