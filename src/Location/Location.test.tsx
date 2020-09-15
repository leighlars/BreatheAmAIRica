import React from "react";
import { render, getAllByRole, getAllByText, getByAltText} from "@testing-library/react";
import Location from './Location'
import { MemoryRouter } from "react-router-dom";
import { mocked } from "ts-jest/utils";
jest.mock('../helpers/apiCalls.tsx')

describe('Location', () => {
  let mockedCityResult = {}
  beforeEach(() => {
    mockedCityResult = {
     "currentWeather": {
       "dt": 1595243443,
       "temp": 293.28,
       "rain": {
         "1h": 2.93
       },
       "wind_speed": 4.6,
       "wind_deg": 310,
       "uvi": 3.7,
       "visibility": 23000,
       "weather": [ {
         "icon": '03d'
       }
       ]
     },
     "currentAir": {
      "AQI": 40,
      "Category": {
       "Name": "Low",
       "Number": 1,
      },
      "Discussion": 'No fire danger today'
     },
     'weeklyWeather': [
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
      'weather': [{'icon': '04d'}]
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
  ]
  };
  })


  it('should render a city and region in header', () => {
    mocked().mockImplementation(() => {
      Promise.resolve(mockedCityResult)
    })
    const {getByRole} = render(
    <MemoryRouter>
      <Location 
      query={'Las Vegas'}
      getMatchDetails={jest.fn()}
      getAllDetailsData={jest.fn()}
      />
    </MemoryRouter>)

    const cityName = getByRole('heading', {name: 'Seattle'})
    const region = getByRole('heading', {name: 'Washington, USA'})
    expect(cityName).toBeInTheDocument()
    expect(region).toBeInTheDocument()
  })

  it('should render information on current weather', () => {
    mocked().mockImplementation(() => {
     Promise.resolve(mockedCityResult);
    });
    const { getByRole, getByText, getByAltText } = render(
     <MemoryRouter>
      <Location
       query={"Las Vegas"}
       getMatchDetails={jest.fn()}
       getAllDetailsData={jest.fn()}
       />
     </MemoryRouter>
    )

    const currentHeader = getByRole('heading', {name: 'HAPPENING NOW'})
    const temperature = getByText('68')

    const precipIcon = getByAltText('Rain droplet icon for precipitation')
    const precip = getByText('Precipitation')
    const precipNum = getByText('2.93')
    // this number is millimeters in last hour, we need PoP from daily to get daily chance of rain
    // should we chunk this or get the daily weather for PoP?
    // we could also replace precip w 'feels like' (i think Erin asked for that)
  

    const windIcon = getByAltText('Wind icon for wind speed direction')
    const wind = getByText('Wind')
    const windSpeed = getByText('4.6 mph /')
    // wind speed is in meters/second!!!!! 

    // const date = getByText('')
    // too tired to solve date and dunno what Josh's date wound up looking like

    expect(currentHeader).toBeInTheDocument()
    // expect(date).toBeInTheDocument()
    expect(temperature).toBeInTheDocument()

    expect(precipIcon).toBeInTheDocument()
    expect(precip).toBeInTheDocument()

    expect(windIcon).toBeInTheDocument()
    expect(wind).toBeInTheDocument()
    expect(windSpeed).toBeInTheDocument() 
   
    
  })
  
  it('should render a section on current air quality and activities', () => {
    mocked().mockImplementation(() => {
     Promise.resolve(mockedCityResult);
    })
    const { getByRole, getByText, getAllByText, getByAltText} = render(
     <MemoryRouter>
      <Location
       query={"Las Vegas"}
       getMatchDetails={jest.fn()}
       getAllDetailsData={jest.fn()}
      />
     </MemoryRouter>
    )

    const aqHeader = getByRole("heading", { name: "AIR QUALITY" })
   
    const activIcon1 = getByAltText('Healthy conditions for park icon')
    const activIcon2 = getByAltText("Healthy conditions for walking icon");
    const activIcon3 = getByAltText("Healthy conditions for hiking icon");
    const activity = getByText('Great day to be outside!')
    
    const aqiIcon = getByAltText('lungs icon for air quality')
    const aqi = getByText('AQI')  
    const aqiNum = getByText('40')
    
    const uviIcon = getByAltText('sun icon for UV index')
    const uvi = getByText('UVI')
    const uviNum = getByText('4')

    const visibIcon = getByAltText('eye icon for visibility')
    const visibility = getByText('Visibility')
    const visibilityNum = getByText('4.4')
    // lolzzz visibility is given to us in meters, approx is to divide by 1609
    // i changed it in Location

    const smoke = getByText('Smoke')
    const smokeIcon = getByAltText('smoke icon for air quality')
    const allergies = getByText("Allergies")
    const sneezeIcon = getByAltText('sneeze icon for allergies')
    const pollen = getByText("Pollen") 
    const beeIcon = getByAltText('bee icon for pollen')  
    const newFeatures = getAllByText('Coming Soon!')

    const notesIcon = getByAltText('checklist icon for additional notes')
    const notes = getByText('Additional Notes')
    const discussion = getByText('No fire danger today')
     
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