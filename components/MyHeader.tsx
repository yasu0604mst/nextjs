import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Dropdown, Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'


const MyHeader = () => (
  <header className='sticky-top'>
    <Container fluid className='p-0'>
      <Row>
        <Col className="w-100">
          <div className="w-100 d-flex justify-content-start">
            <div className={styles.header}><Link href="/">Home</Link></div>
            <div className={styles.header}><Link href="/portfolio">撮影サンプル</Link></div>
            <div className={styles.header}><Link href="/profile">プロフィール</Link></div>
            <div className={styles.header}><Link href="/contact">Contact</Link></div>
            <div></div>
          </div> 
        </Col>
      </Row>
    </Container>
  </header>
)
const MyHeaderSave = () => (
<header>
  <Container>
    <Row>
      <Col md={1} lg={1}> </Col>
      <Col md={10} lg={10} xs={12} className="d-flex justify-content-center">
        <Row className="w-100 d-flex justify-content-center">
          <Col className={styles.header}><Link href="/">Home</Link></Col>
          <Col className={styles.header}><Link href="/about">About</Link></Col>
          <Col className={styles.header}>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className={styles.header}><Link href="/users">UsersList</Link></Col>
          <Col className={styles.header}><Link href="/api/users">UsersAPIs</Link></Col>
        </Row> 
      </Col>
      <Col md={1} lg={1}> </Col>
    </Row>
  </Container>
</header>
)
export default MyHeader
