import React, { useState, useCallback, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4geodata_data_countries2 from "@amcharts/amcharts4-geodata/data/countries2";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import testSeries from '../data/country-data'

am4core.useTheme(am4themes_animated);

const WaterMap = () => {

    useLayoutEffect(() => {

        am4core.useTheme(am4themes_animated);

        let continents = {
            "AF": 0,
            "AN": 1,
            "AS": 2,
            "EU": 3,
            "NA": 4,
            "OC": 5,
            "SA": 6
        }

        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // set projection
        chart.projection = new am4maps.projections.Miller();

        // Series for World map
        let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.exclude = ["AQ"];
        worldSeries.useGeodata = true;

        let polygonTemplate = worldSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name} \n Value: {value} \n Rank: {rank}";
        polygonTemplate.fill = chart.colors.getIndex(0);
        polygonTemplate.nonScalingStroke = true;

        worldSeries.heatRules.push({
            "property": "fill",
            "target":
        worldSeries.mapPolygons.template,
            "min": am4core.color("#ffffff"),
            "max": am4core.color("#2b36cc")
        });

        worldSeries.data = testSeries;

        // Somehow, this makes the worldSeries.data thing above work
        polygonTemplate.propertyFields.fill = "fill";

        // Hover state
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#2b36cc");

        return () => {
            chart.dispose();
        };

    }, []);

    return (
        <div id="chartdiv" style={{ width: "100vw", height: "100vh" }}>
            <h2>Water Per Capita</h2>
        </div>
    )
}

export default WaterMap