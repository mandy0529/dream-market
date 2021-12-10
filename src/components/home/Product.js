import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/home/product';
import {HERO_IMG1} from '../../utils/images';

const Product = ({id, name, url, path, content}) => {
  return (
    <Wrapper>
      <Link to={`/products/${id}`} className="container">
        <img src={HERO_IMG1} alt="minji" />
      </Link>
      <footer>
        <h5>여행꿈</h5>
        <p>20,000원</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
