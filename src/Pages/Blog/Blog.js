import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Blog() {
  return (
    <div className='d-flex justify-content-center mt-5 mb-5'>
      <Accordion style={{width: '500px'}}>
      <h3>Blogs</h3>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is cors?</Accordion.Header>
        <Accordion.Body>
        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        <p>Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.</p>
        <p>The list below some common authentication methods used to secure modern systems.
          <ul>
        <li>Password-based authentication,</li>
        <li>Multi-factor authentication,</li>
        <li>Certificate-based authentication,</li>
        <li>Biometric authentication,</li>
        <li>Token-based authentication</li></ul></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}
