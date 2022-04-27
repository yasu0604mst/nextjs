import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Card, Dropdown, Button,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Common.module.scss'


const MyService = () => (
  <Card className="my-2">
    <Card.Header>SNSやマッチングアプリ用のプロフィール写真撮影致します。</Card.Header>
    <Card.Body>
      <Card.Title>詳細内容</Card.Title>
      <Card.Text>
マッチングアプリやSNS用のプロフィール写真をお撮りします。<br />
<br />
撮影料は、1時間の撮影で、1万円（税込）です。。<br />
60分で150～180枚撮った中の写真を厳選して40枚程度お渡しします。<br />
いろいろなパターンを撮る為、移動に時間がかかります。<br />
なので撮影時間は60分程度は欲しいと思います。<br />
<br />
私は広告素材としての写真をメインに撮っています。<br />
プロ用の機材は持ち合わせていますので、<br />
プライベート写真も満足できる写真を提供することが出来ます。<br />
<br />
サンプルの写真は、こちらがモデル代を払って撮った写真で、<br />
広告素材として販売している写真の一部です。<br />
素材としては女性を撮ることが多いのですが、<br />
TimeTicketでは、ほとんど男性からの依頼なので、<br />
男性の方もお気軽にご依頼ください。<br />
<br />
福岡市内であれば、交通費は頂きませんが、<br />
市外は別途交通費を頂きたいと思います。<br />
こちらはで場所を提供することは出来ないので、<br />
街中、公園、神社などの屋外で撮影致します。<br />
※店内撮影は、許可が必要なので、お断りしています。<br />
<br />
■ チケットに含まれるもの<br />
・カメラマン側の交通費(福岡市内の場合は頂きません)<br />
・撮影(1時間程度)・ポーズの提案など<br />
・撮影後の写真の色味の調整(2～3時間かけています)<br />
　※写真をSNSのアイコンに載せたときに、写真が映えるように、明るい色味に調整致します。<br />
・Google Photoでの写真共有<br />
<br />
■ オプション<br />
・ほくろ除去・しわ除去・美肌処理<br />
・福岡市内以外の撮影<br />
・USB・CDでの受け渡し<br />
<br />
■ 実績<br />
・フォトストックで写真を販売しています。<br />
・大手サイトで採用された実績も多数あります。<br />
(ベネッセ、日本経済新聞、docomo、ECCなど)<br />
<br />
機材：<br />
Nikon D810 or Nikon Z6Ⅱ<br />
レンズ<br />
・Sigma F1.4 50mm(単焦点レンズ)<br />
・Tamron F2.8 90mm(単焦点レンズ)<br />
・Nikkor F4 24-120mm(ズームレンズ)<br />
<br />
■ こんな人におすすめ<br />
・マッチングアプリで使えるプロフィール写真を撮ってほしい<br />
・SNSのプロフィール撮影<br />
・着物・浴衣姿の写真を撮ってほしいなど<br />
<br />
■撮影前<br />
希望日時、希望の撮影場所、撮影の目的、撮影対象人数お伝えください。<br />
※希望の撮影場所がない場合は、目的に応じて提案させて頂きます。<br />
※午前中や14時くらいまでの方が光の方角が良いので、いい写真になると思います。なので出来る限り早い時間をご指定ください。<br />
<br />
■ 当日の流れとスケジュール<br />
1. 待ち合わせ<br />
2. 撮影内容、撮影場所の確認<br />
3. 撮影開始<br />
　※場所を移動しながら撮影します。<br />
　 ※写真を確認しながらポーズなど提案させて頂きます。<br />
4. 撮影終了<br />
5. 撮影後日、3日以内にデータをお渡しします。<br />
※写真の露出(明るさ)の調整などを行うために時間を頂きたいと思います。<br />
　※ほくろ除去、しわの修正などのレタッチは<br />
　オプション購入とさせて頂きます。<br />
　　(ご希望の場合は、オプションをご購入ください)<br />
※写真はJPEGデータとしてお渡しします。<br />
※写真はGoogle フォトにて共有します。<br />
※CDでの受け渡し、印刷が必要の場合はオプションをご購入ください。<br />
<br />
■服装に関して<br />
・明るい服装の方が写真映えするので、上半身は出来る限り明るい色の服装でお願いします。<br />
　※白系や薄い色など。黒は写真が暗くなるので、出来る限り避けて頂きたいです。ジャケットやパンツは暗めの色でも問題ないです。<br />
・撮影中に衣装替えしてもOKです。<br />
・女性であればバックなどあった方が映えると思います。<br />
・趣味をアピールするための物と一緒に撮ることも可能です。<br />
(バイク・楽器・カメラなど)<br />
<br />
■その他<br />
※ワクチン3回接種済みです。<br />
      </Card.Text>
    </Card.Body>
  </Card>
)
export default MyService
