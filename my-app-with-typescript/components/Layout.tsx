import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Dropdown, Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="google-site-verification" content="CZaB9ZLRrsMAUs7zUvQYqb2oELjKqNX5QZAtNdw-vjA" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6F912BMM71"></script>
    </Head>
    <MyHeader></MyHeader>
    <Container fluid className='' style={{margin:'60px 0 0 0'}}>
      <Row >
        <Col md={1} lg={1}> </Col>
        <Col md={10} lg={10} xs={12} className="">
        {children}
        </Col>
        <Col md={1} lg={1}> </Col>
      </Row>
    </Container>
    <MyFooter></MyFooter>
  </div>
)
export default Layout
