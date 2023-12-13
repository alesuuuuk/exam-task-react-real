import React from 'react'
import {useState, useEffect} from 'react'
// styles
import s from './Catalog.module.scss'
// components
import ProductCard from '@/components/productCard'
import { ProdNoProps } from '@/interfaces'
// modules
import { getProducts } from '@/modules/products'


interface Props{
  prods: ProdNoProps[]
}

const Catalog = ({ prods }: Props) => {
  // states
  const [products, setProducts] = useState<[]>([])
  
  // pagination helper
  let counter: number = 0
  let pagArray: [] = []
  let pagPagesArray: [] = []

  // let testA = [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15},{id: 16},{id: 17},{id: 18},{id: 19},{id: 20},{id: 21},{id: 22}]
  prods.map((e)=>{
    if (counter < 9){
      pagPagesArray.push(e)
      // console.log(e.id)
    }else{
      counter = 0
      pagArray.push(pagPagesArray)
      //console.log(pagPagesArray)
      pagPagesArray = []
    }
    counter++
  })
  if (pagPagesArray.length > 0 && pagArray[pagArray.length-1].length < 9){
    pagArray[pagArray.length-1].push(pagPagesArray)
  }else if (pagPagesArray.length > 0){
    pagArray.push(pagPagesArray)
  }

  console.log(pagArray)

  //console.log(pagArray)
  
  // useEffect(()=>{
  //   prods.map((e)=>{
  //     if (counter < 9){
  //       pagPagesArray.push(e)
  //       // console.log(e.id)
  //     }else{
  //       counter = 0
  //       pagArray.push(pagPagesArray)
  //       pagPagesArray = []
  //     }
  //     counter++
  //   })
  //   pagPagesArray.length > 0 ? pagArray.push(pagPagesArray) : null

  //   console.log(pagArray)
  // }, [])
  return (
    <>
        <div>

        </div>

        <div>
          <div></div>
          <div></div>
        </div>
    </>
  )
}

// SSR
export async function getServerSideProps() {
  // init
  const prod = new getProducts();
  
  const products = await prod.getData('products').then((data: [])=>{return data})
  
  return { props: { prods: products} }
}
export default Catalog