import React from 'react'
import Signup from "@/components/Signup"
import { signIn } from '@/auth'


const Signuppage = () => {

  // inline functin leve
  const signuphandle = async () => {
    'use server'
    await signIn('github')
  }
  return (
    <form action={signuphandle}><Signup/></form>
  )
}

export default Signuppage