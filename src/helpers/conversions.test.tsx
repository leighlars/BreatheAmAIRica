import React from 'react'
import '@testing-library/react'
import { aqIndex, degToDirection, forecastDtDisplay, weatherDtDisplay, weatherIcon, uvIndex, temp} from './conversions'

describe('conversions testing', () => {
  it('should check if degToDirection it functioning correctly', () => {

  expect(degToDirection(234)).toEqual('SW')
  expect(degToDirection(720)).toEqual('N')
  expect(degToDirection('hello')).toBeUndefined()
  })

  it('should check if forecastDtdisplay if functioning correctly', () => {


  expect(forecastDtDisplay(87656389)).toEqual(<span>{'Wed'} {'11th'}</span>)
  expect(forecastDtDisplay(7648968)).toEqual(<span>{'Mon'} {'30th'}</span>)

  })

  it('should check if weatherDtDisplay is functioning correctly', () => {

    expect(weatherDtDisplay(7231908740)).toEqual(<span>{'Sunday'} <br /> {'March'} {'3rd'} </span>)
    expect(weatherDtDisplay(723190)).toEqual(<span>{'Friday'} <br /> {'January'} {'9th'} </span>)

  })

  it('should check if weatherIcon is functioning correctly', () => {

    expect(weatherIcon('04d')).toEqual(<img alt="Double Clouds Icon" className="large-weather-icon" src={"04d.png"} />)
    expect(weatherIcon('wrongValue')).toBeUndefined()
    expect(weatherIcon(2355)).toBeUndefined()
  })

  it('should check if aqIndex is functioning correctly ', () => {

    expect(aqIndex(55, 'moderate')).toEqual(<p className="card-moderate"><b>{55}</b></p>)
    expect(aqIndex(99, 'danger')).toEqual(<p className="card-moderate"><b>{99}</b></p>)

  })

  it('should check if uvIndex is functioning correctly', () => {
    expect(uvIndex(33)).toEqual(<p className="card-extreme"><b>{'Hazardous'}</b></p>)
    expect(uvIndex('no data')).toEqual(<p className="card-extreme"><b>{'N/A'}</b></p>)
  })

  it('should check if temp is functioning correctly', () => {

    expect(temp(310)).toEqual(<h3 className="card-very-high current-temp">{98}&deg;</h3>)
  })
})