import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Col sm={2} md={2} lg={3}> </Col>
          <Col sm={8} md={8} lg={6} xs={12} className="d-flex justify-content-center">
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
              <a>About</a>
            </Link>{' '}
            |{' '}
            <Link href="/users">
              <a>Users List</a>
            </Link>{' '}
            | <a href="/api/users">Users API</a>
          </nav>
          </Col>
          <Col sm={2} md={2} lg={3}> </Col>
        </Row>
      </Container>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
