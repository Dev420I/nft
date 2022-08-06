import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Id from "./nft/[Id]";

const Home: NextPage =  () => {
    return (
        <div className="">
            <Head>
                <title>NFT Drop</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Id/>
        </div>
    )
}

export default Home
