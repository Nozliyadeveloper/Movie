import React from 'react';
import { Typography, Box, CardContent, CardMedia} from "@mui/material";
import {colors} from "../componen";
import {CheckCircle} from "@mui/icons-material";


function ChannelCard({video, marginTop}) {
    return (
        <Box sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '356px', md: '310px'},
                height: '326px',
                margin: 'auto',
                marginTop: marginTop,
                }}>
            <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{
                        borderRadius: '50%',
                        height: '180px',
                        width: '180px',
                        mb: 2,
                    }}
                />
                <Typography variant={'h6'}>
                    {video?.snippet?.title}{''}
                    <CheckCircle sx={{fontSize: '14px', color: colors.bgColor, ml: '5px'}}/>
                </Typography>
            </CardContent>
        </Box>

    );
}

export default ChannelCard;