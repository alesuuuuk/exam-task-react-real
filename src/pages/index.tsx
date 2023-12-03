import React from 'react'
import Link from 'next/link'
// style
import s from "@/styles/Home.module.scss"

// components
import Partners from '@/components/partners'

const index = () => {
  return (
    <>
    Home page
    <Link href={`/about`}>about</Link>
    </>
  )
}

export default index
