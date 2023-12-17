import React, { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// reducers
import { removeAllItemsFromCart } from "@/store/features/cart";
// style
import s from "./cart.module.scss";
// interfaces
import { Prod, ProdNoProps } from "@/interfaces";
// components
import CartItem from "@/components/cartItem";
// modules
import { getProducts } from "@/modules/products";


interface Props{
  prods: ProdNoProps[]
}

const Cart = ({prods}: Props) => {
  // init
  const prod = new getProducts();
  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState<Prod[] | null>(null);
  const data = useSelector((state: any) => state.cart.items);
  console.log(data, "all id in redux")
  
  
  
  return (
    <>
      <section className={`${s.cart} container`}>
        <h2 className={s.cart__title}>Кошик</h2>
        
        <div className={s.cart__btns}>
        <button
            onClick={() => {
              dispatch(removeAllItemsFromCart());
            }}
          >
            Очистити кошик
          </button>
          <button>оформити покупку</button>
        </div>
        <div className={s.cart__items}>
         {data.map((id: any) =>{
          // @ts-ignore
          return <CartItem key={id} id={id}/>
        })}
        </div>
      </section>
    </>
  );
};

// SSR
export async function getServerSideProps() {
  const prod = new getProducts();
  
  const products = await prod.getData('products').then((data: [])=>{return data})
  
  return { props: { prods: products} }
}
export default Cart;
