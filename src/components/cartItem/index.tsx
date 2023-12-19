import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// style
import s from "./cartItem.module.scss";
// interface
import { Prod, ProdNoProps } from "@/interfaces";
// redux
import { useDispatch, useSelector } from "react-redux";
// reducers
import { removeItemFromCart, removeQtyFromCart, addQtyToCart } from "@/store/features/cart";
// modules
import { getProducts } from "@/modules/products";
// imgs
import arrow from "@/assets/icons/cart/bottom_arrow.svg";
import cancel from "@/assets/icons/cart/delete.svg";

import img from "@/assets/icons/productCard/test.png";


const CartItem = (props: any) => {
  // init
  const prod = new getProducts()
  const dispatch = useDispatch();

  const {id} = props
  const data = useSelector((state: any) => state.cart.items);
  
  // states
  const [qty, setQty] = useState<number>(props.qty);
  const [product, setProduct] = useState<ProdNoProps[]>([])
  
  useEffect(()=>{
    // @ts-ignore
    const setProducts = prod.getSingleProduct(`${id}`).then((data: ProdNoProps[]) => setProduct(data));
  }, [])

  return (
    <>
      <div className={`${s.card} container`}>
        {/* @ts-ignore */}
        <Link href={`/catalog/${product?.title}?id=${id}`}><Image src={product?.image} width={100} height={100} alt="Loading" /></Link>
        <div className={s.card__nameAndDescription}>
        {/* @ts-ignore */}

          <Link style={{textDecoration: "none"}} href={`/catalog/${product?.title}?id=${id}`}><h2 className={s.card__nameAndDescription_name}>{product?.title || 'Loading'}</h2></Link>
          <p className={s.card__nameAndDescription_description}>
        {/* @ts-ignore */}

            {product?.category || 'Loading'}
          </p>
        </div>
        <div className={s.card__qty}>
          <button
            onClick={() => {
              dispatch(removeQtyFromCart(id))
              setQty(qty - 1);
            }}
            className={s.increment}
            disabled={qty==1}
          >
            -
          </button>
          <p>{qty}</p>
          <button
            onClick={() => {
              dispatch(addQtyToCart(id))
              setQty(qty + 1);
            }}
            className={s.decrement}
          >
            +
          </button>
        </div>
        {/* @ts-ignore */}

        <div className={s.card__price}>{product?.price || "Loading"} грн</div>
        <Image className={s.card__delete} onClick={()=>{
          dispatch(removeItemFromCart(id))
        }} src={cancel} alt="cancel img" />
      </div>
    </>
  );
};

export default CartItem;
