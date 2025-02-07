import React, {useEffect, useState} from 'react';
import {Stack, Box, Container, Typography} from "@mui/material";
import Category from "../category/category";
import {colors} from "../componen";
import {ApiService} from "../api.services";
import Videos from "../videos/videos";

const Main = () => {
    const [selectCategory, setselectCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const selectedCategory = category => setselectCategory(category)
    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideos(data.items))
    }, [selectCategory])
    return (
        <Stack>
            <Category selectedCategory={selectedCategory} selectCategory={selectCategory}/>
            <Box p='2' sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' style={{fontWeight: 'bold'}}>
                        {selectCategory} <span style={{color: colors.bgColor}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    );
};
export default Main;
















