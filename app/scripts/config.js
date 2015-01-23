
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
        type: 'video',
        video: 'intro.mp4'
      },
      {
        type: 'page',
        template: 'page3.html'
      },
      {
        type: 'page',
        template: 'page4.html'
      },
      {
        type: 'page',
        template: 'page5.html'
      },
      {
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
        type: 'video',
        video: 'vstup.mp4'
      },
      {
        type: 'page',
        template: 'page8.html'
      }
    ]
  }
];
