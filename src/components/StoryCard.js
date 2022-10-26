import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const lquote = (
  <Box
    component="span"
    sx={{ display: 'inline-block', transform: 'scale(1.5)' }}
  >
    &ldquo;
  </Box>
);
const rquote = (
  <Box
    component="span"
    sx={{ display: 'inline-block', transform: 'scale(1.5)' }}
  >
    &rdquo;
  </Box>
);

function StoryCard(props) {
    return (
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
        <Card fullWidth sx={{ backgroundColor : 'inherit', color: 'inherit'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {lquote} bdasf asfasfasfsa fsadf sadfsadfs adfsadfas dfasdf adffdsdf bdasf asfasfasfsa fsadf sadfsadfs adfsadfas dfasdf adffdsdf bdasf asfasfasfsa fsadf sadfsadfs adfsadfas dfasdf adffdsdf. {rquote}
                </Typography>
                <Typography variant="body2">
                    Anonym - Indonesia
                </Typography>
            </CardContent>
        </Card>
        </Box>
    );
}

export default StoryCard;