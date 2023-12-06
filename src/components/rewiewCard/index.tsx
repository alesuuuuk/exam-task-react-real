import React from 'react'
import Image from 'next/image'
// style
import s from "./rewiewCard.module.scss"

// module
import { getComments } from '@/modules/comments'
// imgs
import star from "@/assets/icons/rewiewCard/Star.svg"


const RewiewCard = () => {
    const comments = new getComments();
    console.log(comments.getData("comments"))
  return (
    <>
    <Image src={star} alt='star'/>
    </>
  )
}

export default RewiewCard