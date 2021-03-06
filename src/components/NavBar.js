
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './components.css'

const pages = ['About', 'Projects', 'Contact'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" elevation={0} sx={{ background: "#FFFFFF", borderBottom: 2, paddingBottom: 2, borderColor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: { xs: 'flex' }, flexDirection: "row", justifyContent: "space-between" }}>

          {/* LOGO */}
          <Typography
            variant="h2"
            noWrap
            component="div"
            color="black"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Johnny Yang
          </Typography>

          {/*Drawer - small screen  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            {/* Menu triple bar */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>

            {/* ABOUT, PROJECTS, CONTACT - small screen */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <a className="nav-anchor" href={"#"+page.toLowerCase()} key={pages.indexOf(page)}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>

          {/* LOGO - small screen */}
          <Typography
            variant="h4"
            noWrap
            component="div"
            color="black"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Johnny Yang
          </Typography>

          {/* ABOUT, PROJECTS, CONTACT - full screen */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "flex-end" }}>
            {pages.map((page) => (
              <a className="nav-anchor" href={"#" + page.toLowerCase()} key={pages.indexOf(page)}>
                <Button
                  key={page}

                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              </a>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;