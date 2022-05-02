import Link from 'next/link'
import Layout from '../components/Layout'
import MyCarousel from '../components/MyCarousel'
import MyCard from '../components/MyCard'
import MyCardImage from '../components/MyCardImage'
import MyProfile from '../components/MyProfile'
import MyPortfolio from '../components/MyPortfolio'
import MyPortfolioPhoto from '../components/MyPortfolioPhoto'
import MyUserConductor from '../components/MyUserConductor'
import MyService from '../components/MyService'
import { Breadcrumb } from 'react-bootstrap';
import styles from '../styles/Home.module.scss'
import { Button,Container,Row,Col } from 'react-bootstrap';
import MyContact from '../components/MyContact'
import MyStructureData from '../components/MyStructureData'

const IndexPage = () => (
  <Layout title="Home | 写真撮影">
    <MyStructureData></MyStructureData>
    <div className='my-2'>
      <h1 className={styles.title}>福岡市｜プロフィール写真撮影いたします。<br></br>SNS用やマッチングアプリなど、アイコンにして映える写真をお撮りします</h1>
    </div>
    <MyCarousel></MyCarousel>
    <MyService></MyService>
    <MyContact></MyContact>
  </Layout>
)

export default IndexPage
