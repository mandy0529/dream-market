import React from 'react';
import {Link} from 'react-router-dom';
import {AddToCart} from '../components';
import {Wrapper} from '../styles/pages/products/singleProduct';
import {HERO_IMG1} from '../utils/images';

function SingleProduct() {
  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="back-btn">
          모든 꿈 보기
        </Link>

        <div className="product-center">
          <img src={HERO_IMG1} alt="minji" />
          <section className="content">
            <h2>여행꿈</h2>
            <h5 className="price">20,000원</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              deleniti provident tenetur exercitationem omnis consequuntur
              veniam a in iusto, nesciunt, perferendis labore unde tempora vel
              temporibus perspiciatis vero nihil quaerat!
            </p>
            <p className="info">
              <span>Available :</span>
              in stock
            </p>

            <p className="info">
              <span>category :</span>
              travel
            </p>

            <AddToCart />
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProduct;
