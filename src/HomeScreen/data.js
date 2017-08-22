const background = [
  require('../../img/swiper-1.png'),
  require('../../img/swiper-2.png'),
  require('../../img/swiper-3.png'),
  require('../../img/swiper-4.png')
]
export default cards = [
  {
    quote: 'Card One',
    image: background[_.random(0, background.length-1)]
  },
  {
    quote: 'Card Two',
    image: background[_.random(0, background.length-1)]
  },
  {
    quote: 'Card Three',
    image: background[_.random(0, background.length-1)]
  },
  {
    quote: 'Card Four',
    image: background[_.random(0, background.length-1)]
  }
];
