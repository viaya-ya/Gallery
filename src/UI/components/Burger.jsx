import React from 'react';
import {Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './Burger.module.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation(); // получаем текущий путь

  return (
  
      <Toolbar sx={{color:'#8a2be2'}}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Typography sx={{ fontFamily: 'Playfair Display', color:'black' }}>Стили</Typography>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        > 
          
          <MenuItem onClick={handleClose}> <NavLink to='/catalog' className={`${location.pathname.endsWith('/catalog') ? classes.active : ''} ${classes.link}`}>Все товары</NavLink></MenuItem>
          <MenuItem onClick={handleClose}> <NavLink to='/catalog/abstr'   className={`${location.pathname.includes('/abstr') ? classes.active : ''} ${classes.link}`} >Абстракционизм</NavLink></MenuItem>
          <MenuItem onClick={handleClose}><NavLink to='/catalog/realizm'  className={`${location.pathname.includes('/realizm') ? classes.active : ''} ${classes.link}`}> Реализм </NavLink></MenuItem>
          <MenuItem onClick={handleClose}><NavLink to='/catalog/impressionizm'  className={`${location.pathname.includes('/impressionizm') ? classes.active : ''} ${classes.link}`}> Импрессионизм </NavLink></MenuItem>
          <MenuItem onClick={handleClose}><NavLink to='/catalog/peizash'  className={`${location.pathname.includes('/peizash') ? classes.active : ''} ${classes.link}`}>Пейзаж</NavLink> </MenuItem>
          <MenuItem onClick={handleClose}><NavLink to='/catalog/minimalizm'  className={`${location.pathname.includes('/minimalizm') ? classes.active : ''} ${classes.link}`}>Минимализм</NavLink></MenuItem>
          <MenuItem onClick={handleClose}><NavLink to='/catalog/naturmort'  className={`${location.pathname.includes('/naturmort') ? classes.active : ''} ${classes.link}`}>Натюрморт</NavLink></MenuItem>
          <MenuItem onClick={handleClose}><NavLink to='/catalog/simvolizm'  className={`${location.pathname.includes('/simvolizm') ? classes.active : ''} ${classes.link}`}>Символизм</NavLink></MenuItem>
        </Menu>
      </Toolbar>

  );
};

export default Navbar;
