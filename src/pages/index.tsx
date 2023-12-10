import React from "react";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
import Link from "next/link";
// style
import s from "@/styles/Home.module.scss";
// modules
import { getProducts } from "@/modules/products";
import { getComments } from "@/modules/comments";
// components
import Partners from '@/components/partners'
import PopularProducts from "@/components/popularProducts";
// images
import Image from "next/image";
import img_hero from "@/assets/imgs/home/hero.png"
import img_search from "@/assets/imgs/header/search.png"
// interfaces
import { ProdNoProps } from "@/interfaces";

import RewiewCard from "@/components/rewiewCard";
import ProductCard from "@/components/productCard";

interface Props{
  prods: ProdNoProps[],
  ctgs: string[]
}

const Home = ({prods, ctgs}: Props) => {
  // states
  // State to see when input is focused
  const [inputFocusStatus, setInputFocusStatus] = useState<boolean>(false)
  
  // counter to limit categories
  let counter = 0
  return (
    <>
      <div className={s.hero}>
        
        <Image className={s.hero__img} src={img_hero} alt=""></Image>
        
        <form action="" className={s.hero__form}>
          
          <div>
            <div>Lorem ipsum dolor sit amet.</div>
            <div>
              <input onBlur={(e)=>{e.target.value.length > 0 ? setInputFocusStatus(true) : setInputFocusStatus(false)}} onFocus={()=>{setInputFocusStatus(true)}} type="text" placeholder="Пошук"/>
              <Image className={inputFocusStatus ? s.active : ''} src={img_search} alt=""></Image>
            </div>
          </div>

        </form>
      </div>

      {/* @ts-ignore */}
      <PopularProducts key={1} data={prods}/>

      <div className={`${s.container} container`}>
        <section className={s.categoriesContainer}>
          <div className={s.categoriesContainer__title}>Категорії</div>
          <div className={s.categoriesContainer__categories}>
            {ctgs && ctgs?.map((category)=>{
              counter += 1
              const image = prods?.find(product => product.category === category)
              if (image && counter <= 9){
                return(<div className={s.categoriesContainer__categories_category} key={image.id}>
                  <div>
                    <Image src={image.image} alt="" width={200} height={250}></Image>
                    <Link href={'/'}><button>Переглянути</button></Link>
                  </div>
                  <div className={s.categoriesContainer__categories_category_title}>{category}</div>
                  </div>)
              }
            })}
          </div>
          <div className={s.categoriesContainer__allCategories}>
            <Link href={'/'}><button>Усі категорії</button></Link>
          </div>
        </section>
      </div>
    </>
  )
}

// SSR
export async function getServerSideProps() {
  // init
  const prod = new getProducts();
  
  const categories = await prod.getData('products/categories').then((data: [])=>{return data})
  const products = await prod.getData('products').then((data: [])=>{return data})
  
  return { props: { prods: products, ctgs: categories } }
}


export default Home;