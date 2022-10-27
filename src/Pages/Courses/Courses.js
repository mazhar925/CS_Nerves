import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

export default function Side() {
  const [courses, setCourse] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/courses')
    .then(res => res.json())
    .then(data => setCourse(data))
    .catch(error => console.error(error))
  },[])
  return (
    <div className='barContainer'>
      <h3 className='mt-4'>Select Your Course</h3>
        {
          courses.map(n => <div className='bar'  key={n.id}><Link className='text-light fw-bold text-decoration-none' to={`/details/${n.id}`}><FaAngleRight></FaAngleRight>{n.name}</Link></div>)
        }
    </div>
  )
}
