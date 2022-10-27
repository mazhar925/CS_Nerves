import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CardCourse() {
    const [courses, setCourse] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <>
            {
                courses.map(n => {
                    return (
                        <Card style={{ width: '16rem' }} className='m-3'>
                            <Card.Img style={{height: '150px'}} variant="top" src={n.img} />
                            <Card.Body>
                                <Card.Title>{n.name}</Card.Title>
                                <Link key={n.id} to={`/details/${n.id}`}><Button variant="primary">Enroll</Button></Link>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}
