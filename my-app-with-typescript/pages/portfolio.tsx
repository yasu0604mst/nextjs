import Link from 'next/link'
import Layout from '../components/Layout'
import { Breadcrumb } from 'react-bootstrap';
import styles from '../styles/Home.module.scss'
import { Button,Container,Row,Col } from 'react-bootstrap';
import MyPortfolioPhoto from '../components/MyPortfolioPhoto'

const Portfolio = () => (
  <Layout title="Profile | 撮影サンプル">
    <Breadcrumb>
      <Breadcrumb.Item className={styles.breadcrumb_item} href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item className={styles.breadcrumb_item} active>撮影サンプル</Breadcrumb.Item>
    </Breadcrumb>
    <div className="m-3">
      <MyPortfolioPhoto></MyPortfolioPhoto>
    </div>
  </Layout>
)

export default Portfolio
