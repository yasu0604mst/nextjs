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
        <Row className='row-cols-3'>
        <img src="/images/002.jpg" alt='詳細説明2' width="400" height="300"></img>
        <img src="/images/003.jpg" alt='詳細説明3' width="400" height="300"></img>
        <img src="/images/001.jpg" alt='詳細説明1' width="400" height="300"></img>
        <img src="/images/002.jpg" alt='詳細説明2' width="400" height="300"></img>
        <img src="/images/003.jpg" alt='詳細説明3' width="400" height="300"></img>
        <img src="/images/001.jpg" alt='詳細説明1' width="400" height="300"></img>
        <img src="/images/002.jpg" alt='詳細説明2' width="400" height="300"></img>
        <img src="/images/003.jpg" alt='詳細説明3' width="400" height="300"></img>
        <img src="/images/001.jpg" alt='詳細説明1' width="400" height="300"></img>
        <img src="/images/002.jpg" alt='詳細説明2' width="400" height="300"></img>
        <img src="/images/003.jpg" alt='詳細説明3' width="400" height="300"></img>
        </Row>
      </Container>
    </Card.Body>
  </Card>
)
export default MyPortfolioPhoto
