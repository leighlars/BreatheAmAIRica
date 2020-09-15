import React from "react";
import { render, screen} from "@testing-library/react";
import Location from './Location'
import { MemoryRouter } from "react-router-dom";

describe('Location', () => {

  let mockedCityResult: any
  beforeEach(() => {
    mockedCityResult = {
      currentWeather: {
        dt: 1595243443,
        temp: 293.28,
        rain: {
          "1h": 2.93,
        },
        wind_speed: 4.6,
        wind_deg: 310,
        uvi: 3.7,
        visibility: 23000,
        weather: [
          {
            icon: "03d",
          },
        ],
      },
      currentAir: {
        AQI: 40,
        Category: {
          Name: "Low",
          Number: 1,
        },
        Discussion: "No fire danger today",
      },
      weeklyWeather: [
        {},
        {
        dt: 1852444400,
        sunrise: 0,
        sunset: 0,
        temp: {
          day: 285,
          min: 222,
          max: 285,
          night: 285,
          eve: 285,
          morn: 285,
        },
        feels_like: {
          day: 285,
          night: 285,
          eve: 285,
          morn: 285,
        },
        pressure: 145,
        humidity: 85,
        dew_point: 246,
        wind_speed: 0.0,
        wind_deg: 320,
        weather: [
          {
            id: 22,
            main: 'terrible',
            description: 'Its pretty nice out',
            icon: '14n',
          },
        ],
        clouds: 11,
        pop: 4,
        rain: 4,
        snow: 4,
        uvi: 5,
        }
      ],
    };
  })

  it('should render a city and region in header', () => {
    render(
      <MemoryRouter>
        <Location
          query={"Las Vegas"}
          detailsData={mockedCityResult}
          matchDetails={[45, 65.12, "Las Vegas", "NV"]}
        />
      </MemoryRouter>
    )
    
    const cityName = screen.getByRole('heading', {name: /las vegas/i})
    const regionName = screen.getByRole('heading', {name: /nv/i})

    expect(cityName).toBeInTheDocument()
    expect(regionName).toBeInTheDocument()
  })

  it('should render information on current weather', () => {
    render(
      <MemoryRouter>
        <Location
          query={"Las Vegas"}
          detailsData={mockedCityResult}
          matchDetails={[45, 65.12, "Las Vegas", "NV"]}
        />
      </MemoryRouter>
    );

    const currentHeader = screen.getByRole('heading', {name: 'HAPPENING NOW'})
    const temperature = screen.getByText('68', {exact: false})

    const precipIcon = screen.getByAltText('Rain droplet icon for precipitation')
    const precip = screen.getByText('Precipitation')
    const precipNum = screen.getByText("2.93", { exact: false })

    const windIcon = screen.getByAltText('Wind icon for wind speed direction')
    const wind = screen.getByText('Wind')
    const windSpeed = screen.getByText("0.0", { exact: false })
   
    expect(currentHeader).toBeInTheDocument()
    expect(temperature).toBeInTheDocument()

    expect(precipNum).toBeInTheDocument()
    expect(precipIcon).toBeInTheDocument()
    expect(precip).toBeInTheDocument()

    expect(windIcon).toBeInTheDocument()
    expect(wind).toBeInTheDocument()
    expect(windSpeed).toBeInTheDocument() 
  })
  
  it('should render a section on current air quality and activities', () => {
    render(
      <MemoryRouter>
        <Location
          query={"Las Vegas"}
          detailsData={mockedCityResult}
          matchDetails={[45, 65.12, "Las Vegas", "NV"]}
        />
      </MemoryRouter>
    );

    const aqHeader = screen.getByRole("heading", { name: "AIR QUALITY" })
   
    const activIcon1 = screen.getByAltText('Healthy conditions for park icon')
    const activIcon2 = screen.getByAltText("Healthy conditions for walking icon")
    const activIcon3 = screen.getByAltText("Healthy conditions for hiking icon")
    const activity = screen.getByText('Great day to be outside!')

    const aqiIcon = screen.getByAltText('lungs icon for air quality')
    const aqi = screen.getByText('AQI')  
    const aqiNum = screen.getByText('40')
    const uviIcon = screen.getByAltText('sun icon for UV index')
    const uvi = screen.getByText(/uv index/i)
    const uviNum = screen.getByText('4')
    const visibIcon = screen.getByAltText('eye icon for visibility')
    const visibility = screen.getByText('Visibility')
    const visibilityNum = screen.getByText('14.3', {exact: false})

    const smoke = screen.getByText('Smoke')
    const smokeIcon = screen.getByAltText('smoke icon for air quality')
    const allergies = screen.getByText("Allergies")
    const sneezeIcon = screen.getByAltText('sneeze icon for allergies')
    const pollen = screen.getByText("Pollen") 
    const beeIcon = screen.getByAltText('bee icon for pollen')  
    const newFeatures = screen.getAllByText('Coming Soon!')
    const notesIcon = screen.getByAltText('checklist icon for additional notes')

    const notes = screen.getByText('Additional Notes')
    const discussion = screen.getByText('No fire danger today')
     
    expect(aqHeader).toBeInTheDocument()
    expect(activIcon1).toBeInTheDocument()
    expect(activIcon2).toBeInTheDocument()
    expect(activIcon3).toBeInTheDocument()
    expect(activity).toBeInTheDocument()

    expect(uviIcon).toBeInTheDocument()
    expect(uvi).toBeInTheDocument()
    expect(uviNum).toBeInTheDocument()
    expect(aqiIcon).toBeInTheDocument()
    expect(aqi).toBeInTheDocument()
    expect(aqiNum).toBeInTheDocument()
    expect(visibIcon).toBeInTheDocument()
    expect(visibility).toBeInTheDocument()
    expect(visibilityNum).toBeInTheDocument()

    expect(smoke).toBeInTheDocument()
    expect(smokeIcon).toBeInTheDocument()
    expect(allergies).toBeInTheDocument()
    expect(sneezeIcon).toBeInTheDocument()
    expect(pollen)
    expect(beeIcon).toBeInTheDocument()
    expect(newFeatures).toHaveLength(3)
    expect(notesIcon).toBeInTheDocument()

    expect(notes).toBeInTheDocument()
    expect(discussion).toBeInTheDocument()
  })
  
  it('should render a section of the weekly forecast', () => {
    render(
      <MemoryRouter>
        <Location
          query={"Las Vegas"}
          detailsData={mockedCityResult}
          matchDetails={[45, 65.12, "Las Vegas", "NV"]}
        />
      </MemoryRouter>
    );

    const weeklyHeader = screen.getByRole("heading", { name: "WEEKLY FORECAST" })
    
    const humidity = screen.getByText('Humidity')
    const cloudCover = screen.getByText('Cloud Cover')
    const uvi = screen.getByText('UVI')

    const wednesday = screen.getByText('Wed', {exact: false})
    const wednesdayHighTemp = screen.getByText('53', {exact: false})
    
    expect(weeklyHeader).toBeInTheDocument()

    expect(humidity).toBeInTheDocument()
    expect(cloudCover).toBeInTheDocument()
    expect(uvi).toBeInTheDocument()

    expect(wednesday).toBeInTheDocument()
    expect(wednesdayHighTemp).toBeInTheDocument()
  })
})