import React from 'react';
import logo from '../assets/img/logo.svg';
import { Menu } from '@mui/icons-material';
import { Tab, Tabs, Button, AppBar, Toolbar, IconButton } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';

export default function Header({ theme, matches }) {
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {matches ? (
        <header className="header">
          <div className="header__wrapper">
            <div className="header__nav">
              <img src={logo} alt="logo" width={114} />
              <ThemeProvider theme={theme}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example">
                  <Tab value="one" label="Overview" />
                  <Tab value="two" label="Features" />
                  <Tab value="three" label="Plans" />
                  <Tab value="four" label="Pricing" />
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
                sx={{ mr: 2 }}>
                <Menu />
              </IconButton>
              <img src={logo} alt="logo" width={114} />
              <ThemeProvider theme={theme}>
                <Button variant="contained">Sign in</Button>
              </ThemeProvider>
            </Toolbar>
          </AppBar>
        </header>
      )}
    </>
  );
}
