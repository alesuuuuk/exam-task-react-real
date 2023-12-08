import React from "react";
// import { useEffect } from "react";
import Link from "next/link";
// style
import s from "@/styles/Home.module.scss";
// modules
import { getProducts } from "@/modules/products";
import { getComments } from "@/modules/comments";


// components
import Partners from '@/components/partners'
import RewiewCard from "@/components/rewiewCard";


const index = () => {
  // init
  const prod = new getProducts();
  const comment = new getComments();
  // destcu
 
  console.log(comment.getData('comments'))
  return (
    <>
    Home page
    <Link href={`/about`}>about</Link>
    <RewiewCard/>
    
    </>
  );
};

export default index;
