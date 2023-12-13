import React from 'react'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
// styles
import s from './Catalog.module.scss'
// components
import ProductCard from '@/components/productCard'
// interfaces
import { ProdNoProps } from '@/interfaces'
// modules
import { getProducts } from '@/modules/products'


interface Props{
  prods: ProdNoProps[]
}

const Catalog = ({ prods }: Props) => {
  // pagination helper
  let counter: number = 0
  let pagArray: any[] = []
  let pagPagesArray: any[] = []
  // states
  const [products, setProducts] = useState<any[]>(prods)
  const [pagProducts, setPagProducts] = useState<any[]>(pagArray)
  const [pgnPages, setPgnPages] = useState<number>(products.length % 9==0 ? products.length/9 : Math.floor(products.length/9))
  const [currentPage, setCurrentPage] = useState<number>(Number(useRouter().query?.pgn))
  // init
  const router = useRouter()

  // functions
  function generatePgnPages() {
    const elements = []
  
    for (let i = 1; i <= pgnPages; i++) {
      elements.push(<button className={s.pagination__container_btn} onClick={()=>{
        router.replace({
          pathname: router.pathname,
          query: {...router.query, pgn: i}
        })
        setCurrentPage(i)
      }} key={i}>{i}</button>)
    }
  
    return <div className={s.items__container_pagination_btn}>{elements}</div>
  }
  
  // onLoad
  useEffect(()=>{
    // checking pagination page
    let page: any = router.query?.pgn
    if (!page){
      router.push('?pgn=1')
    }

    products.map((e)=>{
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
    if (pagPagesArray.length > 0 && (pagArray[pagArray.length-1].length + pagPagesArray.length) <= 9){
      pagPagesArray.map((e)=>{
        pagArray[pagArray.length-1].push(e)
      })
    }else if (pagPagesArray.length > 0){
      pagArray.push(pagPagesArray)
    }
    setPagProducts(pagArray)
  }, [])

  return (
    <>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <div className={s.items}>
          <div className={s.items__container}>
            <div className={s.items__container_products}>
              {/*@ts-ignore*/}
              {pagProducts[currentPage - 1] && pagProducts[currentPage-1].map((e)=>{
                return(<ProductCard key={e.id} data={e}/>)
              })
              }
            </div>
            <div className={s.items__container_pagination}>
              {generatePgnPages()}
            </div>
          </div>
)}

// SSR
export async function getServerSideProps() {
  // init
  const prod = new getProducts();
  
  const products = await prod.getData('products').then((data: [])=>{return data})
  
  return { props: { prods: products} }
}
export default Catalog