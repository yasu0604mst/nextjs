import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'
import MyCard from './MyCard'


const MyPortfolioPhoto = () => (
  <div className='d-flex justify-content-center'>
    <MyCard title="はすの花" url="/images/001.jpg" description='詳細説明1'></MyCard>
    <MyCard title="紅葉" url="/images/002.jpg" description='詳細説明2'></MyCard>
    <MyCard title="紅葉2" url="/images/003.jpg" description='詳細説明3'></MyCard>
  </div>

)
export default MyPortfolioPhoto
