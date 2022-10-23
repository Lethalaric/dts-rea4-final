import { useContext, useState } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { signingIn } from "../components/utils/firebase/signin";   

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SigninPage() {
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async () => {
    // navigate('/')
    const signedIn = await signingIn(email, password);

    if (!signedIn.message) {
      setUser(signedIn.accessToken)
    } else {
      console.log("error signIn", signedIn.message)
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
            Login
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
            {/*<Link href="#" variant="body2" sx={{ color: 'white'}}>
              Forgot password?
            </Link>*/}
            <Box sx={{ alignItems: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{ 
                  mt: 3, mb: 2,
                  color: '#282C34', backgroundColor: 'bisque', borderColor: 'bisque'
                }}
                onClick={signIn}

              >
                Login
              </Button>
            </Box>
            <Link href="/signup" variant="body" sx={{ color: 'white'}}>
              Don’t have an account yet?
            </Link>
            <Box sx={{ alignItems: 'flex-start' }}>
              <Button
                variant="outlined"
                sx={{ 
                  mt: 3, mb: 2,
                  color: 'white', borderColor: 'bisque'
                }}
              >
                Create Account
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
  );
}