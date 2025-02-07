import React from 'react';
import {Stack, Box} from '@mui/material';
import {colors, logo} from "../componen";
import SearchBar from "../searchBar/searchBar";
import {Link} from "react-router";

const Navbar = () => {

    return (
        <Stack direction={"row"}
               justifyContent={'space-between'}
               alignItems={'center'}
               p={'2'}
               sx={{position: "sticky", top: 0, zIndex: 999, backgroundColor: colors.bgColor, p: 1, color: 'white'}}>

            <Link to={'/'}>
                <img style={{borderRadius: '50%', objectFit: 'cover', cursor: 'pointer'}} src={logo} alt="logo" width={60} height={60} />
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    );
};
export default Navbar;