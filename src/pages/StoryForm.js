import {useEffect, useState} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {addStory, editStory} from "../stores/Features/story/storySlice";
import {useLocation, useParams} from "react-router-dom";

export default function StoryForm() {
  const storyData = useSelector(state => state.story)
  const params = useParams()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [story, setStory] = useState("")
  const [editedData, setEditedData] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id !== undefined) {
      const data = storyData.find(s => s.uuid === params.id)
      setEmail(data.email)
      setName(data.name)
      setLocation(data.location)
      setPhone(data.phone)
      setStory(data.story)
      setEditedData(data)
    }
  }, [])

  const onClick = () => {
    let uuid = uuidv4()
    const storyData = {
      uuid: uuid,
      email,
      name,
      location,
      phone,
      story
    }
    if (editedData !== null) {
      storyData.uuid = editedData.uuid
      dispatch(editStory(storyData))
    } else {
      dispatch(addStory(storyData))
    }

    alert("Story has been submitted. Please check story page")
    setEmail("")
    setName("")
    setLocation("")
    setPhone("")
    setStory("")
  }

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
                    </MenuItem><MenuItem value={"Afghanistan"}>Afghanistan</MenuItem>
                    <MenuItem value={"Albania"}>Albania</MenuItem>
                    <MenuItem value={"Algeria"}>Algeria</MenuItem>
                    <MenuItem value={"Andorra"}>Andorra</MenuItem>
                    <MenuItem value={"Angola"}>Angola</MenuItem>
                    <MenuItem value={"Antigua"}>Antigua</MenuItem>
                    <MenuItem value={"Argentina"}>Argentina</MenuItem>
                    <MenuItem value={"Armenia"}>Armenia</MenuItem>
                    <MenuItem value={"Australia"}>Australia</MenuItem>
                    <MenuItem value={"Austria"}>Austria</MenuItem>
                    <MenuItem value={"Azerbaijan"}>Azerbaijan</MenuItem>
                    <MenuItem value={"Bahamas"}>Bahamas</MenuItem>
                    <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
                    <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
                    <MenuItem value={"Barbados"}>Barbados</MenuItem>
                    <MenuItem value={"Belarus"}>Belarus</MenuItem>
                    <MenuItem value={"Belgium"}>Belgium</MenuItem>
                    <MenuItem value={"Belize"}>Belize</MenuItem>
                    <MenuItem value={"Benin"}>Benin</MenuItem>
                    <MenuItem value={"Bhutan"}>Bhutan</MenuItem>
                    <MenuItem value={"Bolivia"}>Bolivia</MenuItem>
                    <MenuItem value={"Bosnia"}>Bosnia</MenuItem>
                    <MenuItem value={"Botswana"}>Botswana</MenuItem>
                    <MenuItem value={"Brazil"}>Brazil</MenuItem>
                    <MenuItem value={"Brunei"}>Brunei</MenuItem>
                    <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
                    <MenuItem value={"Burkina"}>Burkina</MenuItem>
                    <MenuItem value={"Burundi"}>Burundi</MenuItem>
                    <MenuItem value={"Côte"}>Côte</MenuItem>
                    <MenuItem value={"Cabo"}>Cabo</MenuItem>
                    <MenuItem value={"Cambodia"}>Cambodia</MenuItem>
                    <MenuItem value={"Cameroon"}>Cameroon</MenuItem>
                    <MenuItem value={"Canada"}>Canada</MenuItem>
                    <MenuItem value={"Central"}>Central</MenuItem>
                    <MenuItem value={"Chad"}>Chad</MenuItem>
                    <MenuItem value={"Chile"}>Chile</MenuItem>
                    <MenuItem value={"China"}>China</MenuItem>
                    <MenuItem value={"Colombia"}>Colombia</MenuItem>
                    <MenuItem value={"Comoros"}>Comoros</MenuItem>
                    <MenuItem value={"Congo"}>Congo</MenuItem>
                    <MenuItem value={"Costa"}>Costa</MenuItem>
                    <MenuItem value={"Croatia"}>Croatia</MenuItem>
                    <MenuItem value={"Cuba"}>Cuba</MenuItem>
                    <MenuItem value={"Cyprus"}>Cyprus</MenuItem>
                    <MenuItem value={"Czechia"}>Czechia</MenuItem>
                    <MenuItem value={"Democratic"}>Democratic</MenuItem>
                    <MenuItem value={"Denmark"}>Denmark</MenuItem>
                    <MenuItem value={"Djibouti"}>Djibouti</MenuItem>
                    <MenuItem value={"Dominica"}>Dominica</MenuItem>
                    <MenuItem value={"Dominican"}>Dominican</MenuItem>
                    <MenuItem value={"Ecuador"}>Ecuador</MenuItem>
                    <MenuItem value={"Egypt"}>Egypt</MenuItem>
                    <MenuItem value={"El"}>El</MenuItem>
                    <MenuItem value={"Equatorial"}>Equatorial</MenuItem>
                    <MenuItem value={"Eritrea"}>Eritrea</MenuItem>
                    <MenuItem value={"Estonia"}>Estonia</MenuItem>
                    <MenuItem value={"Eswatini"}>Eswatini</MenuItem>
                    <MenuItem value={"Ethiopia"}>Ethiopia</MenuItem>
                    <MenuItem value={"Fiji"}>Fiji</MenuItem>
                    <MenuItem value={"Finland"}>Finland</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Gabon"}>Gabon</MenuItem>
                    <MenuItem value={"Gambia"}>Gambia</MenuItem>
                    <MenuItem value={"Georgia"}>Georgia</MenuItem>
                    <MenuItem value={"Germany"}>Germany</MenuItem>
                    <MenuItem value={"Ghana"}>Ghana</MenuItem>
                    <MenuItem value={"Greece"}>Greece</MenuItem>
                    <MenuItem value={"Grenada"}>Grenada</MenuItem>
                    <MenuItem value={"Guatemala"}>Guatemala</MenuItem>
                    <MenuItem value={"Guinea"}>Guinea</MenuItem>
                    <MenuItem value={"Guinea"}>Guinea</MenuItem>
                    <MenuItem value={"Guyana"}>Guyana</MenuItem>
                    <MenuItem value={"Haiti"}>Haiti</MenuItem>
                    <MenuItem value={"Holy"}>Holy</MenuItem>
                    <MenuItem value={"Honduras"}>Honduras</MenuItem>
                    <MenuItem value={"Hungary"}>Hungary</MenuItem>
                    <MenuItem value={"Iceland"}>Iceland</MenuItem>
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"Indonesia"}>Indonesia</MenuItem>
                    <MenuItem value={"Iran"}>Iran</MenuItem>
                    <MenuItem value={"Iraq"}>Iraq</MenuItem>
                    <MenuItem value={"Ireland"}>Ireland</MenuItem>
                    <MenuItem value={"Israel"}>Israel</MenuItem>
                    <MenuItem value={"Italy"}>Italy</MenuItem>
                    <MenuItem value={"Jamaica"}>Jamaica</MenuItem>
                    <MenuItem value={"Japan"}>Japan</MenuItem>
                    <MenuItem value={"Jordan"}>Jordan</MenuItem>
                    <MenuItem value={"Kazakhstan"}>Kazakhstan</MenuItem>
                    <MenuItem value={"Kenya"}>Kenya</MenuItem>
                    <MenuItem value={"Kiribati"}>Kiribati</MenuItem>
                    <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
                    <MenuItem value={"Kyrgyzstan"}>Kyrgyzstan</MenuItem>
                    <MenuItem value={"Laos"}>Laos</MenuItem>
                    <MenuItem value={"Latvia"}>Latvia</MenuItem>
                    <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
                    <MenuItem value={"Lesotho"}>Lesotho</MenuItem>
                    <MenuItem value={"Liberia"}>Liberia</MenuItem>
                    <MenuItem value={"Libya"}>Libya</MenuItem>
                    <MenuItem value={"Liechtenstein"}>Liechtenstein</MenuItem>
                    <MenuItem value={"Lithuania"}>Lithuania</MenuItem>
                    <MenuItem value={"Luxembourg"}>Luxembourg</MenuItem>
                    <MenuItem value={"Madagascar"}>Madagascar</MenuItem>
                    <MenuItem value={"Malawi"}>Malawi</MenuItem>
                    <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
                    <MenuItem value={"Maldives"}>Maldives</MenuItem>
                    <MenuItem value={"Mali"}>Mali</MenuItem>
                    <MenuItem value={"Malta"}>Malta</MenuItem>
                    <MenuItem value={"Marshall"}>Marshall</MenuItem>
                    <MenuItem value={"Mauritania"}>Mauritania</MenuItem>
                    <MenuItem value={"Mauritius"}>Mauritius</MenuItem>
                    <MenuItem value={"Mexico"}>Mexico</MenuItem>
                    <MenuItem value={"Micronesia"}>Micronesia</MenuItem>
                    <MenuItem value={"Moldova"}>Moldova</MenuItem>
                    <MenuItem value={"Monaco"}>Monaco</MenuItem>
                    <MenuItem value={"Mongolia"}>Mongolia</MenuItem>
                    <MenuItem value={"Montenegro"}>Montenegro</MenuItem>
                    <MenuItem value={"Morocco"}>Morocco</MenuItem>
                    <MenuItem value={"Mozambique"}>Mozambique</MenuItem>
                    <MenuItem value={"Myanmar"}>Myanmar</MenuItem>
                    <MenuItem value={"Namibia"}>Namibia</MenuItem>
                    <MenuItem value={"Nauru"}>Nauru</MenuItem>
                    <MenuItem value={"Nepal"}>Nepal</MenuItem>
                    <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
                    <MenuItem value={"New"}>New</MenuItem>
                    <MenuItem value={"Nicaragua"}>Nicaragua</MenuItem>
                    <MenuItem value={"Niger"}>Niger</MenuItem>
                    <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
                    <MenuItem value={"North"}>North</MenuItem>
                    <MenuItem value={"North"}>North</MenuItem>
                    <MenuItem value={"Norway"}>Norway</MenuItem>
                    <MenuItem value={"Oman"}>Oman</MenuItem>
                    <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                    <MenuItem value={"Palau"}>Palau</MenuItem>
                    <MenuItem value={"Palestine"}>Palestine</MenuItem>
                    <MenuItem value={"Panama"}>Panama</MenuItem>
                    <MenuItem value={"Papua"}>Papua</MenuItem>
                    <MenuItem value={"Paraguay"}>Paraguay</MenuItem>
                    <MenuItem value={"Peru"}>Peru</MenuItem>
                    <MenuItem value={"Philippines"}>Philippines</MenuItem>
                    <MenuItem value={"Poland"}>Poland</MenuItem>
                    <MenuItem value={"Portugal"}>Portugal</MenuItem>
                    <MenuItem value={"Qatar"}>Qatar</MenuItem>
                    <MenuItem value={"Romania"}>Romania</MenuItem>
                    <MenuItem value={"Russia"}>Russia</MenuItem>
                    <MenuItem value={"Rwanda"}>Rwanda</MenuItem>
                    <MenuItem value={"Saint"}>Saint</MenuItem>
                    <MenuItem value={"Saint"}>Saint</MenuItem>
                    <MenuItem value={"Saint"}>Saint</MenuItem>
                    <MenuItem value={"Samoa"}>Samoa</MenuItem>
                    <MenuItem value={"San"}>San</MenuItem>
                    <MenuItem value={"Sao"}>Sao</MenuItem>
                    <MenuItem value={"Saudi"}>Saudi</MenuItem>
                    <MenuItem value={"Senegal"}>Senegal</MenuItem>
                    <MenuItem value={"Serbia"}>Serbia</MenuItem>
                    <MenuItem value={"Seychelles"}>Seychelles</MenuItem>
                    <MenuItem value={"Sierra"}>Sierra</MenuItem>
                    <MenuItem value={"Singapore"}>Singapore</MenuItem>
                    <MenuItem value={"Slovakia"}>Slovakia</MenuItem>
                    <MenuItem value={"Slovenia"}>Slovenia</MenuItem>
                    <MenuItem value={"Solomon"}>Solomon</MenuItem>
                    <MenuItem value={"Somalia"}>Somalia</MenuItem>
                    <MenuItem value={"South"}>South</MenuItem>
                    <MenuItem value={"South"}>South</MenuItem>
                    <MenuItem value={"South"}>South</MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                    <MenuItem value={"Sri"}>Sri</MenuItem>
                    <MenuItem value={"Sudan"}>Sudan</MenuItem>
                    <MenuItem value={"Suriname"}>Suriname</MenuItem>
                    <MenuItem value={"Sweden"}>Sweden</MenuItem>
                    <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
                    <MenuItem value={"Syria"}>Syria</MenuItem>
                    <MenuItem value={"Tajikistan"}>Tajikistan</MenuItem>
                    <MenuItem value={"Tanzania"}>Tanzania</MenuItem>
                    <MenuItem value={"Thailand"}>Thailand</MenuItem>
                    <MenuItem value={"Timor"}>Timor</MenuItem>
                    <MenuItem value={"Togo"}>Togo</MenuItem>
                    <MenuItem value={"Tonga"}>Tonga</MenuItem>
                    <MenuItem value={"Trinidad"}>Trinidad</MenuItem>
                    <MenuItem value={"Tunisia"}>Tunisia</MenuItem>
                    <MenuItem value={"Turkey"}>Turkey</MenuItem>
                    <MenuItem value={"Turkmenistan"}>Turkmenistan</MenuItem>
                    <MenuItem value={"Tuvalu"}>Tuvalu</MenuItem>
                    <MenuItem value={"Uganda"}>Uganda</MenuItem>
                    <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
                    <MenuItem value={"United"}>United</MenuItem>
                    <MenuItem value={"United"}>United</MenuItem>
                    <MenuItem value={"United"}>United</MenuItem>
                    <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
                    <MenuItem value={"Uzbekistan"}>Uzbekistan</MenuItem>
                    <MenuItem value={"Vanuatu"}>Vanuatu</MenuItem>
                    <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
                    <MenuItem value={"Vietnam"}>Vietnam</MenuItem>
                    <MenuItem value={"Yemen"}>Yemen</MenuItem>
                    <MenuItem value={"Zambia"}>Zambia</MenuItem>
                    <MenuItem value={"Zimbabwe"}>Zimbabwe</MenuItem>
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
                onClick={() => onClick()}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
  );
}