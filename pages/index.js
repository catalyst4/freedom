import React from 'react'
import { countdown } from '../countdown'
import Head from 'next/head'
import Link from 'next/link'

const index = () => {

  const expiry = new Date('31 December, 2021').getTime()

  let cd
  if(process.browser) {
      cd = countdown(expiry)
  }

  return (
    <div>
      <Head>
        <title>FREEDOM</title>
      </Head>
      <img src="/img/bg.jpg" className="w-full h-screen object-cover opacity-20 filter blur-sm" />
      <div className="absolute top-0 right-0 p-5 flex w-full justify-center items-center z-50">
        <Link href="/exclusives">
          <button className="font-semibold mr-5 outline-none">Exclusives</button>
        </Link>
        <Link href="/redeem">
          <button className="font-semibold outline-none">Redeem Code</button>
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 style={{letterSpacing: '10px'}} className="text-4xl md:text-7xl font-black uppercase">Freedom</h1>
        <h2 className="text-sm md:text-xl font-medium italic uppercase tracking-widest">The Album Coming Soon</h2>
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

export default index
