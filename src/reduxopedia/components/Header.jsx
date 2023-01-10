import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/header.css'

const Header = () => {
  return <section className='header-wrapper'>
  <Container>
      <Row>
          <Col lg='12' >
            <h1>ReduxOPedia</h1>
          </Col>
      </Row>
  </Container>
</section>
}

export default Header