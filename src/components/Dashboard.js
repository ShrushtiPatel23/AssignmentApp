import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import FirstTable from './FirstTable';
import SecondTable from './SecondTable';
import { Button, Paper, Stack, Typography } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TableChartIcon from '@mui/icons-material/TableChart';
import { grey } from '@mui/material/colors';
import DonutChart from './DonutChart';

export default function Dashboard() {

    const [toggle, setToggle] = useState(true);

    return (
        <Box sx={{ width: '100%' }}>
            <Grid direction="row" container
                alignItems="center"
                marginTop='30px'>
                <Box sx={{ m: 3, boxShadow: 3, width: '45%' }} >
                    <FirstTable />

                </Box>
                <Box sx={{ m: 2, boxShadow: 3, width: '45%', justifyContent: 'center' }}>
                    {toggle ?

                        <DonutChart /> : <SecondTable />}
                    <Stack
                        direction="row"
                        justifyContent="end"
                        alignItems="end"
                        height={toggle ? 0 : 100}
                        spacing={2}
                        margin={3}
                    >
                        <div style={{ display: 'flex', width: '20%', justifyContent: 'flex-end' }}>
                            <Box size='small' sx={{ borderRadius: 10, backgroundColor: grey[200] }} >
                                <Button variant={toggle ? 'contained' : "text"} color='primary' size='small' sx={{ borderRadius: 28 }} >
                                    <DonutLargeIcon color='blue' onClick={() => setToggle(true)} />
                                </Button>
                                <Button sx={{ borderRadius: 28 }} size='small' variant={toggle ? 'text' : 'contained'} color='primary'>
                                    <TableChartIcon onClick={() => setToggle(false)} />
                                </Button>
                            </Box>
                        </div>

                    </Stack>
                </Box>

            </Grid>

        </Box>
    )
}