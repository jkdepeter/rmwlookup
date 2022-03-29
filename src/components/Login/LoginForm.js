import * as React from 'react';
// import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {useState} from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config"
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PasswordOutlined } from '@mui/icons-material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.soul2urfeet.com.pg/">
        soul2urfeet
      </Link>{' '}
      {new Date().getFullYear()} main
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


export default function LoginForm() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [HideLoad, setHideLoad] = useState("none")
  //const [user, setUser] = useState({});

 
  const handleSubmit = async (event) => {
    setHideLoad("block")
    event.preventDefault();


    try{
      const data = new FormData(event.currentTarget);
      const email =  data.get('email')
      const password = data.get('password')

      if (email){
        setLoginEmail(email)
        setLoginPassword(password)
        await signInWithEmailAndPassword(auth,loginEmail,loginPassword)

      }else{
        console.log("nothing returned")

      }
     
    } catch (error) {
      console.log(error.message);
    }

     
  }

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  
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
          <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
            <LockOutlinedIcon />
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            > 
             Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/signin" variant="body2">
                  {"Don't have an account ? Sign Up"}
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