import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {DeleteOutline, DeleteOutlined, EditOutlined} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteStory} from "../stores/Features/story/storySlice";
import {Link} from "react-router-dom";

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

function StoryCard({story}) {
    const dispatch = useDispatch();
    const onClickDelete = () => {
        dispatch(deleteStory(story))
    }

    return (
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: "white",
            marginBottom: "1rem",
            borderColor: "red.500",
            borderRadius: "16px",
            minWidth: "150px",
            minHeight: "150px",
          }}
        >
        <Card sx={{
            backgroundColor : 'inherit',
            color: 'inherit',
            borderColor: "red.500",
            borderRadius: "16px",
            minWidth: "150px",
            minHeight: "150px",
        }}>
            <CardContent>
                <Link to={`/storyform/${story.uuid}`}>
                    <Button sx={{float: "right"}}>
                        <EditOutlined/>
                    </Button>
                </Link>
                <Button sx={{float: "right"}} onClick={onClickDelete}>
                    <DeleteOutlined/>
                </Button>
                <Typography variant="h5" component="div" sx={{color: "black"}} flexWrap={true}>
                    {lquote} {story.story} {rquote}
                </Typography>
                <Typography variant="body2" sx={{color: "black"}}>
                    {story.name} - {story.location}
                </Typography>
            </CardContent>
        </Card>
        </Box>
    );
}

export default StoryCard;