import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MyMenu(props) {

    const [anchorEl,
        setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        console.log('menu props', props)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (name) => {
        props.getCollection(name)
        setAnchorEl(null);
    };
    return (             
        <div>
            <Button variant="outlined" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Choose Category
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => handleClose('Just Once')}>Just Once</MenuItem>
                <MenuItem onClick={() => handleClose('Daily')}>Daily</MenuItem>
                <MenuItem onClick={() => handleClose('Weekly')}>Weekly</MenuItem>
                <MenuItem onClick={() => handleClose('Monthly')}>Monthly</MenuItem>
                <MenuItem onClick={() => handleClose('All')}>All</MenuItem>


            </Menu>
        </div>
    );
}