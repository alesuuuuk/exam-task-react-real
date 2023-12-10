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

const ProductCard = (props: Prod) => {
  // destructure props
  const {title, image, description, price, category} = props;
  return (
    <>
      <div className={s.card}>
        <div className={s.card__top}>
          <div className={s.card__top_new}>Нове</div>
          <Image src={favouriteIcon} alt="heart" />
        </div>
        <div className={s.card__img}>
          <Image src={image} alt="product img" />
        </div>
        <h3>{title}</h3>
        <p className={s.card__about_category}>{category}</p>
        <div className={s.card__about}>
          <p className={s.card__about_description}>
            {description}
          </p>
        </div>
        <div className={s.card__botton}>
          <div className={s.card__botton_price}>
            <h3>{price}</h3>
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