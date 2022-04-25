import Link from 'next/link'
import Layout from '../components/Layout'
import MyContact from '../components/MyContact'


import { Breadcrumb } from 'react-bootstrap';
import styles from '../styles/Home.module.scss'
import { Button,Container,Row,Col } from 'react-bootstrap';

const Contact = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Breadcrumb>
      <Breadcrumb.Item className={styles.breadcrumb_item} href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item className={styles.breadcrumb_item} active>Contact</Breadcrumb.Item>
    </Breadcrumb>
    <div className="m-3">
    <MyContact></MyContact>
    </div>
  </Layout>
)
export default Contact
