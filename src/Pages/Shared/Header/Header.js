import React, { useState, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaSun, FaRegMoon } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [theme, setTheme] = useState('day')
  const { user, logOut } = useContext(AuthContext)
  const [proName, setProName] = useState('none')
  const navigate = useNavigate()

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      navigate('/')
    })
    .catch(error => console.error(error))
  }

  const themeChange = ()=>{
    if(theme === 'day'){
      setTheme('night')
    }
    else{
      setTheme('day')
    }
  }

  const toolTip = ()=>{
    setProName('block')
    setTimeout(()=>{
      setProName('none')
    }, 1000)
  }

    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className='text-light fw-bold text-decoration-none' to='/'>CS Nerves</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='text-light text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link><Link className='text-light text-decoration-none' to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link className='text-light text-decoration-none' to='/blog'>Blogs</Link></Nav.Link>
          </Nav>
          <Nav>
        {
          user? <><p className='me-2 text-dark bg-light fw-bold p-1 rounded' style={{display: proName}}>{user.displayName}</p>
          <img className='proImg' onMouseOver={toolTip} src={user.photoURL
          } alt={user.displayName} /><Nav.Link><Link className='text-light text-decoration-none fw-normal badge bg-primary text-wrap fs-6' to='/login' onClick={handleLogOut}>Log Out</Link></Nav.Link></> 
          :
           <><Nav.Link><Link className='text-light text-decoration-none fw-normal badge bg-primary text-wrap fs-6' to='/login'>Log In</Link></Nav.Link>
          </>
        }
        <button style={{padding: '10px', borderRadius: '10px'}} onClick={themeChange}>
        {
          theme  === 'day'? <FaSun></FaSun> : <FaRegMoon></FaRegMoon> 
        }</button>
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
