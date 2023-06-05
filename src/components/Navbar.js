import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link style={{color: 'white', fontSize: 'bold 15px', justifyItems:'left', justifyContent:'left'}} to='/generateinvoice'>
          New Invoice
            </Link>
            <Link style={{color: 'white', fontSize: 'bold 15px'}} to='/generateinvoice'>
          About Us
            </Link>
            <Link style={{color: 'white', fontSize: 'bold 15px'}} to='/generateinvoice'>
          Contact Us
            </Link>
          <h1 style={{color: 'white'}}>Invoice System</h1>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
                <li>
                  <Link to='/reports'>
                    <h3 style={{color: 'white', }}>Reports</h3>
                  </Link>
                  <Link to='/reports'>
                    <h3 style={{color: 'white', }}>Users</h3>
                  </Link>
                  <Link to='/reports'>
                    <h3 style={{color: 'white', }}>Revenue</h3>
                  </Link>
                </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
