import React from 'react';
import {GridView, ListView} from '..';
import {useFilterContext} from '../../context/FilterContext';
import {useProductContext} from '../../context/ProductContext';

function ProductList() {
  const {isGridView} = useProductContext();
  const {filltered_products: products} = useFilterContext();

  if (products.length < 1) {
    return <h3>해당되는 가격의 꿈이 없습니다.</h3>;
  }

  if (isGridView === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
}

export default ProductList;
