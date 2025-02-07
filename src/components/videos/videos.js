import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import VideoCard from "../video-card/video-card";
import ChannelCard from "../channel-card/channel-card";
import CircularProgress from "@mui/material/CircularProgress";
const Videos = ({ videos = [] }) => {
    if (videos.length === 0) {
        return (
            <Stack
                width={'100%'}
                height={'50vh'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <CircularProgress color="primary" />
            </Stack>
        );
    }
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'start'}
            alignItems={'center'}
            gap={1}
        >
            {videos.map((item) => (
                <Box key={item.id.videoId}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard video={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
