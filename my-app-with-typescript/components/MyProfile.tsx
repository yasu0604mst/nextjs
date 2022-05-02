import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Card, Dropdown, Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'
import MyCardImage from './MyCardImage';
import Image from '../components/Image'

const MyProfile = () => (
<>
  <Card className='my-2'>
    <Card.Header>PR</Card.Header>
    <div className='d-flex justify-content-center'>
      <div className='d-flex flex-column align-item-center m-3'>
        <div className='d-flex justify-content-center'>
          <Link href="#">
            <Image src="/images/profile.webp" alt='aaaaa' width="100" height="100"  ></Image>
          </Link>
        </div>
        <Card.Text>Yasuhiro Kubota</Card.Text>
      </div>
    </div>


    <Card.Body>
      <Card.Text>
          私は広告素材としての写真をメインに撮っています。<br />
          プロ用の機材は持ち合わせていますので、<br />
          プライベート写真も満足できる写真を提供することが出来ます。<br />
          <br />
          サンプルの写真は、こちらがモデル代を払って撮った写真で、<br />
          広告素材として販売している写真の一部です。<br />
          素材としては女性を撮ることが多いのですが、<br />
          プロフィール写真の依頼は、ほとんどが男性からの依頼なので、<br />
          男性の方もお気軽にご依頼ください。<br />
          <br />
          ■ 実績<br />
          <Link href="https://creator.pixta.jp/@yasu2000">PIXTA</Link><br />
          ・フォトストックで写真を販売しています。<br />
          ・大手サイトで採用された実績も多数あります。<br />
          (ベネッセ、日本経済新聞、docomo、ECCなど)<br />
          <br />
          <Link href="https://www.timeticket.jp/hosts/yasu0604mst/">タイムチケット</Link><br />
          タイムチケットではプロフィール撮影を行なっています。<br />

          <br />
          機材：<br />
          Nikon D810 or Nikon Z6Ⅱ<br />
          レンズ<br />
          ・Sigma F1.4 50mm(単焦点レンズ)<br />
          ・Tamron F2.8 90mm(単焦点レンズ)<br />
          ・Nikkor F4 24-120mm(ズームレンズ)<br />
          <br />
          ■その他<br />
          ※ワクチン3回接種済みです。<br />
      </Card.Text>
    </Card.Body>
  </Card>

</>
)
export default MyProfile
