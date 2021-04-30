import { NextSeo } from 'next-seo'

const SeoSection = ({ title, desc, url }) => (
  <NextSeo
    title={title}
    description={desc}
    canonical='https://www.canonical.ie/'
    openGraph={{
      url: url,
      title: title,
      description: desc,
    }}
  />
)

export default SeoSection
