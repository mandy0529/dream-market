import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../context/AppContext';
import {SidebarContainer} from '../styles/sidebar';
import {headerList} from '../utils/helper';

function Sidebar() {
  const {hideSidebar, isOpen} = useGlobalContext();
  console.log(isOpen, 'isopen');
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
          <span className="header__cart-count">1</span>
        </span>
      </Link>
    </SidebarContainer>
  );
}

export default Sidebar;
