import React from 'react';
import {BiMoon} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/home/product';
import {formatPrice} from '../../utils/helper';

const Product = ({id, title, category, price, img}) => {
  const image = img && img[0].url;
  return (
    <Wrapper>
      <Link to={`/products/${id}`} className="container">
        <img src={image} alt="minji" />
      </Link>
      <footer>
        <div className="footer-left">
          <h5>{title}</h5>
          <span>
            <BiMoon /> {category}
          </span>
        </div>

        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
