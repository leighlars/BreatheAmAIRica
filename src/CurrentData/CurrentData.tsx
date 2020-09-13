import { prependOnceListener } from 'process'
import React from 'react'

const CurrentData = (props: any) => {
  return (
  <p>{props.currentWeather.temp}</p>
  )
}

export default CurrentData