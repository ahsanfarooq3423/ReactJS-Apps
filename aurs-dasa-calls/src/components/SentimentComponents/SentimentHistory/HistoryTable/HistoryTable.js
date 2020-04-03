import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#363970',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);



const rows = [
    {
        name : 'Audio_Call_TPL_1',
        sentiment : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        sentiment : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        sentiment : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        sentiment : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        sentiment : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        sentiment : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
]


const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer style = {{maxHeight : '70vH'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Call Name (File Name)</StyledTableCell>
            <StyledTableCell align="left">Sentiment</StyledTableCell>
            <StyledTableCell align="left">Date Added</StyledTableCell>
            <StyledTableCell align="left">Call Size</StyledTableCell>
            <StyledTableCell align="left">Call Length </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.sentiment}</StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
              <StyledTableCell align="left">{row.size}</StyledTableCell>
              <StyledTableCell align="left">{row.length}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}