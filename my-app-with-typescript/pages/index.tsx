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

const IndexPage = () => (
  <Layout title="Home | 写真撮影">
    <MyCarousel></MyCarousel>
    <MyService></MyService>
    <MyContact></MyContact>
  </Layout>
)

export default IndexPage
