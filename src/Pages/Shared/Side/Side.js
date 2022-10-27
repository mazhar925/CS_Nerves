import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function Side() {
  const [courses, setCourse] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/courses')
    .then(res => res.json())
    .then(data => setCourse(data))
    .catch(error => console.error(error))
  },[])
  return (
    <>
      <ListGroup className='mt-5'>
        {
          courses.map(n => <ListGroup.Item  key={n.id}><Link className='text-decoration-none text-dark' to={`/details/${n.id}`}>{n.name}</Link></ListGroup.Item>)
        }
      </ListGroup>
    </>
  )
}
