import faker from 'faker';

const books = [
  {
    title: 'Book 1',
    img: faker.image.image(),
    desc: ''
  }, 
  {
    title: 'Book 2',
    img: faker.image.image(),
    desc: ''
  },
  {
    title: 'Book 3',
    img: faker.image.image(),
    desc: 'descript 3'
  },
  {
    title: 'Book 4',
    img: faker.image.image(),
    desc: 'descript 4'
  },
  {
    title: 'Book 5',
    img: faker.image.image(),
    desc: 'descript 5'
  }
];

export default books;