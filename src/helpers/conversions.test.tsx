import React from 'react'
import '@testing-library/react'
import { degToDirection, forecastDtDisplay, weatherDtDisplay} from './conversions'

describe('conversions testing', () => {
  it('should check if degToDirection it functioning correctly', () => {
  expect(degToDirection(234)).toEqual('SW')
  expect(degToDirection(720)).toEqual('N')
  expect(degToDirection('hello')).toBeUndefined()
  

  })

  it('should check if forecastDtdisplay if functioning correctly', () => {

  expect(forecastDtDisplay(87656389))

  })

  it('should', () => {

  })

  it('should', () => {

  })

  it('should', () => {

  })

  it('should', () => {

  })
})