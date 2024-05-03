import React from 'react'
import Login from "@/components/Login"
import { signIn } from '@/auth'

const Loginpage = () => {


  // inline functin leve
  const loginhandle = async () => {
    'use server'
    await signIn('github')
  }


  return (
    <form  action={loginhandle} >
        <Login />
    </form>
  )
}

export default Loginpage