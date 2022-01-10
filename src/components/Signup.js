import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Alert from '@mui/material/Alert';
import './Signup.css'
import logo from '../Assets/logo.png'
import {Link} from "react-router-dom"
import { typography } from '@mui/system';
export default function Login() {
  
 
  return (
    <div className='signupwrapper'>
      <div className='signupcard'>
        
    <Card variant='outlined'>
     <div className='sapphireLogo'>
       <img src={logo} alt='Sapphire'></img>
     </div>
      
      <CardContent>
      <Typography textAlign='center' color= 'gray'>
          Signup to enjoy short videos
        </Typography>
      {true && <Alert severity="error">This is an error alert — check it out!</Alert>} 
      <div className='Inputs'>
        <TextField
          required
          id="standard-required"
          label="Email"
          
          variant="standard"
          fullWidth = {true}
          margin='dense'
        />
        <TextField
          required
          id="standard-required"
          label="Username"
          margin ='dense'
          variant="standard"
          fullWidth = {true}
        />
        
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          margin='dense'
          autoComplete="current-password"
          variant="standard"
          fullWidth = {true}
        />
         <Button size="small" fullWidth = {true} variant='outlined' margin='dense' startIcon={<CloudUploadIcon/>} component='label'>
           upload profile picture

         <input type='file' accept='image/*' hidden></input>
         </Button>
      </div>
         <Button color='primary' className='button' variant='contained' fullWidth={true} >
           Sign Up
         </Button>
        <Typography className='Type1'>
          By signing in you agree to our terms and conditions
        </Typography>
      </CardContent>
      <CardActions>
        
        
      </CardActions>
    </Card>
    <div className='Card2'>
    <Card variant='outlined'>
     
      <CardContent >
      <Typography textAlign='center' color= 'gray'>
         Having an account? <Link to="/login"> Log in</Link>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    </div>

  );
}
