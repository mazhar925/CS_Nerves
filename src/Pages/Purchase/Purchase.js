import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Purchase() {
  const navigate = useNavigate()
  return (
    <div className='m-5'>
      <div className='m-5'>
        <h1 className='text-center m-5'>Congratulations....!</h1>
        <Button className='mt-5' variant="outline-dark" onClick={()=>{navigate('/')}}>Back To Home</Button>
      </div>
    </div>
  )
}
