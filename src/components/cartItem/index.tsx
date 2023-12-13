import React, { useState } from "react";
import Image from "next/image";
// style
import s from "./cartItem.module.scss";
// interface
import { Prod } from "@/interfaces";
// redux
import { useDispatch } from "react-redux";
// reducers
import { removeItemFromCart } from "@/store/features/cart";
// imgs
import arrow from "@/assets/icons/cart/bottom_arrow.svg";
import cancel from "@/assets/icons/cart/delete.svg";

import img from "@/assets/icons/productCard/test.png";

const CartItem = (props: Prod) => {
  const { title, image, price, category, id, description } = props.data;
  // console.log("____PROPS", title, image, price)
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className={`${s.card} container`}>
        <Image src={img} width={100} height={100} alt="product img" />
        <div className={s.card__nameAndDescription}>
          <h2 className={s.card__nameAndDescription_name}>{title}</h2>
          <p className={s.card__nameAndDescription_description}>
            {category}
          </p>
        </div>
        <div className={s.card__qty}>
          <button
            onClick={() => {
              setQty(qty - 1);
              //@ts-ignore
            }}
            className={s.increment}
            disabled={qty==1}
          >
            -
          </button>
          <p>{qty}</p>
          <button
            onClick={() => {
              setQty(qty + 1);
            }}
            className={s.decrement}
          >
            +
          </button>
        </div>
        <div className={s.card__price}>{price} грн</div>
        <Image src={cancel} alt="cancel img" />
      </div>
    </>
  );
};

export default CartItem;
