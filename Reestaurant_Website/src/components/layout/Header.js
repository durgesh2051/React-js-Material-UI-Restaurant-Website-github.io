import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileeOpen, setMobileOpen] = useState(false);
  //hendele menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileeOpen);
  };

  //menu drawer
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ bgcolor: "white", textAlign: "center" }}
    >
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <FastfoodIcon />
        My Resturant
      </Typography>
      <Divider />
      <ul className="moblie-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, my: 2 }}
            >
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink >
                </li>
                <li>
                  <NavLink  to={"/menu"}>Menu</NavLink >
                </li>
                <li>
                  <NavLink  to={"/about"}>About</NavLink >
                </li>
                <li>
                  <NavLink  to={"/contact"}>Contact</NavLink >
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileeOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-papar": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
