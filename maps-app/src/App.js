import React, { useState, useLayoutEffect } from "react";
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Selector from './components/Selector'
import Map from './components/Map'

am4core.useTheme(am4themes_animated);

function App(props) {

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
    <div class='container'>
      {/* <Selector /> */}
      <div>
          <DropdownButton
            style={dropdownStyle}
            id='dropdown-button'
            variant='secondary'
            menuVariant="dark"
            title='Change Map'
            className='mt-2'
          >
              <Dropdown.Item onClick={onClick}>World Happiness Index</Dropdown.Item>
              <Dropdown.Item onClick={onClick}>Water Per. Capita</Dropdown.Item>
              <Dropdown.Item onClick={onClick}>Cultural Realms</Dropdown.Item>
              {/* <Dropdown.Item onClick={() => selected("World Happiness Index")}>World Happiness Index</Dropdown.Item>
              <Dropdown.Item onClick={() => selected("Water Per. Capita")}>Water Per. Capita</Dropdown.Item>
              <Dropdown.Item onClick={() => selected("Cultural Realms")}>Cultural Realms</Dropdown.Item> */}
              <Dropdown.Divider />
              <Dropdown.Item active='false' disabled='true'>More coming soon!</Dropdown.Item>
          </DropdownButton>
      </div>
      { showResults ? <Map /> : null }
      {/* <Map /> */}
    </div>
  );
}

export default App;
