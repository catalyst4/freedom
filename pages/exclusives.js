import { ArrowSmLeftIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { countdown } from '../countdown'

const exclusives = () => {

    const expiry = new Date('31 December, 2021').getTime()

    let cd
    if(process.browser) {
        cd = countdown(expiry)
    }

    return (
        <div>
            <Head>
                <title>Exclusives | FREEDOM</title>
            </Head>
            <img src="/img/bg.jpg" className="w-full h-screen object-cover opacity-20 filter blur-sm" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <Link href="/">
                    <button 
                        className="flex items-center opacity-50 font-medium mb-2"
                    >
                        <ArrowSmLeftIcon className="w-4 h-4 mr-1" />
                        Back
                    </button>
                </Link>
                <p className="w-full px-4 md:px-0 md:w-1/2 text-center text-3xl font-medium mb-3">Unfortunately due to covid delays the full Freedom Album will be released 31/12/21</p>
                <p className="w-4/5 md:w-1/2 text-center text-lg opacity-90">Countdown on this journey with us and earn yourself exclusive gifts now until December when we release the sponsored teams</p>
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

export default exclusives
