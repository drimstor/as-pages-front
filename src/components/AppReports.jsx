import React from 'react';

import { Tabs, Tab, Typography, Box } from '@mui/material';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const chartColorsRevenue = ['#2196F3', '#1FAA00'];
const data = [
  {
    name: '12/19',
    Revenue: 4000,
    Downloads: 2400,
    amt: 2400,
  },
  {
    name: '04/20',
    Revenue: 3000,
    Downloads: 1398,
    amt: 2210,
  },
  {
    name: '08/20',
    Revenue: 2000,
    Downloads: 6800,
    amt: 2290,
  },
  {
    name: '12/20',
    Revenue: 2780,
    Downloads: 3908,
    amt: 2000,
  },
  {
    name: '04/21',
    Revenue: 1890,
    Downloads: 4800,
    amt: 2181,
  },
  {
    name: '09/20',
    Revenue: 2390,
    Downloads: 3800,
    amt: 2500,
  },
  {
    name: '14/19',
    Revenue: 3490,
    Downloads: 4300,
    amt: 2100,
  },
];

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
        {/* ---------------------------- */}
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              variant="scrollable"
              onChange={handleChange}
              aria-label="basic tabs example">
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
            <div className="app-info__chart">
              <h4>Downloads and Revenue (in USD), monthly</h4>
              <div className="app-info__chart--wrapper">
                <p>Monthly Downloads</p> <p>Monthly Revenue</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="Downloads"
                    stroke={chartColorsRevenue[0]}
                    activeDot={{ r: 6 }}
                  />
                  <Line type="monotone" dataKey="Revenue" stroke={chartColorsRevenue[1]} />
                  <CartesianGrid stroke="#E0E0E0" strokeDasharray="0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
              {/* ---------------------------- */}
              <div className="app-info__chart--bottom">
                <div className="app-info__chart--item">
                  <span style={{ background: `${chartColorsRevenue[0]}` }}></span> <p>Downloads</p>
                </div>
                <div className="app-info__chart--item">
                  <span style={{ background: `${chartColorsRevenue[1]}` }}></span> <p>Revenue</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3>«{title}» Revenue by Country</h3>
            <p>
              Measure «{title}» performance and get insights with AppstoreSpy data you won’t find
              anywhere else using our Analytics, Revenue Stats ans Trends.
            </p>
            <div className="app-info__chart">
              <h4>Downloads and Revenue (in USD), monthly</h4>
              <div className="app-info__chart--wrapper">
                <p>Monthly Downloads</p> <p>Monthly Revenue</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <Line type="monotone" dataKey="Downloads" stroke={chartColorsRevenue[0]} />
                  <Line type="monotone" dataKey="Revenue" stroke={chartColorsRevenue[1]} />
                  <CartesianGrid stroke="#E0E0E0" strokeDasharray="0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
              {/* ---------------------------- */}
              <div className="app-info__chart--bottom">
                <div className="app-info__chart--item">
                  <span style={{ background: `${chartColorsRevenue[0]}` }}></span> <p>Downloads</p>
                </div>
                <div className="app-info__chart--item">
                  <span style={{ background: `${chartColorsRevenue[1]}` }}></span> <p>Revenue</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h3>«{title}» Daily Installs</h3>
            <p>
              Measure «{title}» performance and get insights with AppstoreSpy data you won’t find
              anywhere else using our Analytics, Revenue Stats ans Trends.
            </p>
            <div className="app-info__chart">
              <h4>Downloads and Revenue (in USD), monthly</h4>
              <div className="app-info__chart--wrapper">
                <p>Monthly Downloads</p> <p>Monthly Revenue</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <Line type="monotone" dataKey="Downloads" stroke={chartColorsRevenue[0]} />
                  <Line type="monotone" dataKey="Revenue" stroke={chartColorsRevenue[1]} />
                  <CartesianGrid stroke="#E0E0E0" strokeDasharray="0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
              {/* ---------------------------- */}
              <div className="app-info__chart--bottom">
                <div className="app-info__chart--item">
                  <span style={{ background: `${chartColorsRevenue[0]}` }}></span> <p>Downloads</p>
                </div>
                <div className="app-info__chart--item">
                  <span style={{ background: `${chartColorsRevenue[1]}` }}></span> <p>Revenue</p>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default AppReports;
