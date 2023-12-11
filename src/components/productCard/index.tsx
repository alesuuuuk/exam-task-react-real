import React from "react";

// react tags
import Image from "next/image";
import Link from "next/link";

// interfaces
import  { Prod } from "@/interfaces"

// style
import s from "./productCard.module.scss";

// icons
import cartIcon from "@/assets/icons/productCard/cart.svg";
import favouriteIcon from "@/assets/icons/productCard/favourites.svg";


// redux
import { useDispatch } from "react-redux"

// reducers
import { addItemToCart } from '@/store/features/cart'
import { addItemToFavourites } from "@/store/features/favourite";

const ProductCard = (props: Prod) => {
  // destructure props
  const {title, image, price, category, id} = props.data;
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.card}>
        <div className={s.card__top}>
          <div className={s.card__top_new}>НОВЕ</div>
          <Image className={s.card__top_heart} src={favouriteIcon} alt="heart" onClick={() =>{
            dispatch(addItemToFavourites(id))
          }} />
        </div>

        <div className={s.card__img}>
          <Link href={'/'}><Image src={image} alt="product img" width={200} height={200}/></Link>
        </div>

        <div><Link className={s.card__title} style={{color: "black", textDecoration: "none"}} href={'/'}><h3>{title}</h3></Link></div>
        
        <div><Link className={s.card__author} href={'/'}>АДОЛЬФ</Link></div>

        <p className={s.card__about_category}>{category}</p>

        <div className={s.card__botton}>
          
          <div className={s.card__botton_price}>
            <h3>{price} грн</h3>
            <p>в наявності</p>
          </div>

          <div className={s.card__botton_addCart} onClick={() => {
            dispatch(addItemToCart(id))
          }}>
            <Image src={cartIcon} alt="cart" />
          </div>

        </div>

      </div>
    </>
  );
};


export default ProductCard;