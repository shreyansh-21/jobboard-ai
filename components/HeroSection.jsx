import Link from 'next/link'
import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className=' space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1>
                    Your AI Career Companion for
                    <br />
                    Professional Success
                </h1>
                <p>
                    Advance your career with AI-driven insights and expert guidance.
                </p>
            </div>

            <div>
                <Link href= "/dashboard"><Button size="lg" className= "px-8">Get Started!</Button></Link>
                {/* loom video lagani hai  */}
                <Link href= "/dashboard"><Button size="lg" className= "px-8" variant="outline">Get Started!</Button></Link>
            </div>
        </div>

        <div>
            <Spline scene="https://prod.spline.design/gpTQsAM4LpUOq6dn/scene.splinecode" />
        </div>
    </section>
  )
}

export default HeroSection
