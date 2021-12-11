import React from 'react';
import {BsFillGridFill, BsList} from '../../icons/icons';
import {useProductContext} from '../../context/ProductContext';
import {Wrapper} from '../../styles/pages/products/sort';
import {useFilterContext} from '../../context/FilterContext';

function Sort() {
  const {isGridView, gridView, listView} = useProductContext();
  const {filltered_products: products} = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={gridView}
          type="button"
          className={`${isGridView ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={listView}
          type="button"
          className={`${!isGridView ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>
      <p className="sort-p">{products.length}개 꿈</p>
      <hr />
    </Wrapper>
  );
}

export default Sort;
