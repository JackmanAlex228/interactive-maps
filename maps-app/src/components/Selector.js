import React, { useRef, useLayoutEffect } from "react";

import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Selector = (props) => {

    const selectorStyle = {
        position: 'absolute',
        top: '5%',
        right: '10%',
        border: '6px solid transparent',
        zIndex: 1,
        backgroundColor: 'lightGrey',
    };

    return (
        <div>
            <Button variant='primary'>Click Me!</Button> // IT WORKS!

            {/* <DropdownButton id="dropdown-basic-button" title="Change Map">
                <Dropdown.Item>World Happiness</Dropdown.Item>
                <Dropdown.Item>Water Per Capita</Dropdown.Item>
                <Dropdown.Item>Average Population</Dropdown.Item>
                <Dropdown.Item active='false' disabled='true'>More maps coming!</Dropdown.Item>
            </DropdownButton> */}
            
            {/* <select className='mapSelector' style={ selectorStyle } name='maps' id='maps'>
                <option>World Happiness</option>
                <option>Water Per Capita</option>
                <option>Average Population Density</option>
            </select> */}
            {/* <h1 style={ selectorStyle }>This is the selector</h1> */}
        </div>
    )
}

export default Selector