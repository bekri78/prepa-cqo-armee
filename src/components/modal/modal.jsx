import * as React from 'react';
import question from '../../utils/img/answer.svg'
import SimpleAccordion from '../accordion/Accordion'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './modale.css'
// import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  border: '2px solid #000',
  boxShadow: 24,
  background: 'linear-gradient(135deg,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0))',
  backdropFilter: 'blur(50px)', 
  p: 4,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column'
};

export default function TransitionsModal(props) {
  const handleClose = () => props.closeModal(false)

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style} >
          <img src={question} style={{width:'100%'}} className='imgQuestion' alt="questions"/>
          <SimpleAccordion/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}