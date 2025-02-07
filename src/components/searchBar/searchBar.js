import React, { useState } from 'react';
import { colors } from "../componen";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router";

function SearchBar() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const searchHandler = e => {
        e.preventDefault();
        if (value) {
            navigate(`/search/${value}`);
            setValue('')
        }
    };

    return (
        <Paper
            component={'form'}
            onSubmit={searchHandler}
            sx={{
                border: '1px solid darkblue',
                pl: 2,
                boxShadow: 'none',
                mr: 5,
            }}
        >
            <input
                type='text'
                placeholder='Search...'
                className='search-bar'
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <IconButton type='submit' sx={{ p: '10px', color: colors.bgColor }}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
