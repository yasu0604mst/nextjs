import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'
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
    </Head>
    <header>
      <Container>
        <Row>
          <Col md={1} lg={1}> </Col>
          <Col md={10} lg={10} xs={12} className="d-flex justify-content-center">
            <Row className="w-100 d-flex justify-content-center">
              <Col className={styles.header}><Link className="w-100" href="/">Home</Link></Col>
              <Col className={styles.header}><Link className="w-100" href="/about">About</Link></Col>
              <Col className={styles.header}><Link className="w-100" href="/users">UsersList</Link></Col>
              <Col className={styles.header}><Link className="w-100" href="/api/users">UsersAPIs</Link></Col>
            </Row> 
          </Col>
          <Col md={1} lg={1}> </Col>
        </Row>
      </Container>
    </header>
    <Container>
        <Row>
          <Col md={1} lg={1}> </Col>
          <Col md={10} lg={10} xs={12} className="">
          {children}
          </Col>
          <Col md={1} lg={1}> </Col>
        </Row>
      </Container>
    <footer>
      <Container>
        <Row>
          <Col md={1} lg={1}> </Col>
          <Col md={10} lg={10} xs={12} className="d-flex justify-content-center">
            <span>company copy light)</span>
          </Col>
          <Col md={1} lg={1}> </Col>
        </Row>
      </Container>
    </footer>
  </div>
)

export default Layout
