import React from "react";

// react tags
import Image from "next/image";

// interfaces
import  { Prod } from "@/interfaces"

// style
import s from "./productCard.module.scss";

// icons
import cartIcon from "@/assets/icons/productCard/cart.svg";
import favouriteIcon from "@/assets/icons/productCard/favourites.svg";
import testImg from "@/assets/icons/productCard/test.png";
import Link from "next/link";

const ProductCard = (props: Prod) => {
  // destructure props
  const {title, image, price, category} = props.data;
  return (
    <>
      <div className={s.card}>
        <div className={s.card__top}>
          <div className={s.card__top_new}>НОВЕ</div>
          <Image className={s.card__top_heart} src={favouriteIcon} alt="heart" />
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

          <div className={s.card__botton_addCart}>
            <Image src={cartIcon} alt="cart" />
          </div>

        </div>

      </div>
    </>
  );
};


export default ProductCard;