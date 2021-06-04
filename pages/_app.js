import '../assets/css/bootstrap.min.css'
import '../assets/css/animate.min.css'
import '../assets/css/fontawesome.min.css'
import '../assets/css/style.scss'
import '../assets/css/responsive.scss'

import { Preloader, Placeholder } from 'react-preloading-screen'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'
import Loader from '../components/Loader'
import GoTop from '../components/GoTop'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://rockstarslaverne.com/',
            site_name: 'Rockstars Of Tomorrow – La Verne',
          }}
        />

        <Preloader>
          <Component {...pageProps} />
          <GoTop scrollStepInPx='50' delayInMs='16.66' />
          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </>
    )
  }
}
