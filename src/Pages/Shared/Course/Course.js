import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Course() {
  const data = useLoaderData()
  return (
    <div className='mt-5 mb-5'>
      <div>
        <img className='detailsImg' src={data.img} alt="image" />
        <h3>{data.title}</h3>
        <p>{data.details}</p>
        <div>
          <p>What will learn ?</p>
          <ul>{data.learn}</ul>
        </div>
        <div>
          <p>Time: {data.time}</p>
          <p>Difficulty: {data.difficulty}</p>
          <p>Rating: {data.rating}</p>
          <p>Total Enroll: {data.total_enroll}</p>
          <p>Price: {data.price}$</p>
        </div>
        <div>
          <h4>Instrustor</h4>
          <img className='instructorImg' src={data.instructor.img} alt='img' />
          <p>{data.instructor.name}</p>
          <p>{data.instructor.profession}</p>
          <p>{data.instructor.published_date}</p>
        </div>
      </div>
      <Link to='/purchase'><Button variant="outline-success">Enroll Now</Button></Link>
    </div>
  )
}
