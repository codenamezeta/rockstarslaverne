import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='icon'
            type='image/png'
            href={require('../images/favicon.ico')}
          ></link>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

          <meta
            name='description'
            content='From playing your first chord to recording your debut album, Rockstars of Tomorrow - La Verne is the neighborhood music studio that brings out the rockstar in everyone.'
          />

          <meta
            name='keywords'
            content='Guitar, bass, drums, keyboard, piano, ukulele, band, rock, music, shred, lessons, classes, group, private, kids, near me, beginners, lessons near me, perform, online'
          />

          <meta name='author' content='_codenamezeta' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
