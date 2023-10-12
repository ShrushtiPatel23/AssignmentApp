import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';


export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} fontWeight="bold">
            APP LOGO
          </Typography>
          <Link href='/' color='inherit'><Button color="inherit" variant="text" size="medium">DASHBOARD</Button> </Link>
          <Link href='/createAds' color='inherit'><Button color="inherit" variant="text" size="medium">CREATE ADS</Button> </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}