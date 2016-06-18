window.App || (window.App = {});

window.App.Rubrics || (window.App.Rubrics = {});

App.Rubrics['1'] = function() {

  var IMG_WIDTH = 96;
  var currentImg = 0;
  var maxImages = 39;
  var speed = 300;
  var years;
//        var glide = $('.slider').glide().data('api_glide');

  var swipeOptions = {
    triggerOnTouchEnd: true,
    swipeStatus: swipeStatus,
    allowPageScroll: "vertical",
    threshold: 10
  };

  $(function () {
    years = $("#years");
    years.swipe(swipeOptions);
  });

  function swipeStatus(event, phase, direction, distance) {
    //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
    if (phase == "move" && (direction == "left" || direction == "right")) {
      var duration = 0;

      if (direction == "left") {
        if (currentImg != maxImages-1) {
          scrollImages((IMG_WIDTH * currentImg) + distance, duration); }
      } else if (direction == "right") {
        if (currentImg != 0) {
          scrollImages((IMG_WIDTH * currentImg) - distance, duration);}
        else if(currentImg == 0 && $galshow==1) {ShowFull()}
      }

    } else if (phase == "cancel") {
      scrollImages(IMG_WIDTH * currentImg, speed);
    } else if (phase == "end") {
      if (direction == "right") {
        previousImage();
      } else if (direction == "left") {
        nextImage();
      }
    }
  }

  function scrollImages(distance, duration) {
    years.css("-webkit-transition-duration", (duration / 1000).toFixed(1) + "s");

    //inverse the number we set in the css
    var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
    years.css("-webkit-transform", "translate(" + value + "px,0)");
  }

  function goToYear(num) {
    currentImg = num;
    scrollImages(IMG_WIDTH * currentImg, speed);
  }



  function nextImage() {
    currentImg = Math.min(currentImg + 1, maxImages - 1);
    scrollImages(IMG_WIDTH * currentImg, speed);
    SetActive();
    /* этот блок чтобы когда листаешь года - картинка переходила на нужную */
    if     (currentImg==1) {glide.jump(3);}
    else if(currentImg==2) {glide.jump(4);}
    else if(currentImg==3) {glide.jump(7);}
    else if(currentImg==4) {glide.jump(9);}
    else if(currentImg==5) {glide.jump(10);}
    else if(currentImg==6) {glide.jump(11);}
    else if(currentImg==7) {glide.jump(12);}
    else if(currentImg==8) {glide.jump(13);}
    else if(currentImg==9) {glide.jump(14);}
    else if(currentImg==10) {glide.jump(15);}
    else if(currentImg==11) {glide.jump(16);}
    else if(currentImg==12) {glide.jump(18);}
    else if(currentImg==13) {glide.jump(19);}
    else if(currentImg==14) {glide.jump(21);}
    else if(currentImg==15) {glide.jump(22);}
    else if(currentImg==16) {glide.jump(23);}
    else if(currentImg==17) {glide.jump(24);}
    else if(currentImg==18) {glide.jump(25);}
    else if(currentImg==19) {glide.jump(28);}
    else if(currentImg==20) {glide.jump(29);}
    else if(currentImg==21) {glide.jump(31);}
    else if(currentImg==22) {glide.jump(32);}
    else if(currentImg==23) {glide.jump(43);}
    else if(currentImg==24) {glide.jump(44);}
    else if(currentImg==25) {glide.jump(48);}
    else if(currentImg==26) {glide.jump(49);}
    else if(currentImg==27) {glide.jump(52);}
    else if(currentImg==28) {glide.jump(55);}
    else if(currentImg==29) {glide.jump(56);}
    else if(currentImg==30) {glide.jump(58);}
    else if(currentImg==31) {glide.jump(60);}
    else if(currentImg==32) {glide.jump(62);}
    else if(currentImg==33) {glide.jump(63);}
    else if(currentImg==34) {glide.jump(64);}
    else if(currentImg==35) {glide.jump(65);}
    else if(currentImg==36) {glide.jump(66);}
    else if(currentImg==37) {glide.jump(68);}
    else if(currentImg==38) {glide.jump(69);}
  }

  function previousImage() {
    currentImg = Math.max(currentImg - 1, 0);
    scrollImages(IMG_WIDTH * currentImg, speed);
    SetActive();
    /* этот блок чтобы когда листаешь года - картинка переходила на нужную */
    if     (currentImg==0) {glide.jump(1);}
    else if(currentImg==1) {glide.jump(3);}
    else if(currentImg==2) {glide.jump(4);}
    else if(currentImg==3) {glide.jump(7);}
    else if(currentImg==4) {glide.jump(9);}
    else if(currentImg==5) {glide.jump(10);}
    else if(currentImg==6) {glide.jump(11);}
    else if(currentImg==7) {glide.jump(12);}
    else if(currentImg==8) {glide.jump(13);}
    else if(currentImg==9) {glide.jump(14);}
    else if(currentImg==10) {glide.jump(15);}
    else if(currentImg==11) {glide.jump(16);}
    else if(currentImg==12) {glide.jump(18);}
    else if(currentImg==13) {glide.jump(19);}
    else if(currentImg==14) {glide.jump(21);}
    else if(currentImg==15) {glide.jump(22);}
    else if(currentImg==16) {glide.jump(23);}
    else if(currentImg==17) {glide.jump(24);}
    else if(currentImg==18) {glide.jump(25);}
    else if(currentImg==19) {glide.jump(28);}
    else if(currentImg==20) {glide.jump(29);}
    else if(currentImg==21) {glide.jump(31);}
    else if(currentImg==22) {glide.jump(32);}
    else if(currentImg==23) {glide.jump(43);}
    else if(currentImg==24) {glide.jump(44);}
    else if(currentImg==25) {glide.jump(47);}
    else if(currentImg==26) {glide.jump(49);}
    else if(currentImg==27) {glide.jump(52);}
    else if(currentImg==28) {glide.jump(55);}
    else if(currentImg==29) {glide.jump(56);}
    else if(currentImg==30) {glide.jump(58);}
    else if(currentImg==31) {glide.jump(60);}
    else if(currentImg==32) {glide.jump(62);}
    else if(currentImg==33) {glide.jump(63);}
    else if(currentImg==34) {glide.jump(64);}
    else if(currentImg==35) {glide.jump(65);}
    else if(currentImg==36) {glide.jump(66);}
    else if(currentImg==37) {glide.jump(68);}
    else if(currentImg==38) {glide.jump(69);}

  }

  function changeYear(num) { //устанавливает год

    if      (num == 3) {goToYear(1);}
    else if (num > 0 && num < 3) {goToYear(0);}
    else if (num > 3 && num < 7) {goToYear(2);}
    else if (num > 6 && num < 9) {goToYear(3);}

    else if (num == 9) {goToYear(4);}
    else if (num == 10) {goToYear(5);}
    else if (num == 11) {goToYear(6);}
    else if (num == 12) {goToYear(7);}
    else if (num == 13) {goToYear(8);}
    else if (num == 14) {goToYear(9);}
    else if (num == 15) {goToYear(10);}
    else if (num > 15 && num < 18) {goToYear(11);}
    else if (num == 18 ) {goToYear(12);}
    else if (num > 18 && num < 21) {goToYear(13);}
    else if (num == 21) {goToYear(14);}
    else if (num == 22) {goToYear(15);}
    else if (num == 23) {goToYear(16);}
    else if (num == 24) {goToYear(17);}
    else if (num > 24 && num < 28) {goToYear(18);}
    else if (num == 28) {goToYear(19);}
    else if (num > 28 && num < 31) {goToYear(20);}
    else if (num == 31) {goToYear(21);}
    else if (num > 31 && num < 43) {goToYear(22);}
    else if (num == 43) {goToYear(23);}
    else if (num > 43 && num < 47) {goToYear(24);}
    else if (num > 46 && num < 49) {goToYear(25);}
    else if (num > 48 && num < 52) {goToYear(26);}
    else if (num > 51 && num < 55) {goToYear(27);}
    else if (num == 55) {goToYear(28);}
    else if (num > 55 && num < 58) {goToYear(29);}
    else if (num > 58 && num < 60) {goToYear(30);}
    else if (num > 59 && num < 62) {goToYear(31);}
    else if (num == 62) {goToYear(32);}
    else if (num == 63) {goToYear(33);}
    else if (num == 64) {goToYear(34);}
    else if (num == 65) {goToYear(35);}
    else if (num > 65 && num < 68) {goToYear(36);}
    else if (num == 68) {goToYear(37);}
    else if (num > 68 && num < 71) {goToYear(38);}
    SetActive();
  }

  function SetActive() {        //функция делает не видимыми года побокам, чтобы показывалось только 5
    var abc = '#s' + currentImg;
    var nov = '#s' + (currentImg + 3);
    var nov2 = '#s' + (currentImg - 3);
    $('#years').find('.active').removeClass('active');
    $(abc).addClass('active');

    $('#years').find('.novis').removeClass('novis');
    $(nov).addClass('novis');
    $(nov2).addClass('novis');

  }

  function AlertImage() {
    alert(currentImg);
  }

  function shg() {                         alert('d');
    $(this).find('.globemap').show();
  }

  var glide = $('.rubrica1_slider').glide({
    hoverpause: false
  }).data('api_glide');
  $(window).on('keyup', function (key) {
    if (key.keyCode === 13) {
      glide.jump(3, console.log('Wooo!'));
    };
  });
  $('.slider-arrow').on('click', function() {
    console.log(glide.current());
  });

};
