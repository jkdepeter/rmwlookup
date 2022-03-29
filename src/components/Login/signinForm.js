import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import {useState } from 'react';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebase.config"
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
//import FormLabel from '@mui/material/FormLabel';
//import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
    
        Soul 2 UR Feet
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#b73324',
      main: '#b73324',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b73324',
      main: '#b73324',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [checkEmail, setcheckEmail] = useState("")
  const [displayEmail, setdisplayEmail] = useState("none")
  const [HideLoad, setHideLoad] = useState("none")

  React.useEffect(()=>{
    const CheckDefaultMail= ()=>{
      if (checkEmail) {
       setdisplayEmail("block") 
      }else{
       setdisplayEmail("none") 
      }
   }
   CheckDefaultMail()

  })
  
  const handleSubmit = async (event) => {
    setHideLoad("block")
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email =  data.get('email')
    const password = data.get('password')

    setRegisterEmail(email)
    setRegisterPassword(password)

      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        )
        .catch(error => {
  
          switch (error.code) {
            case 'auth/email-already-in-use':
                   console.log(`Email address ${registerEmail} already in use.`);
                   return setcheckEmail(`Email address ${registerEmail} already in use`);
              break;
            case 'auth/invalid-email':
              console.log(`Email address ${registerEmail} is invalid.`);
              return setcheckEmail(`Email address ${registerEmail} is invalid.`);
              break;
            case 'auth/operation-not-allowed':
              console.log(`Error during sign up.`);
              return setcheckEmail(`Error during sign up`);
              break;
            case 'auth/network-request-failed)':
              console.log(`Network Error during sign up.`);
              return setcheckEmail(`Network error during sign up`);
              break;
            case 'auth/weak-password':
              console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
              return setcheckEmail(`Password is not strong enough. Add additional characters including special characters and numbers`);
              break;
            default:
              console.log(error.message);
              break;
          }
        })
        setHideLoad("none")
      } catch (error) {
        console.log(error.message);
      }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <CircularProgress
            sx={{
              display : HideLoad, 
            }} />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <Typography 
            component="p" 
            variant="p"  
            color= "red"
            sx={{display : displayEmail} } >
            {checkEmail} 
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* <Button
              fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
                onClick={SignInWithFireBase}
                >Sign in With Google
            </Button> */}
            <Grid container>
              <Grid item>
                <Link href="http://localhost:3000/login" variant="body2">
                  {" have an account ? login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}