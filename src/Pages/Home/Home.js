import React from 'react'
import Banner from './Components/Banner/Banner'
import CardCourse from './Components/CardCourse/CardCourse'

export default function Home() {
  const style = {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px'
  }
  const cardContainer = {
    width: '90vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  }
  const cardStyle={
    marginTop: '15px',
    display: 'flex',
    flexWrap: 'wrap'
  }
  return (
    <div>
      <div style={style}>
      <Banner></Banner>
      </div>
      <div style={cardContainer}>
      <div style={cardStyle}>
      <CardCourse></CardCourse>
      </div>
      </div>
    </div>
  )
}
