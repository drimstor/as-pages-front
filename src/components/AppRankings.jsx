import React from 'react';

import img from '../assets/google_ranking_chart.png';
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
  Button
} from '@mui/material';

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
        <img src={img} alt="img" />
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

        <Button className='app-page__rankings--btn' variant="outlined">See ranking details </Button>
      </div>
    </div>
  );
}

export default AppRankings;
