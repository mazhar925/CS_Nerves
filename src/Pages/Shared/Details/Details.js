import React from 'react'
import { Outlet } from 'react-router-dom'
import Side from '../Side/Side'
import { Container, Row, Col } from 'react-bootstrap'

export default function Details() {
  return (
    <Container>
      <Row>
        <Col lg='4'>
          <Side></Side>
        </Col>
        <Col lg='8'>
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  )
}