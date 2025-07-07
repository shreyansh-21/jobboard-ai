import Link from 'next/link'
import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className=' space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">
                    Your AI-Powered Partner for
                    <br />
                    Professional Success
                </h1>
                <p className='mx-auto max-w-[750px] text-center text-lg md:text-xl'>
                Resumes Reimagined. Interviews Mastered. Careers Transformed. <br />Your dream role is closer than you think. Let AI help you get there. Advance your career with AI-driven insights.
                </p>

            </div>

            <div className='flex justify-center gap-4'>
                <Link href= "/dashboard"><Button size="lg" className= "px-8">Get Started!</Button></Link>
                {/* loom video lagani hai  */}
                <Link href= "/dashboard"><Button size="lg" className= "px-8" variant="outline">Demo Video</Button></Link>
            </div>
        </div>

        <div className='relative overflow-hidden h-190 w-full'>
            <div className='absolute inset-0 -bottom-15'>
                <Spline scene="https://prod.spline.design/gpTQsAM4LpUOq6dn/scene.splinecode" />
            </div>
        </div>
    </section>
  )
}

export default HeroSection
