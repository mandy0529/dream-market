import React from 'react';
import {BiMoon} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/pages/products/listView';
import {formatPrice} from '../../utils/helper';

function ListView({products}) {
  return (
    <Wrapper>
      {products &&
        products.map((item) => {
          const {title, id, price, category, img, description} = item;
          const image = img[0].url;
          return (
            <article key={id}>
              <img src={image} alt={title} />
              <div>
                <h4>{title}</h4>
                <span>
                  <BiMoon />
                  {category}
                </span>
                <h5 className="price">{formatPrice(price)}</h5>
                <p className="list-p">{description.substring(0, 70)} ... </p>
                <Link to={`/products/${id}`} className="detail-btn">
                  details
                </Link>
              </div>
            </article>
          );
        })}
    </Wrapper>
  );
}

export default ListView;
