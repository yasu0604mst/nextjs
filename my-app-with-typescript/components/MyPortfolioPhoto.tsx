import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Card, Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'
import MyCard from './MyCard'

const MyPortfolioPhoto = () => (
  <Card className='my-2'>
    <Card.Header>撮影サンプル</Card.Header>
    <Card.Body>
      <Container>
        <Row className='row-cols-2 my-2'>
        <img src="/images/001.jpg" alt='撮影サンプル1' className="my-1"></img>
        <img src="/images/002.jpg" alt='撮影サンプル2' className="my-1"></img>
        <img src="/images/003.jpg" alt='撮影サンプル3' className="my-1"></img>
        <img src="/images/004.jpg" alt='撮影サンプル4' className="my-1"></img>
        <img src="/images/014.jpg" alt='撮影サンプル14'  className="my-1"></img>
        <img src="/images/013.jpg" alt='撮影サンプル13'  className="my-1"></img>
        <img src="/images/015.jpg" alt='撮影サンプル15'  className="my-1"></img>
        <img src="/images/016.jpg" alt='撮影サンプル16'  className="my-1"></img>
        </Row>
      </Container>
    </Card.Body>
  </Card>
)
export default MyPortfolioPhoto
