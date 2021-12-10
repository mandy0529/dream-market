import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/pages/products/listView';
import {HERO_IMG1} from '../../utils/images';

function ListView({products}) {
  return (
    <Wrapper>
      <img src={HERO_IMG1} alt="minji" />
      <div>
        <h4>여행 꿈</h4>
        <h5 className="price">10,000원</h5>
        <p className="list-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          veritatis facere, similique enim autem itaque iure quam vel voluptas
          nisi.{' '}
        </p>
        <Link to="/products/id" className="detail-btn">
          꿈 자세히 보기
        </Link>
      </div>
    </Wrapper>
  );
}

export default ListView;
