  export interface DetailsProps {
  locationData: {
    locality?: string,
    region?: string,
    country_code?: string,
  },
  currentWeather: {
    dt?: number,
    sunrise?: number,
    sunset?: number,
    feels_like?: number,
    temp?: number,
    dew_point?: number,
    clouds?: number,
    humidity?: number,
    wind_speed?: number,
    wind_deg?: number,
    uvi?: number,
    visibility?: number,
    weather?: [
        {
        description?: string,
        main?: string,
        icon?: string,
        },
      ],
  },
  weeklyWeather:{
    daily?:[
      {
      dt?: number,
      sunrise?: number,
      sunset?: number,
      temp?: {
          day?: number,
          min?: number,
          max?: number,
          night?: number,
          eve?: number,
          morn?: number,
      },
      feels_like?: {
          day?: number,
          night?: number,
          eve?: number,
          morn?: number
      },
      pressure?: number,
      humidity: number,
      dew_point?: number,
      wind_speed?: number,
      wind_deg?: number,
      weather?: [
        {
            id?: number,
            main?: string,
            description?: string,
            icon?: string
        }
      ],
      clouds?: number,
      pop?: number,
      rain?: number,
      snow?: number,
      uvi?: number
      }
    ],
  },
  currentAir: {
    AQI?: number,
  }
}