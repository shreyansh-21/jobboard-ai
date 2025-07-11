import { industries } from '@/data/industries'
import React from 'react'

const OnboardingPage = () => {
  // Check if the user is onboarded
  return (
    <main>
      <OnboardingForm industries ={industries}/>
    </main>
  )
}

export default OnboardingPage
