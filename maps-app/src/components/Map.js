import React, { useState, useCallback, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4geodata_data_countries2 from "@amcharts/amcharts4-geodata/data/countries2";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import HappinessSeries from '../data/HappinessData'

am4core.useTheme(am4themes_animated);

const Map = () => {
  
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

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Series for World map
        let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.exclude = ["AQ"];
        worldSeries.useGeodata = true;
        
        // let data = [];
        // for(var id in am4geodata_data_countries2) {
        //     if (am4geodata_data_countries2.hasOwnProperty(id)) {
        //         let country = am4geodata_data_countries2[id];
        //         if (country.maps.length) {
        //             data.push({
        //                 id: id,
        //                 color: chart.colors.getIndex(continents[country.continent_code]),
        //                 map: country.maps[0]
        //             });
        //         }
        //     }
        // }
        // worldSeries.data = data;
                        
        let polygonTemplate = worldSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name} \n Value: {value} \n Rank: {rank}";
        polygonTemplate.fill = chart.colors.getIndex(0);
        polygonTemplate.nonScalingStroke = true;

        worldSeries.heatRules.push({
            "property": "fill",
            "target":
        worldSeries.mapPolygons.template,
            "min": am4core.color("#ffffff"),
            "max": am4core.color("#367B25")
        });

        worldSeries.data = HappinessSeries;

        // Somehow, this makes the worldSeries.data thing above work
        polygonTemplate.propertyFields.fill = "fill";

        // Hover state
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");

        // Texts
        // let labelsContainer = chart.createChild(am4core.Container);
        // labelsContainer.isMeasured = false;
        // labelsContainer.x = 80;
        // labelsContainer.y = 27;
        // labelsContainer.layout = "horizontal";
        // labelsContainer.zIndex = 10;

        // let title = labelsContainer.createChild(am4core.Label);
        // title.text = "World Happiness Index";
        // title.fill = am4core.color("cc0000");
        // title.fontSize = 20;
        // title.valign = "middle";
        // title.dy = 2;
        // title.marginLeft = 15;

        // Series for United States map
        // let usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
        // usaSeries.geodata = am4geodata_usaLow;

        // let usPolygonTemplate = usaSeries.mapPolygons.template;
        // usPolygonTemplate.tooltipText = "{name}";
        // usPolygonTemplate.fill = chart.colors.getIndex(1);
        // usPolygonTemplate.nonScalingStroke = true;

        return () => {
            chart.dispose();
        };

    }, []);

    return (
        <div id="chartdiv" style={{ width: "100vw", height: "100vh" }}>
            <h1>World Happiness Index</h1>
        </div>
    )
}

export default Map