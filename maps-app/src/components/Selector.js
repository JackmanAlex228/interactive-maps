import React, { useState, useCallback } from "react";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function Selector() {

    const [showResults, setShowResults] = useState(false);

    const onClick = () => setShowResults(true)

    const selected = (s) => {
        alert("You selected " + s);
    }

    const dropdownStyle = {
        position: 'absolute',
        top: '5%',
        right: '10%',
        zIndex: 1,
    };

    return (
        <div>
            <DropdownButton
              style={dropdownStyle}
              id='dropdown-button'
              variant='secondary'
              menuVariant="dark"
              title='Change Map'
              className='mt-2'
            >
                <Dropdown.Item onClick={() => selected("World Happiness Index")}>World Happiness Index</Dropdown.Item>
                <Dropdown.Item onClick={() => selected("Water Per. Capita")}>Water Per. Capita</Dropdown.Item>
                <Dropdown.Item onClick={() => selected("Cultural Realms")}>Cultural Realms</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item active='false' disabled='true'>More coming soon!</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Selector