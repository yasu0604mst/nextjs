import Link from 'next/link'
import Layout from '../components/Layout'
import { Breadcrumb } from 'react-bootstrap';
import styles from '../styles/Home.module.scss'
import { Button,Container,Row,Col } from 'react-bootstrap';
import MyProfile from '../components/MyProfile'

const Profile = () => (
  <Layout title="Profile | 写真撮影">
    <Breadcrumb>
      <Breadcrumb.Item className={styles.breadcrumb_item} href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item className={styles.breadcrumb_item} active>Profile</Breadcrumb.Item>
    </Breadcrumb>
    <div className="m-3">
      <MyProfile></MyProfile>
    </div>
  </Layout>
)

export default Profile
