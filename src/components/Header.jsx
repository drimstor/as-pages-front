import React, { useState, useContext } from 'react';
import logo from '../assets/img/logo.svg';

import { ModalContext } from '../contexts';

import AnchorLink from 'react-anchor-link-smooth-scroll';
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

const navLi = ['Overview', 'Features', 'Plans', 'Pricing'];

export default function Header({  }) {
  const [listItem, setListItem] = useState(false);
  const handleChange = (event, newValue) => {
    setListItem(newValue);
  };
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const { toggleModal, matches1025 } = useContext(ModalContext);
  return (
    <>
      {matches1025 ? (
        <header className="header">
          <div className="header__wrapper">
            <div className="header__nav">
              <AnchorLink href="#top" onClick={() => setListItem(false)}>
                <img src={logo} alt="logo" width={114} />
              </AnchorLink>
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
            </div>
            <div className="header__btns">
              <Button variant="outlined" onClick={toggleModal}>
                Sign in
              </Button>
              <Button variant="contained">Try AppStoreSpy now</Button>
            </div>
          </div>
        </header>
      ) : (
        <header className="header">
          <AppBar position="fixed" color="white">
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
              <Button variant="contained" onClick={toggleModal}>
                Sign in
              </Button>
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
