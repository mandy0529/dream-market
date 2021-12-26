import React from 'react';
import {Link} from 'react-router-dom';
import {ErrorPage, Product} from '..';
import {useProductContext} from '../../context/ProductContext';
import {BiMoon} from '../../icons/icons';
import {Wrapper} from '../../styles/home/featured';

function FeaturedProducts() {
  const {products, products_error: error} = useProductContext();

  if (error) {
    return <ErrorPage />;
  }

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
          {products &&
            products
              .map((item) => {
                return <Product key={item.id} {...item} />;
              })
              .splice(10, 3)}
        </div>
      </div>

      <Link to="/products" className="btn">
        꿈 찾으러 가기
      </Link>
    </Wrapper>
  );
}

export default FeaturedProducts;
