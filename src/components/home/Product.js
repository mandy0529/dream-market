import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/home/product';

const Product = ({id, name, url, path, content}) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={url} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch className="search__btn" />
        </Link>
      </div>
      <footer>{content}</footer>
    </Wrapper>
  );
};

export default Product;
