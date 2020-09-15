import React from "react";
import {render} from "@testing-library/react";
import WeeklyForecast from "./WeeklyForecast";
// import { MemoryRouter } from "react-router-dom";
import { mocked } from "ts-jest/utils";
jest.mock("../helpers/apiCalls.tsx");

describe('Weekly Forecast', () => {
let weeksWeather: Array<{}>;
beforeEach(() => {
  weeksWeather = [
   {
    'dt': 10101001,
    // made up this number, have no brain energy to convert to date
    'temp': {
     'min': 290.25,
     'max': 301.9,
    },
    'humidity': 82,
    'clouds': 97,
    'uvi': 11,
    'wind_speed': 5.3,
    'wind_deg': 146,
    'weather': [{'icon': '03d'}]
   },
   {
    'dt': 10101002,
    // made up this number, have no brain energy to convert to date
    'temp': {
     'min': 291.25,
     'max': 302.9,
    },
    'humidity': 80,
    'clouds': 96,
    'uvi': 10,
    'wind_speed': 6.3,
    'wind_deg': 150,
    'weather': [{'icon': '01d'}]
   },
   {
    'dt': 10101003,
    // made up this number, have no brain energy to convert to date
    'temp': {
     'min': 292.25,
     'max': 303.9,
    },
    'humidity': 75,
    'clouds': 90,
    'uvi': 9,
    'wind_speed': 4.3,
    'wind_deg': 136,
    'weather': [{'icon': '03n'}]
   },
   {
    'dt': 10101004,
    // made up this number, have no brain energy to convert to date
    'temp': {
     'min': 293.25,
     'max': 304.9,
    },
    'humidity': 85,
    'clouds': 40,
    'uvi': 5,
    'wind_speed': 7.3,
    'wind_deg': 146,
    'weather': [{'icon': '03d'}]
   },
   {
    'dt': 10101005,
    // made up this number, have no brain energy to convert to date
    'temp': {
     'min': 294.25,
     'max': 305.9,
    },
    'humidity': 84,
    'clouds': 79,
    'uvi': 6,
    'wind_speed': 10.3,
    'wind_deg': 148,
    'weather': [{'icon': '03d'}]
   },
   {
    'dt': 10101006,
    // made up this number, have no brain energy to convert to date
    'temp': {
     'min': 295.25,
     'max': 306.9,
    },
    'humidity': 82,
    'clouds': 30,
    'uvi': 10,
    'wind_speed': 6.3,
    'wind_deg': 156,
    'weather': [{'icon': '02d'}]
   },
   {
    'dt': 10101007,
    // made up this number, have no brain energy to convert to date
    'temp': {
     'min': 296.25,
     'max': 307.9,
    },
    'humidity': 82,
    'clouds': 60,
    'uvi': 4,
    'wind_speed': 5.3,
    'wind_deg': 126,
    'weather': [{'icon': '04n'}]
   },
  ];
})

xit("should render a section of the weekly forecast", () => {

 const { getByRole, getByText, getByAltText, getAllByText } = render(
  <WeeklyForecast 
    weeklyWeather={weeksWeather}
  />
 );
 const weeklyHeader = getByRole("heading", { name: "WEEKLY FORECAST" });

 const humidity = getAllByText("Humidity");
 const cloudCover = getAllByText("Cloud Cover");
 const uvi = getAllByText("UVI");

//  const tuesday = getByText("Tues");
//  const tuesdayHighTemp = getByText("78");
//  const tuesdayIcon = getByAltText("Double Clouds icon");

//  const saturday = getByText("Sat");
//  const saturdayHighTemp = getByText("95");
//  const saturdayIcon = getByAltText("Clear Day icon");

 expect(weeklyHeader).toBeInTheDocument();
 expect(humidity).toHaveLength(7);
 expect(cloudCover).toHaveLength(7);
 expect(uvi).toHaveLength(7);

//  expect(tuesday).toBeInTheDocument();
//  expect(tuesdayHighTemp).toBeInTheDocument();
//  expect(tuesdayIcon).toBeInTheDocument();

//  expect(saturday).toBeInTheDocument();
//  expect(saturdayHighTemp).toBeInTheDocument();
//  expect(saturdayIcon).toBeInTheDocument();
});


})


