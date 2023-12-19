import React from 'react'

import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
// styles
import s from './Catalog.module.scss'
// image
import Image from 'next/image'
import img_arrow from "@/assets/imgs/FAQ/FAQ_ARROW.svg"
import img_delete from "@/assets/imgs/catalog/delete.png"
// components
import ProductCard from '@/components/productCard'
// interfaces
import { ProdNoProps } from '@/interfaces'
// modules
import { getProducts } from '@/modules/products'
// slider
// @ts-ignore
import Slider from "react-slider"

interface Props{
  prods: ProdNoProps[]
  ctgs: string[]
}

const Catalog = ({ prods, ctgs }: Props) => {
  // states
  const [products, setProducts] = useState<any[]>(prods)
  const [pagProducts, setPagProducts] = useState<any[]>([])
  const [pgnPages, setPgnPages] = useState<number>(products.length % 9==0 ? products.length/9 : Math.floor(products.length/9)+1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [dropdowns, setDropDowns] = useState<any>({sort: false, price: true, category: true})
  const [price, setPrice] = useState<number[]>([7, 999])
  const [minMaxProductsPrice, setMinMaxProductsPrice] = useState<number[]>([7, 999])
  const [selectedCategories, setSelectedCategories] = useState<any>([])
  // init
  const router = useRouter()
  // let testA = [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15},{id: 16},{id: 17},{id: 18},{id: 19},{id: 20},{id: 21},{id: 22}]
  // functions
  
  function generatePgnPages() {
    const elements = []

    for (let i = 1; i <= pgnPages; i++) {
      elements.push(<button id={`${i}`} className={`${s.pagination__container_btn}`} onClick={()=>{
        router.replace({
          pathname: router.pathname,
          query: {...router.query, pgn: i}
        })
        setCurrentPage(i)
      }} key={i}>{i}</button>)
    }
    
    return <div className={s.items__container_pagination_btn}>{elements}</div>
  }
  
  function inputChange (i: number, val: any) {
    if (i == 0 && val <= price[1] ){
      const newValues = [...price];
      newValues[i] = val;
      setPrice(newValues);
    }else if (i == 1 && val >= price[0] ){
      const newValues = [...price];
      newValues[i] = val;
      setPrice(newValues);
    }
  }

  function minMaxPrice(array: any[]) {
    const minPrice = array.reduce((min, product) => (product.price < min ? product.price : min), products[0].price)
    const maxPrice = array.reduce((max, product) => (product.price > max ? product.price : max), products[0].price)

    setMinMaxProductsPrice([Math.floor(minPrice), Math.floor(maxPrice)])
  }

  function makePagArray(n: number) {
    // pagination helper
    let pagArray: any[] = []
    let pagPagesArray: any[] = []
    // variables
    let counter: number = 0
    if (n == 0){
      
    products.map((e)=>{
      if (counter < 8){
        counter++
        pagPagesArray.push(e)
        // console.log(e.id)
      }else{
        pagPagesArray.push(e)
        counter = 0
        pagArray.push(pagPagesArray)
        //console.log(pagPagesArray)
        pagPagesArray = []
       }
    })
    
    if (pagPagesArray.length > 0 && (pagArray[pagArray.length-1].length + pagPagesArray.length) <= 9){
      pagPagesArray.map((e)=>{
        pagArray[pagArray.length-1].push(e)
      })
    }else if (pagPagesArray.length > 0){
      pagArray.push(pagPagesArray)
    }

    setPagProducts(pagArray)
    }else{
      pagArray = []
      pagPagesArray = []

      products.map((e)=>{
        if (counter < 8){
          counter++
          pagPagesArray.push(e)
          //console.log(counter)
        }else{
          pagPagesArray.push(e)
          counter = 0
          pagArray.push(pagPagesArray)
          // console.log("ARRAY____", pagArray)
          //console.log(pagPagesArray)
          pagPagesArray = []
         }
      })
      
      if (pagPagesArray.length > 0 && (pagArray[pagArray.length-1]?.length + pagPagesArray.length) <= 9){
        pagPagesArray.map((e)=>{
          pagArray[pagArray.length-1].push(e)
        })
      }else if (pagPagesArray.length > 0){
        pagArray.push(pagPagesArray)
      }
  
      setPagProducts(pagArray)
    }
  }
  
  function categoryChange (category: string) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((ctg: any) => ctg !== category))
    }else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // function checkForCategories (i: number) {
  //   let ctgs = router.query.ctgs
  //   if (typeof(ctgs) == "string" && ctgs != "none"){
  //     setSelectedCategories([...selectedCategories, ctgs])
  //   }else if (typeof(ctgs) != "string"){
  //     setSelectedCategories(ctgs)
  //   }

  //   if (i == 0){
  //     if(selectedCategories.length > 0){
  //       let fProducts: {}[] = products.filter((product: any)=> selectedCategories.some((category: any) => product.category.includes(category)))
  //       setProducts(fProducts)
  //     }
  //   }else{
  //     if(selectedCategories.length > 0){
  //       let fProducts: {}[] = products.filter((product: any)=> selectedCategories.some((category: any) => product.category.includes(category)))
  //       setProducts(fProducts)
  //     }else{
  //       checkParams()
  //     }
  //   }
  // }

  function checkParams() {
    setProducts(prods)
    let params: string = ''

    // checking queryParams
    let page: any = router.query?.pgn
    let price: any = router.query?.price
    let sort: any = router.query?.sort
    let queryCtgs: any = router.query?.ctgs

    if (!page){
      params += 'pgn=1'
    }else{
      setCurrentPage(page)
      params += `pgn=${currentPage}`
    }

    if (!queryCtgs){
      params += '&ctgs=none'
    }else{
      params += `&ctgs=${router.query.ctgs}`
    }

    if (!sort){
      params += '&sort=none'
    }else{
      params += `&sort=${router.query.sort}`
    }

    if (!price){
      params += (`&minPrice=${minMaxProductsPrice[0]}`)
      params += (`&maxPrice=${minMaxProductsPrice[1]}`)
    }

    params.length == 0 ? null : router.push({pathname: '/catalog', query: params})

    if (router.query.sort == 'rate'){
      let sortedProducts = prods.sort((a:any, b:any)=> b.rating.rate - a.rating.rate)
      setProducts(sortedProducts)

      makePagArray(1)
    }else if (router.query.sort == 'desc'){
      let sortedProducts = prods.sort((a:any, b:any)=> b.price - a.price)
      setProducts(sortedProducts)

      makePagArray(1)
    }else if (router.query.sort == 'asc'){
      let sortedProducts = prods.sort((a:any, b:any)=> a.price - b.price)
      setProducts(sortedProducts)

      makePagArray(1)
    }else{
      setProducts(prods)
      makePagArray(1)
    }

  }

  const changePriceParams = ()=>{
    router.replace({
      pathname: router.pathname,
      query: {...router.query, minPrice: price[0], maxPrice: price[1]}
    })
  }

  // onLoad
  useEffect(()=>{
    setProducts(prods)
    minMaxPrice(prods)
    // variables
    let counter: number = 0
    checkParams()
  }, [])

  useEffect(()=>{
    router.replace({
      pathname: router.pathname,
      query: {...router.query, ctgs: selectedCategories}
    })
    
    // checkForCategories(1)
  }, [selectedCategories])

  useEffect(()=>{
    changePriceParams()
  }, [price])
      

  useEffect(()=>{
    setPgnPages(products.length % 9==0 ? products.length/9 : Math.floor(products.length/9)+1)
    makePagArray(1)
  }, [products])

  return (
    <>
        <main className='container'>
          <div className={s.functions}>
            <div className={s.functions__info}>
              <h1 className={s.functions__info_category}>Каталог</h1>
            </div>
            
            <div className={s.functions__container}>

              <div className={s.functions__container_productsCount}>Кількість продуктів: {products.length}</div>

              <div className={s.functions__container_sort}>

                <div className={s.functions__container_sort_holder} onClick={()=>{dropdowns.sort ? setDropDowns((p: {})=>({...p, sort: false})) : setDropDowns((p: {})=>({...p, sort: true}))}}>
                  <div>Сортувати за</div>
                  <Image className={dropdowns.sort ? s.animation : ''} src={img_arrow} alt='' width={15}></Image>
                </div>

                <div className={`${s.functions__container_sort_options} ${dropdowns.sort ? s.active : ''}`}>
                  <div className={s.functions__container_sort_options_option} onClick={()=>{
                      let sortedProducts = prods.sort((a:any, b:any)=> b.price - a.price)
                      setProducts(sortedProducts)
                      router.replace({
                        pathname: router.pathname,
                        query: {...router.query, sort: "desc"}
                      })
                    }}>
                    <div>Від дорогих до дешевих</div>
                  </div>

                  <div className={s.functions__container_sort_options_option} onClick={()=>{
                      let sortedProducts = prods.sort((a:any, b:any)=> a.price - b.price)
                      setProducts(sortedProducts)
                      router.replace({
                        pathname: router.pathname,
                        query: {...router.query, sort: "asc"}
                      })
                    }}>
                    <div>Від дешевих до дорогих</div>
                  </div>

                  <div className={s.functions__container_sort_options_option} onClick={()=>{
                      let sortedProducts = prods.sort((a:any, b:any)=> b.rating.rate - a.rating.rate)
                      setProducts(sortedProducts)
                      router.replace({
                        pathname: router.pathname,
                        query: {...router.query, sort: "rate"}
                      })
                    }}>
                    <div>По рейтингу</div>
                  </div>
                </div>

              </div>

              <div className={s.functions__container_dFilter}>
                <div className={s.functions__container_dFilter_holder}>
                  <div>Фільтрування</div>
                  <Image src={img_delete} alt='' width={15}></Image>
                </div>
              </div>
            </div>

          </div>

          <div className={s.items}>
            <div className={s.items__container}>
              <div className={s.items__container_products}>
                {pagProducts[currentPage - 1] && pagProducts[currentPage-1].map((e: any)=>{
                  return(<ProductCard key={e.id} data={e}/>)
                })
                }
              </div>
              <div className={s.items__container_pagination}>
                {generatePgnPages()}
              </div>
            </div>
            
            <div className={s.items__filter}>
                <div className={s.items__filter_price}>
                  
                  <div className={s.items__filter_price_holder} onClick={()=>{dropdowns.price ? setDropDowns((p: {})=>({...p, price: false})) : setDropDowns((p: {})=>({...p, price: true}))}}>
                    <div>Ціна</div>
                    <Image className={dropdowns.price ? s.animation : ''} src={img_arrow} alt='' width={15}></Image>
                  </div>
                  
                  <div className={`${s.items__filter_price_options} ${dropdowns.price ? s.active : ''}`}>
                    <form action="">
                      <input type="number" value={price[0]} onChange={(e)=>{inputChange(0, e.target.value)}}/>
                      <div></div>
                      <input type="number" value={price[1]} onChange={(e)=>{inputChange(1, e.target.value)}}/>
                    </form>
                    <Slider className='slider' onChange={setPrice} value={price} min={Math.floor(minMaxProductsPrice[0])} max={Math.floor(minMaxProductsPrice[1])}/>
                  </div>

                </div>
                <div className={s.items__filter_categories}>
                  <div className={s.items__filter_categories_holder} onClick={()=>{dropdowns.category ? setDropDowns((p: {})=>({...p, category: false})) : setDropDowns((p: {})=>({...p, category: true}))}}>
                      <div>Категорії</div>
                      <Image className={dropdowns.category ? s.animation : ''} src={img_arrow} alt='' width={15}></Image>
                  </div>
                  
                  <div className={`${s.items__filter_categories_category} ${dropdowns.category ? s.active : ''}`}>
                    {ctgs && ctgs.map((ctg)=>{
                      return(
                        <div key={ctg} className={s.items__filter_categories_category_container}>
                          <input type="checkbox" value={ctg} checked={selectedCategories.includes(ctg)} onChange={()=>{categoryChange(ctg)}}/>
                          <div>{ctg}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
            </div>
          
          </div>
        </main>
    </>
  )}

// SSR
export async function getServerSideProps() {
  // init
  const prod = new getProducts();

  const products = await prod.getData('products').then((data: [])=>{return data})
  const categories = await prod.getData('products/categories').then((data: [])=>{return data})

  return { props: { prods: products, ctgs: categories} }
}

export default Catalog