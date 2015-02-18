
window.App || (window.App = {});

/**
 * Config for pages
 */
window.App.sections = [
  {
    id: 1,
    name: 'Predislovie',
    pages: [
      {
        id: 2,
        type: 'video',
        video: 'intro.mp4'
      },
      {
        id: 3,
        type: 'page',
        template: 'page3.html',
        slides: [
          {
            image: '3_1.jpg',
            description: 'Подпись к изображению 1',
            sound: '1.mp3',
            map: true
          },
          {
            image: '2_1.jpg',
            description: 'Подпись к изображению 2',
            sound: '2.mp3',
            //map: true
          },
          {
            image: '3_1.jpg',
            description: 'Подпись к изображению 3',
            map: true
          }
        ]
      },
      {
        id: 4,
        type: 'page',
        sound: '1.mp3',
        template: 'page4.html'
      },
      {
        id: 5,
        type: 'page',
        template: 'page5.html'
      },
      {
        id: 6,
        type: 'page',
        template: 'page6.html'
      },
      {
        id: '6r',
        type: 'rubric',
        images: [
          'rub1.jpeg',
          'rub2.jpg',
          'rub3.jpg',
          'rub4.jpg'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Vstuplenie',
    pages: [
      {
        id: 7,
        type: 'video',
        video: 'vstup.mp4'
      },
      {
        id: 8,
        type: 'page',
        template: 'page8.html',
        slides: [
          {
            image: '8.jpg',
            description: 'Павел Алеппский'
          }
        ]
      },
      {
        id: 9,
        type: 'page',
        template: 'page9.html',
        slides: [
          {
            image: '9_1.jpg',
            description: 'Древняя Сирия'
          },
          {
            image: '9_2.jpg',
            description: 'Приём посольства Венеции на фоне Великой мечети Дамаска'
          }
        ]
      },
      {
        id: 10,
        type: 'page',
        template: 'page10.html',
        slides: [
          {
            image: '10.jpg'
          }
        ]
      },
      {
        id: 11,
        type: 'page',
        template: 'page11.html'
        slides: [
          {
            image: '11_1.jpg',
            description: 'Карта пути Павла Алеппского'
          },
          {
            image: '11_2.jpg'
          }
         ]
      },
      {
        id: 12,
        type: 'page',
        template: 'page12.html'
      },
      {
        id: '13r',
        type: 'rubric',
        images: [
          'rub1.jpeg',
          'rub2.jpg',
          'rub3.jpg',
          'rub4.jpg'
        ]
      }
    ]
  },
 {
    id: 3,
    name: 'Glava1',
    pages: [
      {
        id: 14,
        type: 'video',
        video: 'intro.mp4'
      },  
      {
        id: 15,
        type: 'page',
        template: 'page15.html',
        slides: [
          {
            image: '15.jpg'
          }
        ]
      },
      {
        id: 16,
        type: 'page',
        template: 'page16.html'
      },
      {
        id: 17,
        type: 'page',
        template: 'page17.html',
        slides: [
          {
            image: '17_1.jpg'
          },
          {
            image: '17_2.jpg'
          }
        ]
      },
      {
        id: 18,
        type: 'page',
        template: 'page18.html',
        slides: [
          {
            image: '18_1.jpg'
          },
          {
            image: '18_2.jpg'
          }
        ]
      },
      {
        id: 19,
        type: 'page',
        template: 'page19.html',
        slides: [
          {
            image: '19.jpg',
            description: 'Биография гетмана. Традиционная версия.'
          }
        ]
      },
      {
        id: 20,
        type: 'page',
        template: 'page20.html',
        description: 'Предыстория событий на территории западной Руси до 17 века. Вступление'
      },
      {
        id: 21,
        type: 'page',
        template: 'page21.html',
        slides: [
          {
            image: '21.jpg'
          }
        ]
      },
      {
        id: 22,
        type: 'page',
        template: 'page22.html',
        slides: [
          {
            image: '22.jpg',
            description: 'Люблинская уния 1569 года — создание Речи Посполитой'
          }
        ]
      },
      {
        id: 23,
        type: 'page',
        template: 'page23.html',
        slides: [
          {
            image: '23.jpg'
          }
        ]
      },
      {
        id: 24,
        type: 'page',
        template: 'page24.html'
      },
      {
        id: 25,
        type: 'page',
        template: 'page25.html'
      }, 
      {
        id: 26,
        type: 'page',
        template: 'page26.html',
        slides: [
          {
            image: '26_1.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '26_1.jpg',
            description: 'Подпись к изображению 2'
          },
          {
            image: '26_1.jpg',
            description: 'Подпись к изображению 3'
          }
        ]
      },
      {
        id: 27,
        type: 'page',
        template: 'page27.html',
        slides: [
          {
            image: '27.jpg'
          }
        ]
      },
      {
        id: 28,
        type: 'page',
        template: 'page28.html',
        slides: [
          {
            image: '28.jpg'
          }
        ]
      },
      {
        id: 29,
        type: 'page',
        template: 'page29.html',
        slides: [
          {
            image: '29.jpg'
          }
        ]
      },
      {
        id: 30,
        type: 'page',
        template: 'page30.html'
      },
      {
        id: 31,
        type: 'page',
        template: 'page31.html'
      },
      {
        id: 32,
        type: 'page',
        template: 'page32.html'
      },
      {
        id: 33,
        type: 'page',
        template: 'page33.html'
      },
      {
        id: 34,
        type: 'page',
        template: 'page34.html',
        slides: [
          {
            image: '34.jpg'
          }
        ]
      },
      {
        id: 35,
        type: 'page',
        template: 'page35.html'
      },
      {
        id: 36,
        type: 'page',
        template: 'page36.html'
      },
      {
        id: 37,
        type: 'page',
        template: 'page34.html',
        slides: [
          {
            image: '37.jpg'
          }
        ]
      },
      {
        id: 38,
        type: 'page',
        template: 'page38.html',
        slides: [
          {
            image: '38.jpg'
          }
        ]
      },
      {
        id: 39,
        type: 'page',
        template: 'page39.html'
      },
      {
        id: 40,
        type: 'page',
        template: 'page40.html',
        slides: [
          {
            image: '40.jpg'
          }
        ]
      },
      {
        id: 41,
        type: 'page',
        template: 'page41.html',
        slides: [
          {
            image: '41.jpg'
          }
        ]
      },
      {
        id: 42,
        type: 'page',
        template: 'page42.html',
        slides: [
          {
            image: '42_1.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '42_2.jpg',
            description: 'Подпись к изображению 2'
          }
        ]
      },
      {
        id: 43,
        type: 'page',
        template: 'page43.html',
        slides: [
          {
            image: '43.jpg'
          }
        ]
      },
      {
        id: 44,
        type: 'page',
        template: 'page44.html',
        slides: [
          {
            image: '44.jpg'
          }
        ]
      },
      {
        id: 45,
        type: 'page',
        template: 'page45.html'
      },
      {
        id: 46,
        type: 'page',
        template: 'page46.html',
        slides: [
          {
            image: '46.jpg'
          }
        ]
      },
      {
        id: 47,
        type: 'page',
        template: 'page47.html',
        slides: [
          {
            image: '47.jpg'
          }
        ]
      },
      {
        id: 48,
        type: 'page',
        template: 'page48.html'
      },
      {
        id: 49,
        type: 'page',
        template: 'page49.html',
        slides: [
          {
            image: '49.jpg'
          }
        ]
      },
      {
        id: 50,
        type: 'page',
        template: 'page50.html'
      },
      {
        id: 51,
        type: 'page',
        template: 'page51.html',
        slides: [
          {
            image: '51.jpg'
          }
        ]
      },
      {
        id: 52,
        type: 'page',
        template: 'page52.html'
      },
    ]
  },
  {
    id: 4,
    name: 'Glava2',
    pages: [
      {
        id: 53,
        type: 'video',
        video: 'intro.mp4'
      },  
      {
        id: 54,
        type: 'page',
        template: 'page54.html',
        slides: [
          {
            image: '54.jpg'
          }
        ]
      },
      {
        id: 55,
        type: 'page',
        template: 'page55.html',
        slides: [
          {
            image: '55.jpg'
          }
        ]
      },
      {
        id: 56,
        type: 'page',
        template: 'page56.html',
        slides: [
          {
            image: '56.jpg'
          }
        ]
      },
      {
        id: 57,
        type: 'page',
        template: 'page57.html',
        slides: [
          {
            image: '57_1.jpg',
            description: 'Подпись к изображению 1',
          },
          {
            image: '57_2.jpg',
            description: 'Подпись к изображению 2',
          },
          {
            image: '57_3.jpg',
            description: 'Подпись к изображению 3'
          }
        ]
      },
      {
        id: 58,
        type: 'page',
        template: 'page58.html',
        slides: [
          {
            image: '58_1.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '58_2.jpg',
            description: 'Подпись к изображению 2'
          },
          {
            image: '58_3.jpg',
            description: 'Подпись к изображению 3'
          },
          {
            image: '58_4.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '58_5.jpg',
            description: 'Подпись к изображению 2'
          },
          {
            image: '58_6.jpg',
            description: 'Подпись к изображению 3'
          },
          {
            image: '58_7.jpg',
            description: 'Подпись к изображению 3'
          }
        ]
      },
      {
        id: 59,
        type: 'page',
        template: 'page59.html',
        slides: [
          {
            image: '59.jpg'
          }
        ]
      },
      {
        id: 60,
        type: 'page',
        template: 'page60.html'
      },
      {
        id: 61,
        type: 'page',
        template: 'page61.html',
        slides: [
          {
            image: '61.jpg'
          }
        ]
      },
      {
        id: 62,
        type: 'page',
        template: 'page62.html',
        slides: [
          {
            image: '62.jpg'
          }
        ]
      },
      {
        id: 63,
        type: 'page',
        template: 'page63.html'
      },
      {
        id: 64,
        type: 'page',
        template: 'page64.html'
      },
      {
        id: 65,
        type: 'page',
        template: 'page65.html'
      },
      {
        id: 66,
        type: 'page',
        template: 'page7.html',
        slides: [
          {
            image: '66_1.jpg'
          },
          {
            image: '66_2.jpg'
          }
        ]
      },
      {
        id: 67,
        type: 'page',
        template: 'page67.html'
      },
      {
        id: 68,
        type: 'page',
        template: 'page68.html',
        slides: [
          {
            image: '68.jpg'
          }
        ]
      },
      {
        id: 69,
        type: 'page',
        template: 'page69.html'
      },
      {
        id: 70,
        type: 'page',
        template: 'page70.html',
        slides: [
          {
            image: '70.jpg'
          }
        ]
      },
      {
        id: 71,
        type: 'page',
        template: 'page71.html',
        slides: [
          {
            image: '71.jpg'
          }
        ]
      },
      {
        id: 72,
        type: 'page',
        template: 'page72.html',
        slides: [
          {
            image: '72_1.jpg'
          },
          {
            image: '72_1.jpg'
          },
          {
            image: '72_1.jpg'
          }
        ]
      },
      {
        id: 73,
        type: 'page',
        template: 'page73.html',
        slides: [
          {
            image: '73.jpg'
          }
        ]
      },
      {
        id: 74,
        type: 'page',
        template: 'page74.html',
        slides: [
          {
            image: '74.jpg'
          }
        ]
      },
      {
        id: 75,
        type: 'page',
        template: 'page75.html',
        slides: [
          {
            image: '75.jpg'
          }
        ]
      },
      {
        id: 76,
        type: 'page',
        template: 'page76.html',
        slides: [
          {
            image: '76.jpg'
          }
        ]
      },
      {
        id: '77r',
        type: 'rubric',
        images: [
          'rub1.jpeg',
          'rub2.jpg',
          'rub3.jpg',
          'rub4.jpg'
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Glava3',
    pages: [
      {
        id: 78,
        type: 'video',
        video: 'intro.mp4'
      },
      {
        id: 79,
        type: 'page',
        template: 'page79.html',
        slides: [
          {
            image: '79.jpg'
          }
        ]
      },
      {
        id: 80,
        type: 'page',
        template: 'page80.html',
        slides: [
          {
            image: '80.jpg'
          }
        ]
      },
      {
        id: 81,
        type: 'page',
        template: 'page81.html',
        slides: [
          {
            image: '81.jpg'
          }
        ]
      },
      {
        id: 82,
        type: 'page',
        template: 'page82.html',
        slides: [
          {
            image: '82.jpg'
          }
        ]
      },
      {
        id: 83,
        type: 'page',
        template: 'page83.html',
        slides: [
          {
            image: '83.jpg'
          }
        ]
      },
      {
        id: 84,
        type: 'page',
        template: 'page84.html',
        slides: [
          {
            image: '84.jpg'
          }
        ]
      },
      {
        id: 85,
        type: 'page',
        template: 'page85.html'
      },
      {
        id: 86,
        type: 'page',
        template: 'page86.html'
      },
      {
        id: 87,
        type: 'page',
        template: 'page87.html',
        slides: [
          {
            image: '87.jpg'
          }
        ]
      },
      {
        id: 88,
        type: 'page',
        template: 'page88.html',
        slides: [
          {
            image: '88.jpg'
          }
        ]
      },
      {
        id: 89,
        type: 'page',
        template: 'page89.html',
        slides: [
          {
            image: '89.jpg'
          }
        ]
      },
      {
        id: 90,
        type: 'page',
        template: 'page90.html'
      },
      {
        id: 91,
        type: 'page',
        template: 'page91.html',
        slides: [
          {
            image: '91.jpg'
          }
        ]
      },
      {
        id: 92,
        type: 'page',
        template: 'page92.html'
      },
      {
        id: 93,
        type: 'page',
        template: 'page93.html'
      },
      {
        id: 94,
        type: 'page',
        template: 'page94.html',
        slides: [
          {
            image: '94.jpg'
          }
        ]
      },
      {
        id: 95,
        type: 'page',
        template: 'page95.html'
      },
      {
        id: 96,
        type: 'page',
        template: 'page96.html',
        slides: [
          {
            image: '96.jpg'
          }
        ]
      },
      {
        id: 97,
        type: 'page',
        template: 'page97.html',
        slides: [
          {
            image: '97.jpg'
          }
        ]
      },
      {
        id: 98,
        type: 'page',
        template: 'page98.html'
      },
      {
        id: 99,
        type: 'page',
        template: 'page99.html',
        slides: [
          {
            image: '99.jpg'
          }
        ]
      },
      {
        id: 100,
        type: 'page',
        template: 'page100.html',
        slides: [
          {
            image: '100.jpg'
          }
        ]
      },
      {
        id: 101,
        type: 'page',
        template: 'page101.html',
        slides: [
          {
            image: '101.jpg'
          }
        ]
      },
      {
        id: 102,
        type: 'page',
        template: 'page102.html',
        slides: [
          {
            image: '102.jpg'
          }
        ]
      },
      {
        id: 103,
        type: 'page',
        template: 'page103.html',
        slides: [
          {
            image: '103.jpg'
          }
        ]
      },
      {
        id: 104,
        type: 'page',
        template: 'page104.html',
        slides: [
          {
            image: '104.jpg'
          }
        ]
      },
      {
        id: 105,
        type: 'page',
        template: 'page105.html',
        slides: [
          {
            image: '105.jpg'
          }
        ]
      },
      {
        id: 106,
        type: 'page',
        template: 'page106.html',
        slides: [
          {
            image: '106.jpg'
          }
        ]
      },
      {
        id: 107,
        type: 'page',
        template: 'page107.html',
        slides: [
          {
            image: '107_1.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '107_2.jpg',
            description: 'Подпись к изображению 2'
          },
          {
            image: '107_3.jpg',
            description: 'Подпись к изображению 3'
          },
          {
            image: '107_4.jpg',
            description: 'Подпись к изображению 3'
          }
        ]
      },
      {
        id: 108,
        type: 'page',
        template: 'page108.html',
        slides: [
          {
            image: '108.jpg'
          }
        ]
      },
      {
        id: 109,
        type: 'page',
        template: 'page109.html',
        slides: [
          {
            image: '109_1.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '109_2.jpg',
            description: 'Подпись к изображению 2'
          }
        ]
      },
      {
        id: 110,
        type: 'page',
        template: 'page110.html',
        slides: [
          {
            image: '110.jpg'
          }
        ]
      },
      {
        id: 111,
        type: 'page',
        template: 'page111.html',
        slides: [
          {
            image: '111.jpg'
          }
        ]
      },
      {
        id: 112,
        type: 'page',
        template: 'page112.html',
        slides: [
          {
            image: '112.jpg'
          }
        ]
      },
      {
        id: 113,
        type: 'page',
        template: 'page113.html'
      },
      {
        id: 114,
        type: 'page',
        template: 'page114.html',
        slides: [
          {
            image: '114.jpg'
          }
        ]
      },
      {
        id: 115,
        type: 'page',
        template: 'page115.html'
      },
      {
        id: 116,
        type: 'page',
        template: 'page116.html'
      },
      {
        id: 117,
        type: 'page',
        template: 'page117.html',
        slides: [
          {
            image: '117.jpg'
          }
        ]
      },
      {
        id: 118,
        type: 'page',
        template: 'page118.html',
        slides: [
          {
            image: '118.jpg'
          }
        ]
      },
      {
        id: 119,
        type: 'page',
        template: 'page119.html',
        slides: [
          {
            image: '119.jpg'
          }
        ]
      },
      {
        id: 120,
        type: 'page',
        template: 'page120.html',
        slides: [
          {
            image: '120.jpg'
          }
        ]
      },
      {
        id: 121,
        type: 'page',
        template: 'page121.html',
        slides: [
          {
            image: '121.jpg'
          }
        ]
      },
      {
        id: '122r',
        type: 'rubric',
        images: [
          'rub1.jpeg',
          'rub2.jpg',
          'rub3.jpg',
          'rub4.jpg'
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Glava4',
    pages: [
      {
        id: 123,
        type: 'video',
        video: 'vstup.mp4'
      },
      {
        id: 124,
        type: 'page',
        template: 'page124.html',
        slides: [
          {
            image: '124.jpg'
          }
        ]
      },
      {
        id: 125,
        type: 'page',
        template: 'page125.html'
      },
      {
        id: 126,
        type: 'page',
        template: 'page126.html',
        slides: [
          {
            image: '126.jpg'
          }
        ]
      },
      {
        id: 127,
        type: 'page',
        template: 'page127.html',
        slides: [
          {
            image: '127.jpg'
          }
        ]
      },
      {
        id: 128,
        type: 'page',
        template: 'page128.html',
        slides: [
          {
            image: '128.jpg'
          }
        ]
      },
      {
        id: 129,
        type: 'page',
        template: 'page129.html',
        slides: [
          {
            image: '129_1.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '129_2.jpg',
            description: 'Подпись к изображению 2'
          },
          {
            image: '129_3.jpg',
            description: 'Подпись к изображению 3'
          }
        ]
      },
      {
        id: 130,
        type: 'page',
        template: 'page130.html',
        slides: [
          {
            image: '130.jpg'
          }
        ]
      },
      {
        id: 131,
        type: 'page',
        template: 'page131.html',
        slides: [
          {
            image: '131.jpg'
          }
        ]
      },
      {
        id: 132,
        type: 'page',
        template: 'page132.html'
      },
      {
        id: 133,
        type: 'page',
        template: 'page133.html',
        slides: [
          {
            image: '133.jpg'
          }
        ]
      },
      {
        id: 134,
        type: 'page',
        template: 'page134.html'
      },
      {
        id: 135,
        type: 'page',
        template: 'page135.html',
        slides: [
          {
            image: '135.jpg'
          }
        ]
      },
      {
        id: 136,
        type: 'page',
        template: 'page136.html',
        slides: [
          {
            image: '136.jpg'
          }
        ]
      },
      {
        id: 137,
        type: 'page',
        template: 'page137.html',
        slides: [
          {
            image: '137.jpg'
          }
        ]
      },
      {
        id: 138,
        type: 'page',
        template: 'page138.html',
        slides: [
          {
            image: '138.jpg'
          }
        ]
      },
      {
        id: 139,
        type: 'page',
        template: 'page139.html',
        slides: [
          {
            image: '139.jpg'
          }
        ]
      },
      {
        id: 140,
        type: 'page',
        template: 'page140.html',
        slides: [
          {
            image: '140_1.jpg',
            description: 'Подпись к изображению 1'
          },
          {
            image: '140_2.jpg',
            description: 'Подпись к изображению 2'
          },
          {
            image: '140_3.jpg',
            description: 'Подпись к изображению 3'
          }
        ]
      },
      {
        id: 141,
        type: 'page',
        template: 'page141.html',
        slides: [
          {
            image: '141.jpg'
          }
        ]
      },
      {
        id: 142,
        type: 'page',
        template: 'page142.html',
        slides: [
          {
            image: '142.jpg'
          }
        ]
      },
      {
        id: 143,
        type: 'page',
        template: 'page143.html'
      },
      {
        id: 144,
        type: 'page',
        template: 'page144.html',
        slides: [
          {
            image: '144.jpg'
          }
        ]
      },
      {
        id: 145,
        type: 'page',
        template: 'page145.html',
        slides: [
          {
            image: '145.jpg'
          }
        ]
      },
      {
        id: 146,
        type: 'page',
        template: 'page3.html',
        slides: [
          {
            image: '146_1.jpg'
          },
          {
            image: '146_2.jpg'
          }
        ]
      },
      {
        id: 147,
        type: 'page',
        template: 'page147.html',
        slides: [
          {
            image: '147_1.jpg'
          },
          {
            image: '147_2.jpg'
          },
          {
            image: '147_3.jpg'
          }
        ]
      },
      {
        id: 148,
        type: 'page',
        template: 'page148.html'
      },
      {
        id: 149,
        type: 'page',
        template: 'page149.html',
        slides: [
          {
            image: '149.jpg'
          }
        ]
      },
      {
        id: 150,
        type: 'page',
        template: 'page150.html',
        slides: [
          {
            image: '150.jpg'
          }
        ]
      },
      {
        id: 151,
        type: 'page',
        template: 'page151.html',
        slides: [
          {
            image: '151.jpg'
          }
        ]
      },
      {
        id: 152,
        type: 'page',
        template: 'page152.html'
      },
      {
        id: 153,
        type: 'page',
        template: 'page153.html'
      },
      {
        id: 154,
        type: 'page',
        template: 'page154.html'
      },
      {
        id: 155,
        type: 'page',
        template: 'page155.html',
        slides: [
          {
            image: '155.jpg'
          }
        ]
      },
      {
        id: 156,
        type: 'page',
        template: 'page156.html',
        slides: [
          {
            image: '156.jpg'
          }
        ]
      },
      {
        id: 157,
        type: 'page',
        template: 'page157.html',
        slides: [
          {
            image: '157.jpg'
          }
        ]
      },
      {
        id: 158,
        type: 'page',
        template: 'page158.html',
        slides: [
          {
            image: '158.jpg'
          }
        ]
      },
      {
        id: 159,
        type: 'page',
        template: 'page159.html',
        slides: [
          {
            image: '159.jpg'
          }
        ]
      },
      {
        id: 160,
        type: 'page',
        template: 'page160.html'
      },
      {
        id: 161,
        type: 'page',
        template: 'page161.html',
        slides: [
          {
            image: '161.jpg'
          }
        ]
      },
      {
        id: 162,
        type: 'page',
        template: 'page162.html'
      },
      {
        id: 163,
        type: 'page',
        template: 'page163.html'
      },
      {
        id: '164r',
        type: 'rubric',
        images: [
          'rub1.jpeg',
          'rub2.jpg',
          'rub3.jpg',
          'rub4.jpg'
        ]
      },
      {
        id: 165,
        type: 'page',
        template: 'page165.html',
        slides: [
          {
            image: '165.jpg'
          }
        ]
      }
    ]
  }
];
