import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {AddToCart, ErrorPage, Loader} from '../components';
import {useProductContext} from '../context/ProductContext';
import {Wrapper} from '../styles/pages/products/singleProduct';
import {SINGLE_API} from '../utils/api';
import {formatPrice} from '../utils/helper';

function SingleProduct() {
  const {
    singleProduct: data,
    single_loading: loading,
    single_error: error,
    fetchSingleProduct,
  } = useProductContext();

  const {id} = useParams();

  useEffect(() => {
    fetchSingleProduct(`${SINGLE_API}${id}`);
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  const {category, price, stock, title, image, description} = data;
  const img = image && image[0].url;
  return (
    <Wrapper>
      <div className="section section-center page">
        <div className="product-center">
          <div className="product-center-left"></div>

          <img className="main" src={img} alt={title} />
          <section className="content">
            <Link to="/products" className="back-btn">
              모든 꿈 보기
            </Link>
            <h2 className="title">{title}</h2>
            <h4 className="price">{formatPrice(price)}</h4>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Stock :</span>
              {stock}
            </p>

            <p className="info">
              <span>Category :</span>
              {category}
            </p>

            <AddToCart data={data} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProduct;
