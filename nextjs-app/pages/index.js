import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          <Link href="https://nextjs.org/learn">next.js</Link>
        </p>
        <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
      </section>
    </Layout>
  )
}