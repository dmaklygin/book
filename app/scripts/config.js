
window.App || (window.App = {});

/**
 * Config for pages
 */
App.sections = [
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
        template: 'page3'
      },
      {
        type: 'page',
        template: 'page4'
      },
      {
        type: 'page',
        template: 'page5'
      },
      {
        type: 'page',
        template: 'page6'
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
    name: 'Second Section',
    pages: [
      {
        template: 'page7'
      }
    ]
  }
];
