import { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

export default function StotyForn() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [story, setStory] = useState("")

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

  return (
      <Container maxWidth='xl'>
        <Box
          sx={{
            pt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
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
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  sx={stylingTextField}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  autoComplete="family-name"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
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
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={story} 
                  onChange={(e) => setStory(e.target.value)}
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
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
  );
}