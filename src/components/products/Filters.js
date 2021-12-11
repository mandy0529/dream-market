import React from 'react';
import {useFilterContext} from '../../context/FilterContext';
import {Wrapper} from '../../styles/pages/products/filter';
import {categoryType, formatPrice} from '../../utils/helper';

function Filters() {
  const {
    all_products: products,
    filter: {category, price, min_price, max_price},
    clearFilter,
    updateFilter,
  } = useFilterContext();

  const selectedCategory = categoryType(products, 'category');

  return (
    <Wrapper>
      <div className="content">
        <div className="form-control">
          <h4>꿈 테마</h4>
          <div className="category-control">
            {selectedCategory &&
              selectedCategory.map((item, index) => {
                return (
                  <button
                    name="category"
                    className={`${category === item ? 'active' : null}`}
                    key={index}
                    value={item}
                    onClick={updateFilter}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
          <div className="filter-control">
            <h4>꿈 가격</h4>
            <div className="filter-control-flex">
              <p className="price"> {formatPrice(price)}</p>
              <input
                type="range"
                name="price"
                onChange={updateFilter}
                min={min_price}
                max={max_price}
                value={price}
              />
            </div>
          </div>
        </div>

        <button onClick={clearFilter} className="clear-btn">
          꿈 필터 삭제
        </button>
      </div>
    </Wrapper>
  );
}

export default Filters;
