import React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableRow, Button } from '@mui/material';

const rows = [
  createData('Raiting', '4.4', '', '', ''),
  createData('Installs daily (est.)', '11M', '', '', ''),
  createData('Downloads, monthly (est.)', '11M', '▼', '-101', ''),
  createData('Revenue, monthly (est.)', '$90K', '▲', '+10K', ''),
  createData('Installs', '500M+', '', '', ''),
  createData('Released', '9 years', '', '', '03/12/2012'),
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function AppInfo({ logo, flag, title, link, category, description }) {
  return (
    <div className="app-info">
      <div className="app-info__title">
        <div className="app-info__container">
          <img src={logo} alt="app-logo" />
          <div className="app-info__text">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="app-info__country">
              <img src={flag} alt="country-flag" /> <a href={link}>{link}</a>
            </div>
            <p>{category}</p>
          </div>
        </div>
        <Button variant="contained">➕  Add to Collection</Button>
      </div>
      <div className="app-info__metrics">
        <h3>«{title}» Metrics and Intelligence Data, Today</h3>

        <TableContainer>
          <Table sx={{ maxWidth: 545 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <span className="app-info__subtitle">SHOW MORE</span>
      </div>
    </div>
  );
}

export default AppInfo;
