import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Card, Dropdown, Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'

const MyProfile = () => (
  <Card className='w-100 my-2'>
    <Card.Header>Contact</Card.Header>
    <Card.Body>
      <Card.Text>
        <Link href="https://www.instagram.com/yasu0604mst/">www.instagram.com/yasu0604mst/</Link><br></br>
        撮影のご依頼はインスタのメッセージから宜しくお願いします。<br></br>
        もしくはタイムチケットにてご依頼が可能です<br></br>
        <Link href="https://www.timeticket.jp/hosts/yasu0604mst/">https://www.timeticket.jp/hosts/yasu0604mst/</Link><br></br>
        インスタでの直接のやり取りの方が、手数料を取られない分安く提供しています<br></br>
        久保田<br></br>
      </Card.Text>
    </Card.Body>
  </Card>
)
export default MyProfile
