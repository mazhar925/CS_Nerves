import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate()
  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-5 mb-5'>
        <h1 className='fw-bold fs-1'>Error</h1>
        <Button className='mt-5' variant="outline-dark" onClick={()=>{navigate('/')}}>Back To Home</Button>
    </div>
  )
}
