import {FEATURED1, FEATURED2, FEATURED3} from './images';
const headerList = [
  {
    id: 1,
    title: 'home',
    path: '/',
  },
  {
    id: 2,
    title: 'about',
    path: '/about',
  },
  {
    id: 3,
    title: 'products',
    path: '/products',
  },
];

const featuredList = [
  {
    id: 1,
    url: FEATURED1,
    path: '/products',
    name: 'featured1',
    content: '가고 싶은 여행을 떠나요!',
  },
  {
    id: 2,
    url: FEATURED2,
    path: '/products',
    name: 'featured2',
    content: '우주를 탐험하러 가요!',
  },
  {
    id: 3,
    url: FEATURED3,
    path: '/products',
    name: 'featured3',
    content: '사랑하는 연인을 만나요!',
  },
];
export {headerList, featuredList};
