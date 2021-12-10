import {FEATURED1, FEATURED2, FEATURED3} from './images';
import {
  MdOutlineCardTravel,
  SiSkyliner,
  MdOutlineFamilyRestroom,
  RiHeart2Line,
  RiGhost2Line,
} from '../icons/icons';

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
    title: 'shop',
    path: '/products',
  },
];

const featuredList = [
  {
    id: 1,
    url: FEATURED1,
    path: '/products',
    name: 'featured1',
    content: '여행을 떠나고 싶으신가요 ?',
  },
  {
    id: 2,
    url: FEATURED2,
    path: '/products',
    name: 'featured2',
    content: '미지의 세계를 탐험하고 싶으신가요 ?',
  },
  {
    id: 3,
    url: FEATURED3,
    path: '/products',
    name: 'featured3',
    content: '못 다 이룬 사랑을 이루고 싶으신가요 ?',
  },
];

const dreamList = [
  {
    id: 1,
    title: '여행',
    text: '내가 가고 싶은 그 어디든 갈 수 있다 하면 어디를 가실 건가요 ?',
    icon: <MdOutlineCardTravel />,
  },
  {
    id: 2,
    title: '초현실',
    text: '내가 하늘을 날 수 있고, 우주에 갈 수 있거나, 손 하나 깜짝 안 움직여도 로봇이 다 해주는 세상이 온다면 ?',
    icon: <SiSkyliner />,
  },
  {
    id: 3,
    title: '그리움',
    text: '하늘로 먼저 간 반려견, 사랑하는 사람들이 보고 싶으신가요 ?',
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    id: 4,
    title: '사랑',
    text: 'BTS 멤버들과 돌아가면서 사랑을 할 수 있다면? 내가 짝사랑 하는 사람과 하루 데이트를 할 수 있다면 ?',
    icon: <RiHeart2Line />,
  },
  {
    id: 5,
    title: '스릴',
    text: '한 여름 밤 더위도 식히고! 누군가에게 쫓기는 스릴을 느끼고 싶은 그런 밤인가요 ?',
    icon: <RiGhost2Line />,
  },
];

const productsList = [
  {
    id: 1,
    category: '여행',
    stock: 3,
    text: '바빠서, 할 게 많아서, 성공하기 위해서 잠을 줄이는 요즘, 달러구트라는 책에서은 어제와 오늘 사이의 신비로운 틈새, 기분 좋은상상으로 채워 넣는 작업이라 표현합니다.',
    img: 'assets/hero5.jpeg',
  },
  {
    id: 2,
    category: '초현실',
    stock: 5,
    text: '바빠서, 할 게 많아서, 성공하기 위해서 잠을 줄이는 요즘, 달러구트라는 책에서은 어제와 오늘 사이의 신비로운 틈새, 기분 좋은상상으로 채워 넣는 작업이라 표현합니다.',
    img: 'assets/hero5.jpeg',
  },
  {
    id: 3,
    category: '그리움',
    stock: 8,
    text: '바빠서, 할 게 많아서, 성공하기 위해서 잠을 줄이는 요즘, 달러구트라는 책에서은 어제와 오늘 사이의 신비로운 틈새, 기분 좋은상상으로 채워 넣는 작업이라 표현합니다.',
    img: 'assets/hero5.jpeg',
  },
  {
    id: 4,
    category: '사랑',
    stock: 10,
    text: '바빠서, 할 게 많아서, 성공하기 위해서 잠을 줄이는 요즘, 달러구트라는 책에서은 어제와 오늘 사이의 신비로운 틈새, 기분 좋은상상으로 채워 넣는 작업이라 표현합니다.',
    img: 'assets/hero5.jpeg',
  },
  {
    id: 5,
    category: '스릴',
    stock: 2,
    text: '바빠서, 할 게 많아서, 성공하기 위해서 잠을 줄이는 요즘, 달러구트라는 책에서은 어제와 오늘 사이의 신비로운 틈새, 기분 좋은상상으로 채워 넣는 작업이라 표현합니다.',
    img: 'assets/hero5.jpeg',
  },
];
export {headerList, featuredList, dreamList, productsList};
