import React from 'react';
import {Link} from 'react-router-dom';
import {Product} from '..';
import {BiMoon} from '../../icons/icons';
import {Wrapper} from '../../styles/featured';
import {featuredList} from '../../utils/helper';

function FeaturedProducts() {
  return (
    <Wrapper className="section">
      <div className="title">
        <div className="featured__flex">
          <span>
            <BiMoon />
          </span>
          <h1>어떤 꿈을 원하세요?</h1>
        </div>

        <div className="section-center featured">
          {featuredList.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </div>
      <Link to="/products" className="btn">
        꿈 찾으러 가기
      </Link>
    </Wrapper>
  );
}

export default FeaturedProducts;
