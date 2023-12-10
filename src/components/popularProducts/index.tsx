import React from 'react'
// styles
import s from "./PopularProducts.module.scss"
// interfaces
import { Prod } from '@/interfaces'
// components
import ProductCard from '../productCard'
// modules
import { getProducts } from '@/modules/products'


const PopularProducts = (props: Prod) => {

    let counter = 0
    return (
      <>
          <div className={s.title}>Популярні товари</div>
          <div className={`${s.productsContainer} container`}>
              {props.data.map((e)=>{
                counter += 1

                if (counter <= 4){
                    return(
                        <ProductCard key={e.id} data={e}/>
                    )
                }
              })}
          </div>
      </>    
    )
}


export default PopularProducts