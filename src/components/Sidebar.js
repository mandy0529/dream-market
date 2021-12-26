import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../context/AppContext';
import {useCartContext} from '../context/CartContext';
import {SidebarContainer} from '../styles/sidebar';
import {headerList} from '../utils/helper';

function Sidebar() {
  const {hideSidebar, isOpen} = useGlobalContext();
  const {total_amount} = useCartContext();

  return (
    <SidebarContainer className={`sidebar ${isOpen ? 'show' : ''}`}>
      <ul className="links">
        {headerList.map(({id, title, path}) => {
          return (
            <li key={id}>
              <Link to={path} onClick={hideSidebar}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link to="/cart" className="header__cart">
        <span className="cart-icon">
          <FiShoppingCart onClick={hideSidebar} />
          <span className="header__cart-count">{total_amount}</span>
        </span>
      </Link>
    </SidebarContainer>
  );
}

export default Sidebar;
