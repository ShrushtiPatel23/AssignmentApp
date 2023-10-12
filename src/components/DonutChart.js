import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography, Divider,} from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DonutChart() {

  const data = {
    labels: ['40% Male', '35% Female', '24% Unknown'],
    datasets: [
      {
        label: '# of Group',
        data: [40, 35, 25],
        hoverOffset: 4,
        backgroundColor: [
          'orange', 'blue', 'black'
        ],
        borderColor: [
          'orange', 'blue', 'black'
        ],
        borderColor: '#fff',
        borderWidth: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",

      },
    },
  };


  return (
    <Box sx={{display:'block',width:'100%'}}>
    <Typography sx={{m:2, justifyItems: 'start', fontWeight:'bold'}}>Ad InSights</Typography>
    <Divider />
    <Box sx={{ width:'50%', ml:20}}>
      
      <Doughnut data={data} options={options} />
      </Box>

    </Box>
  )
}
