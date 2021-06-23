import { Modal, Backdrop, Fade, Card, Typography, Grid, withWidth } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import help1 from '../../assets/images/help1.png';
import help2 from '../../assets/images/help2.png';
import help3 from '../../assets/images/help3.png';
import help4 from '../../assets/images/help4.png';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60vw',
    },
    padding: theme.spacing(2),
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
      height: '20vh',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60vw',
      height: '33.75vw',
    },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    margin: theme.spacing(0, 2),
  },
}));



const HelpModal = ({ open, handleClose, width }: any) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (value: number) => {
    console.log(value)
    setValue(value);
  };
  

  return (
    <Modal
      aria-labelledby="help-modal"
      aria-describedby="The modal to display the usage steps of the HCPairing."
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Card className={classes.paper}>
          {
            (width === 'lg' || width === 'xl' || width === 'md')
            ? (
              <Grid container justify="center" alignItems="center">
                <Typography variant="h6"> Step {value+1} </Typography>
                <Carousel value={value} onChange={handleChange} plugins={['arrows']}>
                  <div className={classes.image} style={{ 'backgroundImage': `url('${help1}')` }}></div>
                  <div className={classes.image} style={{ 'backgroundImage': `url('${help2}')` }}></div>
                  <div className={classes.image} style={{ 'backgroundImage': `url('${help3}')` }}></div>
                  <div className={classes.image} style={{ 'backgroundImage': `url('${help4}')` }}></div>
                </Carousel>
              </Grid>
            )
            : (
              <p>
                ❶ Enter the symptom in the search box. <br/>
                ❷ Select your symptom from the list of symptoms returned by the system. <br/>
                ❸ Choose multiple symptoms In line with your physical condition and submit. <br/>
                ❹ Search the healthcare providers according to the result of the system analysis.
              </p>
            )
          }
        </Card>
      </Fade>
    </Modal>
  )
}

export default withWidth()(HelpModal);
