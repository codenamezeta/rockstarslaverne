import { NextSeo } from 'next-seo';

export default ({title, desc, url}) => (

    <NextSeo
        title={title}
        description={desc}
        canonical="https://www.canonical.ie/"
        openGraph={{
            url: url,
            title: title,
            description: desc
        }}
    />

);