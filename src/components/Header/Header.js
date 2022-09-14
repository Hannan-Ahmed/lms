// import React from 'react'
import './Header.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { makeStyles } from '@material-ui/core/styles';
import '../Material.css'
import { useNavigate } from "react-router-dom";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



function Header() {
  const navigate = useNavigate();


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
   
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    localStorage.removeItem('admintoken')
    navigate('/')
  };



  return (
    <div>
      <div className='tops'>
        <div className='title' >Admin Dashboard</div>
        <div className='image' >
          <AppBar position="static"  >
            <Container maxWidth="xl" >
              <Toolbar disableGutters>


                <Box sx={{ flexGrow: 0 }} >
                  <Tooltip title="View Profile">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      
                      
                      </MenuItem>
                    ))}



                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>

        {/* ******************************************************************************** */}


        <div>

        </div>
        {/* ******************************************************************************** */}







      </div>

    </div>
  )
}

export default Header
