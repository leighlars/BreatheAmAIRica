import React from "react";
import {render} from "@testing-library/react";
import WeeklyForecast from "./WeeklyForecast";
// import { MemoryRouter } from "react-router-dom";
import { mocked } from "ts-jest/utils";
jest.mock("../helpers/apiCalls.tsx");

describe('Weekly Forecast', () => {
let weeklyWeather: Array<{}>;
beforeEach(() => {
  weeklyWeather = [
   {
    dt: 10187001,
    temp: {
     min: 290.25,
     max: 301.9,
    },
    humidity: 82,
    clouds: 97,
    uvi: 11,
    wind_speed: 5.3,
    wind_deg: 146,
    weather: [{ icon: "04d" }],
   },
   {
    dt: 10101002,
    temp: {
     min: 291.25,
     max: 302.9,
    },
    humidity: 81,
    clouds: 96,
    uvi: 10,
    wind_speed: 6.3,
    wind_deg: 150,
    weather: [{ icon: "01d" }],
   },
   {
    dt: 10187402,
    temp: {
     min: 275.25,
     max: 285.9,
    },
    humidity: 81,
    clouds: 96,
    uvi: 10,
    wind_speed: 6.3,
    wind_deg: 150,
    weather: [{ icon: "02d" }],
   },
   {
    dt: 10273802,
    temp: {
     min: 251.25,
     max: 291.9,
    },
    humidity: 81,
    clouds: 96,
    uvi: 10,
    wind_speed: 6.3,
    wind_deg: 150,
    weather: [{ icon: "02n" }],
   },
  ];
})

it("should render a section of the weekly forecast with multiple days", () => {
  const { getByRole, getByText, getByAltText, getAllByText } = render(
    <WeeklyForecast 
      weeklyWeather={weeklyWeather}
    />
  )

  const humidity = getAllByText("Humidity");
  const cloudCover = getAllByText("Cloud Cover");
  const uvi = getAllByText("UVI");
  const uviValues = getAllByText('10')
  const cloudValues = getAllByText('96%')
  const windSpeeds = getAllByText('6.3 mph / SE')
  const humidityValues = getAllByText('81%')

  const monday = getByText("Mon 27th");
  const mondayLowTemp = getByText("64", {exact: false})
  const mondayHighTemp = getByText('85', {exact: false})
  const mondayIcon = getByAltText("Cloudy Day Icon")

  const tuesday = getByText('Tues 28th')
  const tuesdayLowTemp = getByText('35', {exact: false})  
  const tuesdayHighTemp = getByText("54", {exact: false })
  const tuesdayIcon = getByAltText("Clear Day Icon")

  const wednesday = getByText('Wed 29th')
  const wednesdayLowTemp = getByText("-8", { exact: false });
  const wednesdayHighTemp = getByText("65", { exact: false });
  const wednesdayIcon = getByAltText("Cloudy Night Icon");

  expect(cloudValues).toHaveLength(3)
  expect(humidityValues).toHaveLength(3)
  expect(windSpeeds).toHaveLength(3) 
  expect(uviValues).toHaveLength(3)
  expect(humidity).toHaveLength(3)
  expect(cloudCover).toHaveLength(3)
  expect(uvi).toHaveLength(3)

  expect(monday).toBeInTheDocument()
  expect(mondayLowTemp).toBeInTheDocument();
  expect(mondayHighTemp).toBeInTheDocument()
  expect(mondayIcon).toBeInTheDocument()

  expect(tuesday).toBeInTheDocument()   
  expect(tuesdayHighTemp).toBeInTheDocument()
  expect(tuesdayLowTemp).toBeInTheDocument()
  expect(tuesdayIcon).toBeInTheDocument()

  expect(wednesday).toBeInTheDocument(); 
  expect(wednesdayHighTemp).toBeInTheDocument()
  expect(wednesdayLowTemp).toBeInTheDocument()
  expect(wednesdayIcon).toBeInTheDocument()

});


})


