import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import Map from './components/Map';
import RealmsMap from './components/RealmsMap';
import WaterMap from './components/WaterMap';

function App() {
	
	const dropdownStyle = {
    	position: 'absolute',
    	top: '5%',
    	right: '10%',
    	zIndex: 1,
  	};

  	const linkStyle = {
    	color: 'black',
    	textDecoration: 'none'
  	};

  	return (
    	<div class='container'>
      		<Router>
        		<div>
          			<DropdownButton style={dropdownStyle} id='dropdown-button' variant='secondary' menuVariant="dark" title='Change Map' className='mt-2'>
            			<Dropdown.Item> <Link style={linkStyle} to='/'>World Happiness Index</Link></Dropdown.Item>
						<Dropdown.Item> <Link style={linkStyle} to='/water'>Water Per. Capita</Link></Dropdown.Item>
						<Dropdown.Item> <Link style={linkStyle} to='/realms'>Cultural Realms</Link></Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item active='false' disabled='true'>More coming soon!</Dropdown.Item>
					</DropdownButton>
				</div>

				<Switch>
					<Route exact path="/">
						<Map />
					</Route>
					<Route path="/water">
						<WaterMap />
					</Route>
					<Route path="/realms">
						<RealmsMap />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
