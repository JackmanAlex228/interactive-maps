import React, { useRef, useLayoutEffect } from "react";

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

const Map = (props) => {
  
    useLayoutEffect(() => {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Series for World map
        let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.exclude = ["AQ"];
        worldSeries.useGeodata = true;

        let polygonTemplate = worldSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = chart.colors.getIndex(0);
        polygonTemplate.nonScalingStroke = true;

        // Hover state
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");

        // Series for United States map
        let usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
        usaSeries.geodata = am4geodata_usaLow;

        let usPolygonTemplate = usaSeries.mapPolygons.template;
        usPolygonTemplate.tooltipText = "{name}";
        usPolygonTemplate.fill = chart.colors.getIndex(1);
        usPolygonTemplate.nonScalingStroke = true;

        return () => {
            chart.dispose();
        };

    }, []);

    return (
        <div id="chartdiv" style={{ width: "100vw", height: "100vh" }}></div>
    )
}

export default Map