import React from 'react'
// styles
import s from "./PopularProducts.module.scss"
// components
import ProductCard from '../productCard'
// modules
import { getProducts } from '@/modules/products'


interface Props {
    title: string,
    key: number;
    data: {
      category: string;
      description: string;
      image: string;
      price: number;
      id: number;
      rating: {
        rate: number;
        count: number;
      };
      title: string;
    };
  }

const PopularProducts = (props: Props) => {
    let counter = 0
    return (
      <>
          <div className={s.title}>{props.title}</div>
          <div className={`${s.productsContainer} container`}>
              {// @ts-ignore
              props.data.map((e)=>{
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