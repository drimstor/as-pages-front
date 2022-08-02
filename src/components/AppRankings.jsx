import React from 'react';

import arrow from '../assets/img/arrow-up.svg';
import flagUk from '../assets/img/flag-uk.svg';
import flagMalta from '../assets/img/flag-malta.svg';
import flagGermany from '../assets/img/flag-germany.svg';
import flagFrance from '../assets/img/flag-france.svg';
import flagRussia from '../assets/img/flag-russia.svg';

import { FirstPage, LastPage, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import {
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableFooter,
  TablePagination,
  IconButton,
  Box,
  Button,
} from '@mui/material';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const chartColorsRevenue = ['#2196F3', '#1FAA00', '#FFEA00', '#FF9800', '#D81B60'];
const data = [
  {
    name: 'Dec 1, 2021',
    UK: 4000,
    Malta: 2400,
    Germany: 1300,
    France: 3500,
    Russia: 3000,
    amt: 2400,
  },
  {
    name: 'Dec 5, 2021',
    UK: 3000,
    Malta: 1398,
    Germany: 1800,
    France: 3000,
    Russia: 3800,
    amt: 2210,
  },
  {
    name: 'Dec 10, 2021',
    UK: 2000,
    Malta: 4800,
    Germany: 1500,
    France: 2500,
    Russia: 3000,
    amt: 2290,
  },
  {
    name: 'Dec 15, 2021',
    UK: 2780,
    Malta: 3908,
    Germany: 2300,
    France: 3000,
    Russia: 4000,
    amt: 2000,
  },
  {
    name: 'Dec 20, 2021',
    UK: 1890,
    Malta: 4800,
    Germany: 2700,
    France: 3900,
    Russia: 3500,
    amt: 2181,
  },
  {
    name: 'Dec 25, 2021',
    UK: 2390,
    Malta: 3800,
    Germany: 1700,
    France: 4500,
    Russia: 2500,
    amt: 2500,
  },
  {
    name: 'Dec 30, 2021',
    UK: 2490,
    Malta: 4300,
    Germany: 1300,
    France: 4100,
    Russia: 3600,
    amt: 2100,
  },
];

const rows = [
  createData('1', flagUk, 'United Kingdom', '2', '▲', '11', '▲'),
  createData('2', flagMalta, 'Malta', '10', '▼', '37', '▼'),
  createData('3', flagGermany, 'Germany', '14', '▲', '10', '▲'),
  createData('4', flagFrance, 'France', '20', '▼', '2', '▼'),
  createData('5', flagRussia, 'Russia', '30', '▲', '20', '▲'),
];

function createData(number, flag, countries, arrow, free, grossing, arrow2) {
  return { number, flag, countries, arrow, free, grossing, arrow2 };
}
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  );
}

function AppRankings({ title }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <div className="app-page__rankings">
        <h3>Daily «{title}» TOP Rankings Charts by Country for «OS» on «PLATFORM» </h3>
        <div className="app-info__chart">
          <h4>30 days Ranking history</h4>
          {/* ---------------------------- */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="UK" stroke={chartColorsRevenue[0]} />
              <Line type="monotone" dataKey="Malta" stroke={chartColorsRevenue[1]} />
              <Line type="monotone" dataKey="Germany" stroke={chartColorsRevenue[2]} />
              <Line type="monotone" dataKey="France" stroke={chartColorsRevenue[3]} />
              <Line type="monotone" dataKey="Russia" stroke={chartColorsRevenue[4]} />
              <CartesianGrid stroke="#E0E0E0" strokeDasharray="0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          {/* ---------------------------- */}
          <div className="app-info__chart--bottom">
            <div className="app-info__chart--item">
              <span style={{ background: `${chartColorsRevenue[0]}` }}></span>
              <img src={flagUk} alt="flagUk" /> <p>UK</p>
            </div>
            <div className="app-info__chart--item">
              <span style={{ background: `${chartColorsRevenue[1]}` }}></span>
              <img src={flagMalta} alt="flagMalta" /> <p>Malta</p>
            </div>
            <div className="app-info__chart--item">
              <span style={{ background: `${chartColorsRevenue[2]}` }}></span>
              <img src={flagGermany} alt="flagGermany" /> <p>Germany</p>
            </div>
            <div className="app-info__chart--item">
              <span style={{ background: `${chartColorsRevenue[3]}` }}></span>
              <img src={flagFrance} alt="flagFrance" /> <p>France</p>
            </div>
            <div className="app-info__chart--item">
              <span style={{ background: `${chartColorsRevenue[4]}` }}></span>
              <img src={flagRussia} alt="flagRussia" /> <p>Russia</p>
            </div>
          </div>
        </div>
        {/* ---------------------------- */}
        <TableContainer>
          <Table sx={{ minWidth: 300 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">{/* Country */}</TableCell>
                <TableCell align="right">
                  <img src={arrow} alt="arrow-img" />
                </TableCell>
                <TableCell align="left">Top free</TableCell>
                <TableCell align="right">Top grossing</TableCell>
                <TableCell align="left">{/* Top free*/}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <TableRow key={row.number}>
                  <TableCell style={{ width: 50 }} component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell style={{ width: 30 }} align="left">
                    <img src={row.flag} alt="flag-img" />
                  </TableCell>
                  <TableCell style={{ width: 500 }} align="left">
                    {row.countries}
                  </TableCell>
                  <TableCell style={{ width: 50 }} align="right">
                    {row.arrow}
                  </TableCell>
                  <TableCell align="left">{row.free}</TableCell>
                  <TableCell align="right">{row.grossing}</TableCell>
                  <TableCell style={{ width: 10 }} align="left">
                    {row.arrow2}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={7}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        {/* ---------------------------- */}
        <Button className="app-page__rankings--btn" variant="outlined">
          See ranking details
        </Button>
      </div>
    </div>
  );
}

export default AppRankings;
