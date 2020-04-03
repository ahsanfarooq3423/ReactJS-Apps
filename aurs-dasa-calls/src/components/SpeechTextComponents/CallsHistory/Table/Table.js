import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';

import Modal from './Modal';


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
        result: 'ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس ',
        name: 'Audio_Call_TPL_1',
        size: '4.1 MB',
        length: '2:20 minutes'
    },
    {
        result: 'ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس',
        name: 'Audio_Call_TPL_1',
        size: '4.1 MB',
        length: '2:20 minutes'
    },
    {
        result: 'ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس',
        name: 'Audio_Call_TPL_1',
        size: '4.1 MB',
        length: '2:20 minutes'
    },
    {
        result: 'ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس',
        name: 'Audio_Call_TPL_1',
        size: '4.1 MB',
        length: '2:20 minutes'
    },
    {
        result: 'ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس',
        name: 'Audio_Call_TPL_1',
        size: '4.1 MB',
        length: '2:20 minutes'
    },
    {
        result: 'ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس',
        name: 'Audio_Call_TPL_1',
        sentiment: 'Angry',
        date: '23-March-2020',
        size: '4.1 MB',
        length: '2:20 minutes'
    },
]


const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();
    const [modalShow, setModalShow] = useState(false);
    const [callIndex, setCallIndex] = useState(0);

    return (
        <React.Fragment>

            <Modal
                text = {rows[callIndex].result}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <TableContainer style={{ maxHeight: '70vH' }} component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Speech To Text Result</StyledTableCell>
                            <StyledTableCell align="left">Call Name</StyledTableCell>
                            <StyledTableCell align="left">Call Size</StyledTableCell>
                            <StyledTableCell align="left">Call Length </StyledTableCell>
                            <StyledTableCell align="left">Play Call</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell
                                    style = {{
                                        cursor : 'pointer'
                                    }}
                                    onClick={() => {
                                        setCallIndex(index)
                                        setModalShow(true)}} 
                                    component="th" 
                                    scope="row">{'...' + row.result.slice(0, 25)}</StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.size}</StyledTableCell>
                                <StyledTableCell align="left">{row.length}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <IconButton aria-label="play">
                                        <PlayArrow />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}








