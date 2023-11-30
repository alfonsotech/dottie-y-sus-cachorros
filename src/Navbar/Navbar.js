import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure the CSS file is imported

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dottie y sus Cachorros
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                className="mobile-menu-button"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/">Inicio</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/mama">La Mama</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/puppies">Los Cachorros</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/adopt">Como Adoptar</Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className="desktop-menu">
              <Link to="/" className="menu-link">
                <Button color="inherit">Inicio</Button>
              </Link>
              <Link to="/mama" className="menu-link">
                <Button color="inherit">La Mama</Button>
              </Link>
              <Link to="/puppies" className="menu-link">
                <Button color="inherit">Los Cachorros</Button>
              </Link>
              <Link to="/adopt" className="menu-link">
                <Button color="inherit">Como Adoptar</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
