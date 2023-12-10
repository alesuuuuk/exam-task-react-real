import React from "react";
// import { useEffect } from "react";
import Link from "next/link";
// style
import s from "@/styles/Home.module.scss";
// modules
import { getProducts } from "@/modules/products";
import { getComments } from "@/modules/comments";

import testImg from "@/assets/icons/productCard/test.png"

// components
import Partners from '@/components/partners'
import RewiewCard from "@/components/rewiewCard";
import ProductCard from "@/components/productCard";

const data = [
  {id: 1, category: "kuhnya", title: "test1 dasjlndaihadjhailsdasdas", description: `alalalalalalalalalalalalalaldsadfsajaswl aifhdsaklfhds`, price: 123, image:  testImg},
  
]
const index = () => {
  // init
  const prod = new getProducts();
  const comment = new getComments();
 
 
  console.log(comment.getData('comments'))
  console.log(prod.getData('products'))
  return (
    <>
    Home page
    <Link href={`/about`}>about</Link>
    {/* <RewiewCard/> */}

    { data.map((e: any) =>{
      return <ProductCard key={e.id} data={e} />
    })}
    
    </>
  );
};

export default index;
