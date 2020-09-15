import { Props } from "react";

  export interface DetailsProps {
    query: any
    detailsData: any
    matchDetails: any
    currentWeather: {
      dt: number
      sunrise?: number
      sunset?: number
      feels_like?: number
      temp: number
      dew_point?: number
      clouds?: number
      humidity?: number
      wind_speed: number
      wind_deg: number
      uvi: number
      visibility: number
      rain?: {"1h": number}
      weather: [
        {
          description?: string
          main?: string
          icon: string
        }
      ];
    };

    currentAir: {
      AQI: number
      Discussion: string
      Category: {
        Number?: number
        Name: string
      }
    }

    weeklyWeather: [
      {
        dt: number;
        sunrise?: number;
        sunset?: number;
        temp?: {
          day?: number;
          min?: number;
          max?: number;
          night?: number;
          eve?: number;
          morn?: number;
        };
        feels_like?: {
          day?: number;
          night?: number;
          eve?: number;
          morn?: number;
        };
        pressure?: number;
        humidity: number;
        dew_point?: number;
        wind_speed?: number;
        wind_deg?: number;
        weather?: [
          {
            id?: number;
            main?: string;
            description?: string;
            icon?: string;
          }
        ];
        clouds?: number;
        pop?: number;
        rain?: number;
        snow?: number;
        uvi?: number;
      }
    ];
  }
    
    
  
    
  

  export interface WeeklyProps {
    weeklyWeather: [
      {
        dt: number;
        sunrise?: number;
        sunset?: number;
        temp?: {
          day?: number;
          min: number;
          max: number;
          night?: number;
          eve?: number;
          morn?: number;
        };
        feels_like?: {
          day?: number;
          night?: number;
          eve?: number;
          morn?: number;
        };
        pressure?: number;
        humidity: number;
        dew_point?: number;
        wind_speed: number;
        wind_deg: number;
        weather?: [
          {
            id?: number;
            main?: string;
            description?: string;
            icon: string;
          }
        ];
        clouds: number;
        pop?: number;
        rain?: number;
        snow?: number;
        uvi: number;
      }
    ];
  }