
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
            description: 'Антиохия на Оронте',
            sounds: [
              { title: 'VALUE1', mp3: '1.mp3' },
              { title: 'VALUE2', mp3: '2.mp3' },
              { title: 'VALUE3', mp3: '3.mp3' },
              { title: 'VALUE1', mp3: '1.mp3' },
              { title: 'VALUE2', mp3: '2.mp3' },
              { title: 'VALUE3', mp3: '3.mp3' },
              { title: 'VALUE1', mp3: '1.mp3' },
              { title: 'VALUE2', mp3: '2.mp3' },
              { title: 'VALUE3', mp3: '3.mp3' }
            ],
            map: 'true',
            zoom: '150%'
          },
          {
            image: '3_2.jpg',
            sounds: [
              { title: 'VALUE1', mp3: '1.mp3' },
              { title: 'VALUE2', mp3: '2.mp3' },
              { title: 'VALUE3', mp3: '3.mp3' }
            ]
          },
          {
            image: '3_3.jpg',
            map: 'true',
            sounds: [
              { title: 'VALUE1', mp3: '1.mp3' },
              { title: 'VALUE2', mp3: '2.mp3' },
              { title: 'VALUE3', mp3: '3.mp3' }
            ]
          }
        ]
      },
      {
        id: 4,
        type: 'page',
        template: 'page4.html',
        sounds: [
          { title: 'VALUE1', mp3: '1.mp3' },
          { title: 'VALUE2', mp3: '2.mp3' },
          { title: 'VALUE3', mp3: '3.mp3' }
        ]
      },
      {
        id: 5,
        type: 'page',
        template: 'page5.html',
          slides: [
          {
            image: '5_1.jpg',
            description: 'Фрагмент дамаскской рукописи архидиакона Павла',
            positions: {
              left: '-100px',
              top: '-50px'
            },
            zoom: '200%'
          }
        ]
      },
      {
        id: 6,
        type: 'page',
        template: 'page6.html'
      },
      {
        id: '7',
        type: 'page',
        template: 'page7.html'
      }
    ]
  },
  {
    id: 2,
    name: 'Vstuplenie',
    pages: [
      {
        id: 8,
        type: 'video',
        video: 'vstup.mp4'
      },
      {
        id: 9,
        type: 'page',
        template: 'page9.html',
        slides: [
          {
            image: '9.jpg',
            description: 'Павел Алепский'
          }
        ]
      },
      {
        id: 10,
        type: 'page',
        template: 'page10.html',
        slides: [
          {
            image: '10_1.jpg',
            description: 'Древняя Сирия'
          },
          {
            image: '10_2.jpg',
            description: 'Руины города Баальбек'
          },
          {
            image: '10_3.jpg',
            description: 'Приём посольства Венеции на фоне Великой мечети Дамаска'
          }
        ]
      },
      {
        id: 11,
        type: 'page',
        template: 'page11.html',
        slides: [
          {
            image: '11.jpg',
            positions: {
              left: '-150px',
              top: '-150px'
            }
          }
        ]
      },
      {
        id: 12,
        type: 'page',
        template: 'page12.html',
        slides: [
          {
            image: '12_1.jpg'
          }
         ]
      },
      {
        id: 13,
        type: 'page',
        template: 'page13.html'
      },
      {
        id: '14',
        type: 'page',
        template: 'page14.html'
      }
    ]
  },
 {
    id: 3,
    name: 'Glava1',
    pages: [
      {
        id: 15,
        type: 'video',
        video: 'intro.mp4'
      },
      {
        id: 16,
        type: 'page',
        template: 'page16.html',
        slides: [
          {
            image: '16.jpg'
          }
        ]
      },
      {
        id: 17,
      type: 'page',
      sound: '1.mp3',
        template: 'page17.html',
        slides: [
          {
            image: '17_1.jpg'
          },
          {
            image: '17_2.jpg'
          },
          {
            image: '17_3.jpg'
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
            image: '19_1.jpg'
          }
        ]
      },
      {
        id: 20,
        type: 'page',
        template: 'page20.html',
        slides: [
          {
            image: '20.jpg',
            description: 'Биография гетмана. Традиционная версия.',
            sound: '1.mp3'
          }
        ]
      },
      {
        id: 21,
        type: 'page',
        template: 'page21.html',
        slides: [
          {
            image: '21.jpg',
            description: 'Западная Русь до XVII века, пребыстория событий'
          }
        ]
      },
      {
        id: 22,
        type: 'page',
        template: 'page22.html',
        slides: [
          {
            image: '22.jpg'
          }
        ]
      },
      {
        id: 23,
        type: 'page',
        template: 'page23.html'
      },
      {
        id: 24,
        type: 'page',
        template: 'page24.html',
        slides: [
          {
            image: '24.jpg'
          }
        ]
      },
      {
        id: 25,
        type: 'page',
        template: 'page25.html'
      },
      {
        id: 26,
        type: 'page',
        template: 'page26.html'
      },
      {
        id: 27,
        type: 'page',
        template: 'page27.html',
        slides: [
          {
            image: '27_1.jpg',
            description: 'Польский шляхтич'
          },
          {
            image: '27_2.jpg',
            description: 'Стефан Чарнецкий, Заместитель командующего польской армией'
          },
          {
            image: '27_3.jpg',
            description: 'Станислав Щука, подканцлер Великого Княжества Литовского'
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
            image: '29.jpg',
            description: 'Русский купец'
          }
        ]
      },
      {
        id: 30,
        type: 'page',
        template: 'page30.html',
        slides: [
          {
            image: '30.jpg'
          }
        ]
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
        template: 'page34.html'
      },
      {
        id: 35,
        type: 'page',
        template: 'page35.html',
        slides: [
          {
            image: '35.jpg',
            description: 'Турки на фоне мечети'
          }
        ]
      },
      {
        id: 36,
        type: 'page',
        template: 'page36.html'
      },
      {
        id: 37,
        type: 'page',
        template: 'page37.html'
      },
      {
        id: 38,
        type: 'page',
        template: 'page38.html',
        slides: [
          {
            image: '38_1.jpg'
          },
          {
            image: '38_2.jpg'
          }
        ]
      },
      {
        id: 39,
        type: 'page',
        template: 'page39.html',
        slides: [
          {
            image: '39_1.jpg'
          },
          {
            image: '39_2.jpg'
          }
        ]
      },
      {
        id: 40,
        type: 'page',
        template: 'page40.html'
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
            image: '42_1.jpg'
          },
          {
            image: '42_2.jpg'
          }
        ]
      },
        {
        id: 43,
        type: 'page',
        template: 'page43.html'
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
        template: 'page45.html',
        slides: [
          {
            image: '45.jpg'
          }
        ]
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
        template: 'page47.html'
      },
      {
        id: 48,
        type: 'page',
        template: 'page48.html',
        slides: [
          {
            image: '48.jpg'
          }
        ]
      },
      {
        id: 49,
        type: 'page',
        template: 'page49.html',
      },
      {
        id: 50,
        type: 'page',
        template: 'page50.html',
        slides: [
          {
            image: '50.jpg'
          }
        ]
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
      {
        id: 53,
        type: 'page',
        template: 'page53.html',
        slides: [
          {
            image: '53.jpg'
          }
        ]
      },
      {
        id: 54,
        type: 'page',
        template: 'page54.html'
      }
    ]
  },
  {
    id: 4,
    name: 'Glava2',
    pages: [
      {
        id: 55,
        type: 'video',
        video: 'intro.mp4'
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
            image: '57.jpg',
            description: 'Переводчик на Руси'
          }
        ]
      },
      {
        id: 58,
        type: 'page',
        template: 'page58.html',
        slides: [
          {
            image: '58.jpg'
          }
        ]
      },
      {
        id: 59,
        type: 'page',
        template: 'page59.html',
        slides: [
          {
            image: '59_1.jpg',
            description: 'Воевода Афанасий Ордын-Нащокин'
          },
          {
            image: '59_2.jpg',
            discription: 'Воевода Пётр Потёмкин'
          }
        ]
      },
      {
        id: 60,
        type: 'page',
        template: 'page60.html',
        slides: [
          {
            image: '60_1.jpg',
            description: 'Лево. Оклад Евангелия, 1392 год. Право. 1.2. Оклад Мстиславова Евангелия. До 1125 года'
          },
          {
            image: '60_2.jpg',
            description: 'Торжественник постный. Святого Иоанна Златоустаго и других слова и поучения'
          },
          {
            image: '60_3.jpg',
            description: 'Службы и жития преподобных Сергия и Никона Радонежских. 1646 год'
          },
          {
            image: '60_4.jpg'
          },
          {
            image: '60_5.jpg',
            description: 'Елисаветградское Евангелие. Издание конца XVI - начала XVII века'
          },
          {
            image: '60_6.jpg'
          },
          {
            image: '60_7.jpg',
            description: 'Лицевой летописный свод Ивана Грозного. Изложение событий мировой и русской истории,  от сотворения мира до 1567 года'
          },
          {
            image: '60_8.jpg'
          },
          {
            image: '60_9.jpg',
            description: 'Великий миротворный круг священника Агафона. Таблицы для определения Пасхи. 1539 год'
          },
          {
            image: '60_10.jpg'
          },
          {
            image: '60_11.jpg'
          }
        ]
      },
      {
        id: 61,
        type: 'page',
        template: 'page61.html',
        slides: [
          {
            image: '61.jpg',
            description: 'Беззаконник, любящий взятки'
          }
        ]
      },
      {
        id: 62,
        type: 'page',
        template: 'page62.html'
      },
      {
        id: 63,
        type: 'page',
        template: 'page63.html',
        slides: [
          {
            image: '63.jpg'
          }
        ]
      },
      {
        id: 64,
        type: 'page',
        template: 'page64.html',
        slides: [
          {
            image: '64.jpg'
          }
        ]
      },
      {
        id: 65,
        type: 'page',
        template: 'page65.html'
      },
      {
        id: 66,
        type: 'page',
        template: 'page66.html'
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
            image: '68_1.jpg'
          },
          {
            image: '68_2.jpg'
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
        template: 'page71.html'
      },
      {
        id: 72,
        type: 'page',
        template: 'page72.html',
        slides: [
          {
            image: '72.jpg'
          }
        ]
      },
      {
        id: 73,
        type: 'page',
        template: 'page73.html',
        slides: [
          {
            image: '73_1.jpg'
          },
          {
            image: '73_2.jpg'
          }
        ]
      },
      {
        id: 74,
        type: 'page',
        template: 'page74.html',
        slides: [
          {
            image: '74_1.jpg'
          },
          {
            image: '74_2.jpg'
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
        id: 77,
        type: 'page',
        template: 'page77.html',
        slides: [
          {
            image: '77.jpg'
          }
        ]
      },
      {
        id: 78,
        type: 'page',
        template: 'page78.html',
        slides: [
          {
            image: '78.jpg'
          }
        ]
      },
      {
        id: '79',
        type: 'page',
        template: 'page79.html'
      }
    ]
  },
  {
    id: 5,
    name: 'Glava3',
    pages: [
      {
        id: 80,
        type: 'video',
        video: 'intro.mp4'
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
            image: '82.jpg',
            description: 'Турецкий посол'
          }
        ]
      },
      {
        id: 83,
        type: 'page',
        template: 'page83.html',
        slides: [
          {
            image: '83.jpg',
            description: 'Турецкий посольство'
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
        template: 'page85.html',
        slides: [
          {
            image: '85.jpg',
            description: 'Процессия патриарха'
          }
        ]
      },
      {
        id: 86,
        type: 'page',
        template: 'page86.html',
        slides: [
          {
            image: '86.jpg',
            description: 'Франкский народ в 17 веке, голландцы'
          }
        ]
      },
      {
        id: 87,
        type: 'page',
        template: 'page87.html'
      },
      {
        id: 88,
        type: 'page',
        template: 'page88.html'
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
        template: 'page90.html',
        slides: [
          {
            image: '90.jpg'
          }
        ]
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
        template: 'page93.html',
        slides: [
          {
            image: '93.jpg'
          }
        ]
      },
      {
        id: 94,
        type: 'page',
        template: 'page94.html'
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
        template: 'page97.html'
      },
      {
        id: 98,
        type: 'page',
        template: 'page98.html',
        slides: [
          {
            image: '98.jpg',
            description: 'Святой 17 века Симеон Верхотурский'
          }
        ]
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
        template: 'page100.html'
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
            image: '106.jpg',
            description: 'В алтаре храма'
          }
        ]
      },
      {
        id: 107,
        type: 'page',
        template: 'page107.html',
        slides: [
          {
            image: '107.jpg'
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
            description: 'Консул английского короля'
          },
          {
            image: '109_2.jpg',
            description: 'Консул французского короля'
          },
          {
            image: '109_3.jpg',
            description: 'Консул русского царя Иван Чемоданов'
          },
          {
            image: '109_4.jpg',
            description: 'Русский посол во время зарубежного приёма'
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
            image: '111_1.jpg',
            description: 'Шведские ружья в действии'
          },
          {
            image: '111_2.jpg',
            description: 'Шведские ружья в действии'
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
        template: 'page113.html',
        slides: [
          {
            image: '113.jpg'
          }
        ]
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
        template: 'page116.html',
        slides: [
          {
            image: '116.jpg'
          }
        ]
      },
      {
        id: 117,
        type: 'page',
        template: 'page117.html'
      },
      {
        id: 118,
        type: 'page',
        template: 'page118.html'
      },
      {
        id: 119,
        type: 'page',
        template: 'page119.html',
        slides: [
          {
            image: '119.jpg',
            description: 'Священник за богослужением'
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
        id: 122,
        type: 'page',
        template: 'page122.html',
        slides: [
          {
            image: '122.jpg'
          }
        ]
      },
        {
        id: 123,
        type: 'page',
        template: 'page123.html'
      },
      {
        id: 124,
        type: 'page',
        template: 'page124.html',
        slides: [
          {
            image: '124.jpg',
              description: 'Христос умывает ноги ученикам'
          }
        ]
      },
      {
        id: '125',
        type: 'page',
        template: 'page125.html'
      }
    ]
  },
  {
    id: 6,
    name: 'Glava4',
    pages: [
      {
        id: 126,
        type: 'video',
        video: 'vstup.mp4'
      },
      {
        id: 127,
        type: 'page',
        template: 'page127.html',
        slides: [
          {
            image: '127_1.jpg'
          },
          {
            image: '127_2.jpg'
          }
        ]
      },
      {
        id: 128,
        type: 'page',
        template: 'page128.html'
      },
      {
        id: 129,
        type: 'page',
        template: 'page129.html',
        slides: [
          {
            image: '129.jpg',
            description: 'Персидский купец'
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
        template: 'page132.html',
        slides: [
          {
            image: '132_1.jpg',
            description: 'Знатные люди'
          },
          {
            image: '132_2.jpg',
            description: 'Боярин Лев Нарышкин. Глава посольского приказа, родной брат второй жены Алексея Михайловича'
          },
          {
            image: '132_3.jpg',
            description: 'Русский государственный деятель Василий Люткин'
          }
        ]
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
        template: 'page134.html',
        slides: [
          {
            image: '134.jpg'
          }
        ]
      },
      {
        id: 135,
        type: 'page',
        template: 'page135.html'
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
        template: 'page137.html'
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
            image: '140.jpg',
            description: 'Русский боярин'
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
        template: 'page143.html',
        slides: [
          {
            image: '143_1.jpg',
            description: 'Русские женщины'
          },
          {
            image: '143_2.jpg',
            description: 'Русские женщины'
          },
          {
            image: '143_3.jpg',
            description: 'Русские женщины'
          },
          {
            image: '143_4.jpg',
            description: 'Русские женщины'
          },
          {
            image: '143_5.jpg',
            description: 'Русские женщины'
          }
        ]
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
        template: 'page146.html'
      },
      {
        id: 147,
        type: 'page',
        template: 'page147.html',
        slides: [
          {
            image: '147.jpg'
          }
        ]
      },
      {
        id: 148,
        type: 'page',
        template: 'page148.html',
        slides: [
          {
            image: '148.jpg'
          }
        ]
      },
      {
        id: 149,
        type: 'page',
        template: 'page149.html',
        slides: [
          {
            image: '149_1.jpg'
          },
          {
            image: '149_2.jpg'
          }
        ]
      },
      {
        id: 150,
        type: 'page',
        template: 'page150.html',
        slides: [
          {
            image: '150_1.jpg'
          },
          {
            image: '150_2.jpg'
          },
          {
            image: '150_3.jpg'
          }
        ]
      },
      {
        id: 151,
        type: 'page',
        template: 'page151.html'
      },
      {
        id: 152,
        type: 'page',
        template: 'page152.html',
        slides: [
          {
            image: '152.jpg'
          }
        ]
      },
      {
        id: 153,
        type: 'page',
        template: 'page153.html',
        slides: [
          {
            image: '153.jpg',
            description: 'Собака племени мученика Христофора'
          }
        ]
      },
      {
        id: 154,
        type: 'page',
        template: 'page154.html',
        slides: [
          {
            image: '154.jpg'
          }
        ]
      },
      {
        id: 155,
        type: 'page',
        template: 'page155.html'
      },
      {
        id: 156,
        type: 'page',
        template: 'page156.html'
      },
      {
        id: 157,
        type: 'page',
        template: 'page157.html'
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
        template: 'page160.html',
        slides: [
          {
            image: '160.jpg'
          }
        ]
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
        template: 'page162.html',
        slides: [
          {
            image: '162.jpg',
            description: 'Русская деревня'
          }
        ]
      },
      {
        id: 163,
        type: 'page',
        template: 'page163.html'
      },
      {
        id: 164,
        type: 'page',
        template: 'page164.html'
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
      },
      {
        id: 166,
        type: 'page',
        template: 'page166.html'
      },
      {
        id: 167,
        type: 'page',
        template: 'page167.html'
      },
      {
        id: '168',
        type: 'page',
        template: 'page168.html'
      }
    ]
  },
  {
    id: 7,
    name: 'Glava5',
    pages: [
      {
        id: 169,
        type: 'page',
        template: 'page169.html',
        slides: [
          {
            image: '169.jpg'
          }
        ]
      },
      {
        id: 170,
        type: 'video',
        video: 'vstup.mp4'
      },
      {
        id: 171,
        type: 'page',
        template: 'page171.html',
        slides: [
          {
            image: '171.jpg'
          }
        ]
      },
      {
        id: 172,
        type: 'page',
        template: 'page172.html',
        slides: [
          {
            image: '172.jpg',
            description: 'Европейский баснописец'
          }
        ]
      },
      {
        id: 173,
        type: 'page',
        template: 'page173.html'
      },
      {
        id: 174,
        type: 'page',
        template: 'page174.html'
      },
      {
        id: 175,
        type: 'page',
        template: 'page175.html'
      },
      {
        id: 176,
        type: 'page',
        template: 'page176.html'
      },
      {
        id: 177,
        type: 'page',
        template: 'page177.html'
      },
      {
        id: 178,
        type: 'page',
        template: 'page178.html'
      },
      {
        id: 179,
        type: 'page',
        template: 'page179.html'
      },
      {
        id: 180,
        type: 'page',
        template: 'page180.html'
      },
      {
        id: 181,
        type: 'page',
        template: 'page181.html',
        slides: [
          {
            image: '181_1.jpg',
            description: 'В польском приказе. Голштинские посланники из делегации Адама Олеария'
          },
          {
            image: '181_2.jpg'
          }
        ]
      },
      {
        id: 182,
        type: 'page',
        template: 'page182.html'
      },
      {
        id: 183,
        type: 'page',
        template: 'page183.html'
      },
      {
        id: 184,
        type: 'page',
        template: 'page184.html'
      },
      {
        id: 185,
        type: 'page',
        template: 'page185.html'
      },
      {
        id: 186,
        type: 'page',
        template: 'page186.html'
      },
      {
        id: 187,
        type: 'page',
        template: 'page187.html'
      },
      {
        id: 188,
        type: 'page',
        template: 'page188.html'
      }
    ]
  }
];

// Transform sections to flat collection
App.pages = [];

App.sections.forEach(function(section) {
  App.pages = App.pages.concat(section.pages);
});
