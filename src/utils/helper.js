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
    text: '내가 가고 싶은 그 어디든 갈 수 있다하면 어디를 가실건가요?',
    icon: <MdOutlineCardTravel />,
  },
  {
    id: 2,
    title: '초현실',
    text: '내가 하늘을 난다거나, 우주에 갈 수 있고, 손 하나 깜빡 안해도 로봇이 다 해주는 세상이 온다면 ?',
    icon: <SiSkyliner />,
  },
  {
    id: 3,
    title: '그리움',
    text: '먼저 하늘 가 있는 반려견, 사랑하는 사람들이 보고 싶으신가요?',
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    id: 4,
    title: '사랑',
    text: 'BTS 멤버들과 돌아가면서 사랑을 할 수 있다면? 내가 짝사랑 하는 사람과 하루 데이트를 할 수 있다면..',
    icon: <RiHeart2Line />,
  },
  {
    id: 5,
    title: '스릴',
    text: '한 여름 밤 더위도 식히고! 누군가에게 쫓기는 스릴을 느끼고 싶은 그런 밤이세요?',
    icon: <RiGhost2Line />,
  },
];
export {headerList, featuredList, dreamList};
