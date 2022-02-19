import Head from 'next/head';
import icon from '../../assets/favicon.ico'
import { useEffect } from "react";
export default function IndexPage() {
    const favicon = icon.src
    useEffect(() => {
        document.documentElement.lang = "pt-BR";
        console.log('mudou a linguagem')
    });
    return (
        <>
            <Head>
                <link rel="icon" href={`${favicon}`} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>ChatWZ APIs</title>
            </Head>
        </>
    )
}