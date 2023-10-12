
import { Box, Button, Checkbox, Link, Stack, Typography } from '@mui/material'
import React,{useState} from 'react'
import image from '../assets/Screenshot 2023-10-11 232443.png'
import image2 from '../assets/Screenshot 2023-10-11 232532.png'
import { useNavigate } from 'react-router-dom'

export default function CreateAds() {
  const navigate = useNavigate();

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleChange1 = (e) => {
    setCheckbox1(e.target.checked);
  }

  const handleChange2 = (e) => {
    setCheckbox2(e.target.checked);  
  }

  const handleNext = () => {
    if (!checkbox1 && !checkbox2){
      console.log('false')
      alert('Please select any Ads')
    } else {
      navigate('/fillData')
    }
  }
  return (
    <div>
      <Box sx={{ boxShadow: 4, p: 4, m: 4,}}>
        <form className='p-4'>
          <h6 className='fw-bold text-muted'>Create Ads</h6>
          <div className="row mb-5">
            <div className="col">
              <div className="mb-3">
                <Box sx={{ boxShadow: 4, width: '70%', marginLeft: '30%'}}>
                  <div>
                    <Checkbox onChange={handleChange1}/>
                  </div>
                  <img src={image} alt='' style={{ marginLeft: '30%' }} />
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    height={70}
                    backgroundColor='grey.300'
                  >
                  <Typography sx={{fontSize: '15px', color:'grey'}}>Create</Typography>
                  <Typography sx={{fontSize:'10', fontWeight: 'bold'}}>Text Ad</Typography>
                  </Stack>
                </Box>
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <Box sx={{ boxShadow: 4, width: '70%', marginLeft: '5%', marginRight: '30%', }}>
                  <div>
                    <Checkbox onChange={handleChange2}/>
                  </div>
                  <img src={image2} alt='' style={{ marginLeft: '30%' }} />
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    height={70}
                    backgroundColor='grey.300'
                  >
                  <Typography sx={{fontSize: '15px', color:'grey'}}>Create</Typography>
                  <Typography sx={{fontSize:'10', fontWeight: 'bold'}}>Media Ad</Typography>
                  </Stack>

                </Box>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <Button variant="contained" size='medium' sx={{ m: 1 }} onClick={handleNext}>Next</Button>
          </div>
        </form>
      </Box>
    </div>

  )
}
