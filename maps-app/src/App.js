import React, { useRef, useLayoutEffect } from "react";
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Components
import Selector from './components/Selector'
import Map from './components/Map'

am4core.useTheme(am4themes_animated);

function App(props) {

  return (
    <div class='container'>
      <Selector />
      <Map />
    </div>
  );
}

export default App;
