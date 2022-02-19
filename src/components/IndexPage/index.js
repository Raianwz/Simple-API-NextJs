import Head from 'next/head';
import icon from '../../assets/favicon.ico'
export default function IndexPage() {
    const favicon = icon.src
    return (
        <>
            <Head>
                <link rel="icon" href={`${favicon}`} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Dank API - ChatWZ</title>
            </Head>
        </>
    )
}