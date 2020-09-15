import React from 'react'
import '@testing-library/react'
import { degToDirection, forecastDtDisplay, weatherDtDisplay, weatherIcon} from './conversions'

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

    
    expect(weatherIcon('wrongValue')).toBeUndefined()
    expect(weatherIcon(2355)).toBeUndefined()
  })

  it('should', () => {

  })

  it('should', () => {

  })
})