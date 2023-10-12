import { Box, Button, Modal, Typography, Link } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const modalDisplayTime = 600; // 0.6 second

export default function FillData() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    display: 'flex',
    justifyContent: 'center',
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  useEffect(() => {
    let timeout;
    if (open) {
      timeout = setTimeout(() => {
        setOpen(false)
        navigate('/createAds')
      }, modalDisplayTime);
    }
    return () => clearTimeout(timeout);
  }, [open]);

  const handleClick = () => {
    setOpen(true)
  };

  return (
    <div>
      <Box sx={{ boxShadow: 4, p: 2, m: 4 }}>
        <form className='p-4'>
          <h6 className='fw-bold text-muted'>Create Text & Media</h6>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label for="heading1" className="form-label fw-bold text-muted">Heading 01</label>
                <input type="text" className="form-control form-control-md" id="heading1" placeholder='Add a heading that would make users intrested' />
              </div>
              <div className="mb-3">
                <label for="heading2" className="form-label fw-bold text-muted">Heading 02</label>
                <input type="text" className="form-control form-control-md" id="heading2" placeholder='Add a heading that would make users intrested' />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label for="description" className="form-label fw-bold text-muted">Description</label>
                <textarea className="form-control form-control-md" id="description" rows="4" placeholder='Add primary text to help users understand more about your products,services or offers'></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label for="image1" className="form-label fw-bold text-muted">Landscape Marketing Image(1:9:1)</label>
                <input type="text" className="form-control form-control-md" id="image1" placeholder='Add the URL of the Image you want to use for the ad' />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label for="image2" className="form-label fw-bold text-muted">Portrait Marketing Image(4:5)</label>
                <input type="text" className="form-control form-control-md" id="image2" placeholder='Add the URL of the Image you want to use for the ad' />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label for="image3" className="form-label fw-bold text-muted">Square Marketing Image(1:1)</label>
                <input type="text" className="form-control form-control-md" id="image3" placeholder='Add the URL of the Image you want to use for the ad' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label for="video1" className="form-label fw-bold text-muted">Video URL</label>
                <input type="text" className="form-control form-control-md" id="video1" placeholder='Add the URL of the Video you want to use for the ad' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label for="name1" className="form-label fw-bold text-muted">Business Name</label>
                <input type="text" className="form-control form-control-md" id="name1" placeholder='Add your business name' />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label for="label" className="form-label fw-bold text-muted">Button Label</label>
                <input type="text" className="form-control form-control-md" id="label" placeholder='Select a label that that best suits your ad' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label for="website1" className="form-label fw-bold text-muted">Website URL</label>
                <input type="text" className="form-control form-control-md" id="website1" placeholder='Add the URL of the landing page you want to redirect users to' />
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <Link href='/createAds' color='inherit'><Button variant="contained" size='small' sx={{ m: 1 }} color='inherit'>Back</Button></Link>
            <Button variant="contained" size='small' sx={{ m: 1 }} onClick={handleClick}>Submit</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="col" style={{ marginLeft: '40%' }}>

                  <CheckCircleIcon color='primary' style={{ marginLeft: '10%' }} />

                  <Typography>
                    Submitted
                  </Typography>
                </div>
              </Box>
            </Modal>

          </div>
        </form>
      </Box>
    </div>

  )
}
