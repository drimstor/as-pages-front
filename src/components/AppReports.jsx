import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import img from '../assets/stats_right.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AppReports({ title }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app-info">
      <div className="app-info__stats">
        <h3>«{title}» Reports</h3>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Revenue per month" {...a11yProps(0)} />
              <Tab label="revenue by country" {...a11yProps(1)} />
              <Tab label="daily installs" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <h3>«{title}» Revenue per Month</h3>
            <p>
              Measure «{title}» performance and get insights with AppstoreSpy data you won’t find
              anywhere else using our Analytics, Revenue Stats ans Trends.
            </p>
            <img src={img} width={'100%'} alt="stats" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3>«{title}» Revenue by Country</h3>
            <p>
              Measure «{title}» performance and get insights with AppstoreSpy data you won’t find
              anywhere else using our Analytics, Revenue Stats ans Trends.
            </p>
            <img src={img} width={'100%'} alt="stats" />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h3>«{title}» Daily Installs</h3>
            <p>
              Measure «{title}» performance and get insights with AppstoreSpy data you won’t find
              anywhere else using our Analytics, Revenue Stats ans Trends.
            </p>
            <img src={img} width={'100%'} alt="stats" />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default AppReports;
