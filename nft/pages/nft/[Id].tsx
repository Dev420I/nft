import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";



function NFTDropPage () {

    const connectWithMetamask = useMetamask();
    const address = useAddress()
    const disconnect = useDisconnect()


    return <div className='flex h-screen flex-col lg:grid
    lg:grid-cols-10'>
    {/*left*/}
    <div className=' bg-gradient-to-br from-cyan-400
    to-rose-300 lg:col-span-4'>
        <div className='flex flex-col items-center justify-center py-2
        lg:min-h-screen'>
            <div className='rounded-xl bg-gradient-to-br
            from-yellow-400 to-purple-600 p-2'>
                <img className='w-44 rounded-xl
            object-cover lg:h-96 lg:w-72'
                     src="https://links.papareact.com/8sg" alt=""/>
            </div>


            <div className='space-y-2 p-5 text-center'>
            <h1 className='text-4xl font bold
            text-white'>
                DAV420I Apes
            </h1>
            <h2 className='text-xl
            text-gray-300'>
                A collection of DAV420I Apes who live & breathe React!
            </h2>
            </div>
        </div>
    </div>

    {/*right*/}

        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* Header */}
            <header className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl
                font-extralight sm:w-80'>
                    The{' '}
                    <span className='font-extrabold underline decoration-pink-600/50' > DAV420I
                    </span>{' '}
                     NFT Market Place
                </h1>

                <button onClick={() => address ? disconnect () : connectWithMetamask()}
                        className='rounded-full bg-rose-400 px-4 py-2
                text-xs font-bold text-white lg:px-5 lg:py-3
                lg:text-base'>
                    {address ?  'Sign Out' : 'Sign in' }
                </button>

            </header>

            <hr className='my-2 border'/>
            {address && (
                <p className='text-center text-sm text-rose-400 '>You're Logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}
                </p>
            )}
        {/*Content*/}

            <div className='mt-10 flex flex-1 flex-col items-center
            space-y-6 text-center lg:justify-center lg:space-y-0'>
                <img className='w-80 object-cover pb-5 lg:h-40' src="https://links.papareact.com/bdy" alt=""/>

                <h1 className='text-3xl font-bold lg:text-5xl
                lg:font-extrabold'> The DAV420I Ape Config Club | NFT Drop</h1>

                <p className='pt-2 text-xl text-green-500/70'> 13 / 20 NFT's claimed</p>
            </div>
        {/*Mint Button*/}


            <button className='mt-10 h-16 bg-red-600 w-full rounded-full font-bold text-white'> Mint NFT (0.01ETH)</button>

        </div>

    </div>



}

export default NFTDropPage

