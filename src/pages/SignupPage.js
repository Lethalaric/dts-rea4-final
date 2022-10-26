import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../components/Provider/AuthProvider";
import { signingUp } from "../components/utils/firebase/signup";   

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SigninPage() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async () => {
    const response = await signingUp(email, password);
    console.log("response signUp", response);

    if (!response.message) {
      setUser(response.accessToken);
    } else {
      navigate('/signin');  // already sign up
      console.log("error signUp", response.message)
    }
  };


  return (
      <Container maxWidth='xl'>
        <Box
          sx={{
            pt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Typography component="h1" variant="h3">
            Create New Account
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoFocus
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  color: 'white'
                },
                "& .MuiFormLabel-root": {
                  color: 'white'
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: 'white'
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "white"
                  }
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "white"
                  }
                },
                backgroundColor: '#282C34', 
              }}
            />
            <TextField
              margin="normal"
              label="Password"
              required
              fullWidth
              type="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  color: 'white'
                },
                "& .MuiFormLabel-root": {
                  color: 'white'
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: 'white'
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "white"
                  }
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "white"
                  }
                },
                backgroundColor: '#282C34', 
              }}
            />
            <Box sx={{ alignItems: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{ 
                  mt: 3, mb: 2,
                  color: '#282C34', backgroundColor: 'bisque', borderColor: 'bisque'
                }}
                onClick={signUp}

              >
                Create new account
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
  );
}