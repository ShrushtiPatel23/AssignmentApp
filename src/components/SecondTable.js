import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

function createData(group, clicks, cost, conversions, revenue) {
    return {
        group, clicks, cost, conversions, revenue
    };
}

const rows = [
    createData('Male', 348, 'USD 12,528', 42, 'USD 62,118'),
    createData('Female', 692, 'USD 24,912', 35, 'USD 5,175'),
    createData('Unknown', 105, 'USD 3,943', 3, 'USD 4,489'),
    // createData('Total', 1145, 'USD 41,383', 80, 'USD 71,782'),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'group',
        numeric: false,
        disablePadding: false,
        label: 'Group',
        heading: true
    },
    {
        id: 'clicks',
        numeric: true,
        disablePadding: false,
        label: 'Clicks',
        heading: false
    },
    {
        id: 'cost',
        numeric: false,
        disablePadding: false,
        label: 'Cost',
        heading: false
    },
    {
        id: 'conversions',
        numeric: true,
        disablePadding: false,
        label: 'Conversions',
        heading: false
    },
    {
        id: 'revenue',
        numeric: false,
        disablePadding: false,
        label: 'Revenue',
        heading: false
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell colSpan={5} sx={{ fontWeight: 'bold' }}>Ad Insights</TableCell>
            </TableRow>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        sx={{ fontWeight: 'bold' }}
                        key={headCell.id}
                        align={headCell.heading ? 'left' : 'right'}
                        padding='normal'
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};



export default function SecondTable() {

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState();

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    console.log(rows)
    const visibleRows = React.useMemo(
        () =>

            stableSort(rows, getComparator(order, orderBy)).slice(),
        [order, orderBy],
    );
    return (
        <TableContainer>
            <Table
                aria-labelledby="tableTitle"
            >
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                />
                <TableBody>
                    {visibleRows.map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (

                            <TableRow
                                tabIndex={-1}
                                key={row.campaign}
                                sx={{ cursor: 'pointer' }}
                            >

                                <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="normal"
                                    sx={{ color: 'grey' }}
                                >
                                    {row.group}
                                </TableCell>
                                <TableCell sx={{ color: 'grey' }} align="right">{row.clicks}</TableCell>
                                <TableCell sx={{ color: 'grey' }} align="right">{row.cost}</TableCell>
                                <TableCell sx={{ color: 'grey' }} align="right">{row.conversions}</TableCell>
                                <TableCell sx={{ color: 'grey' }} align="right">{row.revenue}</TableCell>

                            </TableRow>


                        );
                    })}
                    <TableRow>
                        <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                            sx={{ color: 'grey' }}
                        >
                            Total
                        </TableCell>
                        <TableCell sx={{ color: 'grey' }} align="right">1145</TableCell>
                        <TableCell sx={{ color: 'grey' }} align="right">USD 41,383</TableCell>
                        <TableCell sx={{ color: 'grey' }} align="right">80</TableCell>
                        <TableCell sx={{ color: 'grey' }} align="right">USD 71,782</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>


    )
}
