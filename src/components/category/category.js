import React from 'react';
import {Stack} from "@mui/material";
import {categories, colors} from "../componen";

function Category({selectedCategory, selectCategory }) {
    return (
       <Stack direction={'row'} style={{overflowX:'scroll'}}>
           {categories.map(item =>
           <button type='button' className='category-btn' key={item.name} style={{
               backgroundColor: selectCategory === item.name ? colors.bgColor : 'white',
               color:selectCategory === item.name ? 'white' : colors.bgColor
           }}
               onClick={() => selectedCategory(item.name)}
           >
               <span>{item.icon}</span>
            <span style={{marginLeft: '10px'}}>{item.name}</span>
           </button>
           )}
       </Stack>
    );
}
export default Category;