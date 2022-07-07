import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeProvider } from '@mui/material/styles';
import { Menu } from '@mui/icons-material';
import {
  Tab,
  Tabs,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export default function Header({ theme, matches }) {
  const navLi = ['Overview', 'Features', 'Plans', 'Pricing'];
  const [listItem, setListItem] = useState(false);
  const handleChange = (event, newValue) => {
    setListItem(newValue);
  };
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      {matches ? (
        <header className="header">
          <div className="header__wrapper">
            <div className="header__nav">
              <AnchorLink href="#top" onClick={() => setListItem(false)}>
                <img src={logo} alt="logo" width={114} />
              </AnchorLink>
              <ThemeProvider theme={theme}>
                <Tabs
                  value={listItem}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="primary">
                  {navLi.map((item, index) => (
                    <Tab
                      key={index}
                      value={index}
                      label={
                        <AnchorLink key={index} href={'#' + item} offset=" 0 ">
                          {item}
                        </AnchorLink>
                      }
                    />
                  ))}
                </Tabs>
              </ThemeProvider>
            </div>

            <div className="header__btns">
              <ThemeProvider theme={theme}>
                <Button variant="outlined">Sign in</Button>
                <Button variant="contained">Try AppStoreSpy now</Button>
              </ThemeProvider>
            </div>
          </div>
        </header>
      ) : (
        <header className="header">
          <AppBar position="fixed" theme={theme} color="white">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: -1.5 }}
                onClick={toggleDrawer}>
                <Menu />
              </IconButton>
              <AnchorLink href="#top">
                <img src={logo} alt="logo" width={114} />
              </AnchorLink>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  // sx={{ ml: 'auto' }}
                >
                  Sign in
                </Button>
              </ThemeProvider>
            </Toolbar>
            <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer}>
              <List>
                {navLi.map((item, index) => (
                  <ListItemButton key={index}>
                    <ListItemText key={index}>
                      <AnchorLink key={index} href={'#' + item} offset=" 0 " onClick={toggleDrawer}>
                        {item}
                      </AnchorLink>
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </AppBar>
        </header>
      )}
    </>
  );
}
