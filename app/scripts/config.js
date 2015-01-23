
window.App || (window.App = {});

/**
 * Config for pages
 */
window.App.sections = [
  {
    id: 1,
    name: 'First Section',
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
            sound: '1.mp3',
            map: true
          },
          {
            image: '2_1.jpg',
            sound: '2.mp3'
          },
          {
            image: '3_1.jpg'
          }
        ]
      },
      {
        id: 4,
        type: 'page',
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
    name: 'Second Section',
    pages: [
      {
        id: 7,
        type: 'video',
        video: 'vstup.mp4'
      },
      {
        id: 8,
        type: 'page',
        template: 'page8.html'
      }
    ]
  }
];
