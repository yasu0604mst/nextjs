import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
const qAndA = {
    '@context': "https://schema.org",
    '@type': "QAPage",
    'mainEntity': {
      '@type' : "Question",
      'name' : "服装に関して",
      'text': "どのような服装が良いでしょうか？",
      'answerCount': 1,
      'upvoteCount': 5,
      'acceptedAnswer': {
        '@type': "Answer",
        'text': "上半身は白などの明るい色の方が、顔が明るくなるのでお勧めです。上半身が黒の場合、黒が目立ってしまうので、できれば避けてもらいたいです。パンツやジャケットの黒は問題ありません。",
        'upvoteCount': 1,
        'url': ""
        },
      'suggestedAnswer': []
    }
}
const MyStructureData = () => (
  <script type="application/ld+json">
    {JSON.stringify(qAndA)}
  </script>
)
export default MyStructureData