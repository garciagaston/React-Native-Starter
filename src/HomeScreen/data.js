const background = [
  require('../../img/swiper-1.png'),
  require('../../img/swiper-2.png'),
  require('../../img/swiper-3.png'),
  require('../../img/swiper-4.png')
]
export default cards = [
  {
    id: 1,
    quote: 'Card One',
    category: 'Category 1',
    image: background[_.random(0, background.length-1)]
  },
  {
    id: 2,
    quote: 'Card Two',
    category: 'Category 2',
    image: background[_.random(0, background.length-1)]
  },
  {
    id: 3,
    quote: 'Card Three',
    category: 'Category 3',
    image: background[_.random(0, background.length-1)]
  },
  {
    id: 4,
    quote: 'Card Four',
    category: 'Category 4',
    image: background[_.random(0, background.length-1)]
  }
];
