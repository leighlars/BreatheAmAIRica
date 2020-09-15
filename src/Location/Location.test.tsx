import React from "react";
import { render, screen} from "@testing-library/react";
import Location from './Location'
import { MemoryRouter } from "react-router-dom";

describe('Location', () => {

  let mockedCityResult:any
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
        {
        dt: 154646464,
        sunrise: 154646464,
        sunset: 154646464,
        temp: {
          day: 285,
          min: 285,
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
    const precipNum = screen.getByText("2.93", { exact: false });
    const windIcon = screen.getByAltText('Wind icon for wind speed direction')
    const wind = screen.getByText('Wind')
    const windSpeed = screen.getByText("0.0", { exact: false });
   
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
    const activIcon2 = screen.getByAltText("Healthy conditions for walking icon");
    const activIcon3 = screen.getByAltText("Healthy conditions for hiking icon");
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
    expect(activIcon2).toBeInTheDocument();
    expect(activIcon3).toBeInTheDocument();
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
  
  xit('should render a section of the weekly forecast', () => {
    
    const { getByRole, getByText, getByAltText, getAllByText} = render(
     <MemoryRouter>
      <Location
       query={"Las Vegas"}
       getMatchDetails={jest.fn()}
       getAllDetailsData={jest.fn()}
      />
     </MemoryRouter>
    );
    const weeklyHeader = getByRole("heading", { name: "WEEKLY FORECAST" })
    
    const humidity = getAllByText('Humidity')
    const cloudCover = getAllByText('Cloud Cover')
    const uvi = getAllByText('UVI')

    const tuesday = getByText('Tues')
    const tuesdayHighTemp = getByText('78')
    const tuesdayIcon = getByAltText('Double Clouds icon')
    

    const saturday = getByText("Sat");
    const saturdayHighTemp = getByText("95")
    const saturdayIcon = getByAltText("Clear Day icon")
   
    expect(weeklyHeader).toBeInTheDocument()
    expect(humidity).toHaveLength(6)
    expect(cloudCover).toHaveLength(6)
    expect(uvi).toHaveLength(6)

    expect(tuesday).toBeInTheDocument()
    expect(tuesdayHighTemp).toBeInTheDocument()
    expect(tuesdayIcon).toBeInTheDocument()
   
    expect(saturday).toBeInTheDocument()
    expect(saturdayHighTemp).toBeInTheDocument()
    expect(saturdayIcon).toBeInTheDocument()
  })

  // i think we can only get to a location via clicking a card
  // is there a way the page itself can fetch the data?
  // also, should we set a state in case someone refreshes the page?
  // late night thoughts, if too late in the project, we can 
  // add as extension
  

})