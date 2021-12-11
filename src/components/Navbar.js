import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
import {VscThreeBars} from 'react-icons/vsc';
import {Link, useLocation} from 'react-router-dom';
import {useGlobalContext} from '../context/AppContext';
import {useCartContext} from '../context/CartContext';
import {Wrapper} from '../styles/navbar';
import {headerList} from '../utils/helper';
import {HEADER} from '../utils/images';

function Navbar() {
  const {showSidebar, hideSidebar, isOpen} = useGlobalContext();
  const {pathname} = useLocation();
  const {total_amount} = useCartContext();

  return (
    <Wrapper>
      <div className="header__logo">
        <img src={HEADER} alt="header-logo" />
        <Link className="nav-header" to="/">
          <span>dream market</span>
        </Link>
      </div>

      <div className="header__list">
        {headerList.map((item) => {
          const {id, title, path} = item;
          return (
            <Link to={path} key={id}>
              <li
                style={{
                  background: ` ${path === pathname ? 'white' : 'transparent'}`,
                }}
              >
                {title}
              </li>
            </Link>
          );
        })}
      </div>

      <Link to="/cart" className="header__cart">
        <span className="cart-icon">
          <FiShoppingCart />
          <span className="header__cart-count">{total_amount}</span>
        </span>
      </Link>

      <div className="toggle__bar">
        {isOpen ? (
          <FaTimes onClick={hideSidebar} />
        ) : (
          <VscThreeBars onClick={showSidebar} />
        )}
      </div>
    </Wrapper>
  );
}

export default Navbar;
