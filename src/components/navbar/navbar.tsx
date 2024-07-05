import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Tipagem explícita para anchorEl
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { // Tipagem explícita para event
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <i className="fas fa-book me-2"></i>
          <i className="fab fa-react me-2"></i>
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row ms-auto">
          <li className="nav-item me-3">
            <Link className="nav-link text-white" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className="nav-link text-white" 
            >
              Estudos
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <Link className="nav-link" to='/estudos'>Estudos</Link> 
              </MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
