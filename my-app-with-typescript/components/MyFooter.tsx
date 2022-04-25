import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Dropdown, Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'


const MyFooter = () => (
  <footer>
    <Container>
      <Row>
        <Col md={1} lg={1}> </Col>
        <Col md={10} lg={10} xs={12} className="d-flex justify-content-center w-100">
            <div className={styles.footer}> <span>Copyright © 2022 Yasu All rights reserved.</span> </div>
        </Col>
        <Col md={1} lg={1}> </Col>
      </Row>
    </Container>
  </footer>

)
export default MyFooter
