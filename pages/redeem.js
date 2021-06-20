import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { KeyIcon, LockOpenIcon, LockClosedIcon } from '@heroicons/react/solid'
import { countdown } from '../countdown'
import Link from 'next/link'
import { ArrowSmLeftIcon } from '@heroicons/react/solid'
import axios from 'axios'

const redeem = () => {

    const [code, setCode] = useState(undefined)
    const [success, setSuccess] = useState(false)
    const [valid, setValid] = useState(false)
    const [error, setError] = useState(false)

    const redeem = async () => {
        const { data: { success } } = await axios.post('/api/code', { code })

        if(success) {
            setSuccess(true)
        } else {
            setError(true)
        }

        console.log(success)

    }

    useEffect(() => {
        if(code && code.length >= 6) {
            setValid(true)
        } else {
            setValid(false)
        }
    }, [code])

    const expiry = new Date('31 December, 2021').getTime()

    let cd
    if(process.browser) {
        cd = countdown(expiry)
    }

    return (
        <div>
            <Head>
                <title>Redeem Code | FREEDOM</title>
            </Head>
            <img src="/img/bg.jpg" className="w-full h-screen object-cover opacity-20 filter blur-sm" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <Link href="/">
                        <button 
                            className="flex items-center opacity-50 font-medium mb-2 outline-none"
                        >
                            <ArrowSmLeftIcon className="w-4 h-4 mr-1" />
                            Back
                        </button>
                    </Link>
                    {!success ? (
                        <>
                            <h1 className="text-2xl text-center font-bold mb-3">Redeem Code</h1>
                            <div className={`${error && 'border-3 border-red-500'} bg-white border-2 px-4 py-2 rounded-lg text-black flex items-center mb-2`}>
                                <KeyIcon className="w-4 h-4 mr-2 opacity-50" />
                                <input type="text"
                                    value={code}
                                    placeholder="Enter code"
                                    onChange={(e) => setCode(e.target.value)}
                                    className={`bg-transparent placeholder-black placeholder-opacity-50 font-medium focus:outline-none`}
                                />
                            </div>
                            <button
                                onClick={redeem}
                                disabled={!valid ? true : false}
                                className={`${!valid ? 'opacity-30' : 'opacity-100'} border-2 bg-transparent w-full transition duration-300 ease-in-out flex justify-center items-center px-2 py-2 font-bold rounded-lg`}
                            >
                                {!valid ? (
                                    <LockClosedIcon className="w-4 h-4 mr-2" />
                                ) : (
                                    <LockOpenIcon className="w-4 h-4 mr-2" />
                                )}
                                Redeem
                            </button>     
                        </>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold mb-5 text-center">Congratulations! Code successfully registered.</h1>
                            <span className="text-lg md:w-1/2 leading-5 text-center">Thank you for registering your code! Please keep note of your code as you will need it upon release.</span>
                        </>
                    )}
                       
                </div>
            </div>
            <div className="absolute bottom-0 w-full flex justify-center p-5">
                <div className="grid grid-cols-5 gap-3 md:gap-10 text-center">
                    <div>
                        <CdHeading>{cd?.months}</CdHeading>
                        <TimeUnit>Months</TimeUnit>
                    </div>
                    <div>
                        <CdHeading>{cd?.days}</CdHeading>
                        <TimeUnit>Days</TimeUnit>
                    </div>
                    <div>
                        <CdHeading>{cd?.hours}</CdHeading>
                        <TimeUnit>Hours</TimeUnit>
                    </div>
                    <div>
                        <CdHeading>{cd?.mins}</CdHeading>
                        <TimeUnit>Minutes</TimeUnit>
                    </div>
                    <div>
                        <CdHeading>{cd?.secs}</CdHeading>
                        <TimeUnit>Seconds</TimeUnit>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CdHeading = ({ children }) => {
    return (
        <h1 className="text-2xl md:text-5xl font-bold">{children}</h1>
    )
}

const TimeUnit = ({ children }) => {
    return (
        <span className="text-xs uppercase font-semibold opacity-50">{children}</span>
    )
}

export default redeem
