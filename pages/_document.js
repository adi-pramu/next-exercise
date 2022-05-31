import { Html, Head, Main, NextScript } from "next/document";

export default function Document(){
    return (
        <Html>
            <Head>
                <title>Icube Next JS Training</title>
                <meta name="description" content="Training ICUBE PWA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}