import Link from 'next/link'
import Layout from '../components/Layout'
import MyCarousel from '../components/MyCarousel'
import { Breadcrumb } from 'react-bootstrap';
import styles from '../styles/Home.module.scss'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
  <Breadcrumb>
    <Breadcrumb.Item className={styles.breadcrumb_item} href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item className={styles.breadcrumb_item} href="#">Library</Breadcrumb.Item>
    <Breadcrumb.Item className={styles.breadcrumb_item} active>Data</Breadcrumb.Item>
  </Breadcrumb>
    <MyCarousel></MyCarousel>
    <h1>Main Content 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
