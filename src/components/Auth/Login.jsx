import React, { useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
       Aastha academy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ff7a00',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button_submit: {
      background:'#ff7a00',
      borderRadius: '15px',
      margin: theme.spacing(3, 0, 2),
  }
}));

export default function LogIn() {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(email,password)
      history.push("/dashboard/study-materials")
    } catch {
      setError("Failed to Login")
    }

    setLoading(false)
  }

  return (
        <div>

        <div className="bg-white font-family-karla h-screen">

    <div className="w-full flex flex-wrap">
        <div className="w-1/2 shadow-2xl">
            <img className="object-cover w-full h-screen hidden md:block" src="https://firebasestorage.googleapis.com/v0/b/aastha-academy-test.appspot.com/o/images%2FOrange%20Pink%20and%20Blue%20Animals%20Motivational%20Quote%20Education%20Portrait%20Poster.png?alt=media&token=c83ed2b5-3ce0-4c29-80bc-8368f2e8384d"/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">

           
          
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-36">
                 
                <a href="#"  className="text-center text-black font-bold text-xl p-4">
              
              AASTHA ACADEMY</a>
            
            <p style={{font: 'normal normal normal 20px/13px Roboto', color: '#4D4F5C', opacity: 0.5}} className="text-center text-3xl">Welcome back! Please login to your account.</p>
                 {error && <b style={{color: 'red'}}>{error}</b>}
                <form style={{justifyContent: 'center'}} className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col pt-4">
                        
                        <input required onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email*" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
   
                    <div className="flex flex-col pt-4">
                        
                        <input required onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password*" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
   
                   <button type='submit' style={{backgroundColor: '#126e82'}} className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 w-50 " >Log In</button>
                </form>
                <div className="text-center pt-12 pb-12">
                    <p>Don't remember password? <a href="/forgotPass" className="underline font-semibold">Reset Password.</a></p>
                </div>
            </div>

        </div>
    </div>

</div>
        </div>
  );
}
