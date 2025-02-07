import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress, Stack } from '@mui/material';
import Main from '../main/main';
import Channel from '../channel/channel';
import Navbar from '../navbar/Navbar';
import VideoDetail from "../video/video-detail";
import Search from "../search/search";

const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const loadingHandler = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(loadingHandler);
    }, [loading]);
    return (
        <Box>
            <Navbar />
            {loading ? (
                <Stack width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
                    <CircularProgress color="primary" />
                </Stack>
            ) : (
                <Routes>
                    <Route path={'/'} element={<Main />} />
                    <Route path={'/channel/:id'} element={<Channel />} />
                    <Route path={'/video/:id'} element={<VideoDetail />} />
                    <Route path={'/search/:id'} element={<Search />} />
                </Routes>
            )}
        </Box>
    );
};

export default App;
