import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Menu, Badge, Button, Icon } from '@mui/material';
import { Menu as MenuIcon, AccountCircle} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function PrimarySearchAppBar() {
  // メニューの開閉を管理するためのstate
  const [anchorEl, setAnchorEl] = useState(null);

  // anchorElがnullでない場合にtrueを返す(メニューが開いているかどうか)
  const isMenuOpen = Boolean(anchorEl);

  // プロフィールメニューを開く
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // メニューを閉じる
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#89cfeb' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }} // margin-right: 2
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Fails Tales
          </Typography>
          <Box sx={{ display: 'flex' }}>
            
            <IconButton
              size="large"
              color="inherit"
              onClick={() => alert('Search icon clicked')}>

             
            <SearchIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

