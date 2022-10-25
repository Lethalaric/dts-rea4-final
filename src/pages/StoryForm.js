import { useContext, useState } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { signingIn } from "../components/utils/firebase/signin";   

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

export default function StotyForn() {
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const stylingTextField = {
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
  };

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
            Submit Your Story
          </Typography>
          <Typography component="h1" variant="h5">
            We want to hear from you. If you have a positive, uplifting or inspiring story to share about yourself or someone you know, let us know using the form below. We’ll be in touch.
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  label="My name is"
                  autoFocus
                  sx={stylingTextField}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  autoComplete="family-name"
                  sx={stylingTextField}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  select
                  fullWidth
                  label="Location"
                  autoComplete="family-name"
                  sx={stylingTextField}
                >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Your phone number (optional)"
                  sx={stylingTextField}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label="Your story"
                  multiline
                  fullWidth
                  rows={4}
                  required
                  sx={stylingTextField}
                />
              </Grid>
            </Grid>
            <Box sx={{ alignItems: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{ 
                  mt: 3, mb: 2,
                  color: '#282C34', backgroundColor: 'bisque', borderColor: 'bisque'
                }}
                onClick={signIn}

              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
  );
}