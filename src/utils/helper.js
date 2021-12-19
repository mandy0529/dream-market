import {
  MdOutlineCardTravel,
  SiSkyliner,
  MdOutlineFamilyRestroom,
  RiHeart2Line,
  RiGhost2Line,
} from '../icons/icons';

const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(number);
  return newNumber;
};

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

const categoryType = (data, type) => {
  let unique = data && data.map((item) => item[type]);
  unique = ['모든꿈', ...new Set(unique)];
  return unique;
};
export {headerList, dreamList, formatPrice, categoryType};
