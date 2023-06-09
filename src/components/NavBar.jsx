import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AppBar, Box, Button, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StandForLogo from "../assets/logo/logo-transparent-svg.svg";
import { navLinks } from "../constants";
import { styled } from "@mui/system";

const Logo = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxWidth: "300px",
  alignSelf: "center",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "250px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "250px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "250px",
  },
}));

const NavBar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar>
      <Toolbar
        variant="dense"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "fixed",
          zIndex: 5,
          flexWrap: { md: "no-wrap" },
          flexDirection: { sm: "column", md: "row" },
        }}>
        <Logo src={StandForLogo} alt="StandFor Logo" />

        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: { md: "flex", sm: "flex", xs: "none" },
            justifyContent: { md: "end", sm: "center" },
            width: "100%",
          }}>
          {navLinks.map((link) => (
            <ScrollLink to={link.id} spy={true} smooth={true} offset={-70} duration={500} key={link.id}>
              <Button
                sx={{ minWidth: "7rem" }}
                variant="contained"
                onClick={() => {
                  setActive(link.value);
                }}
                className={active === link.value ? "active" : ""}>
                {link.value}
              </Button>
            </ScrollLink>
          ))}
        </Box>

        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.id} onClick={handleDrawerClose}>
                <ScrollLink to={link.id} spy={true} smooth={true} offset={-70} duration={500}>
                  <ListItemText
                    primary={link.value}
                    onClick={() => {
                      setActive(link.value);
                    }}
                  />
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
