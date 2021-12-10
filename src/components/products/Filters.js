import React from 'react';
import {Wrapper} from '../../styles/pages/products/filter';
import {productsList} from '../../utils/helper';

function Filters() {
  return (
    <Wrapper>
      <div className="content">
        <div className="form-control">
          <h4>꿈 테마</h4>
          <div className="category-control">
            {productsList.map((item) => {
              const {id, category} = item;
              return (
                <button
                  name="category"
                  className="active"
                  key={id}
                  value={category}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="filter-control">
            <h4>꿈 가격</h4>
            <div className="filter-control-flex">
              <p className="price"> 10,000원</p>
              <input type="range" name="price" min="0" max="10,000" />
            </div>
          </div>
        </div>

        <button className="clear-btn">모든 꿈 보기</button>
      </div>
    </Wrapper>
  );
}

export default Filters;
