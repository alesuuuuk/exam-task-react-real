import React, { useEffect, useState } from "react";
import Image from "next/image";
// style
import s from "./favourites.module.scss";
// modules
import { getProducts } from "@/modules/products";
// redux
import { useDispatch, useSelector } from "react-redux";
// reducers
import { removeItemFromFavourites } from "@/store/features/favourite";
import { addItemToCart } from "@/store/features/cart";
// interface
import { ProdNoProps } from "@/interfaces";
// imgs
import removeImg from "@/assets/icons/cart/delete.svg";

const FavouriteItem = (props: any) => {
  const dispatch = useDispatch();
  const prod = new getProducts();
  const { id } = props;
  const [product, setProduct] = useState<ProdNoProps[]>([]);
  useEffect(() => {
    const data = prod
      .getSingleProduct(`${id}`)
      .then((data: ProdNoProps[]) => setProduct(data));

    console.log(product, "favourite product");
  }, []);

  return (
    <>
      <div className={s.item}>
        <div className={s.item__description}>
          {/* @ts-ignore */}
          <Image src={product.image} alt="img" width={100} height={100} />
          <div className={s.item__description_info}>
            {/* @ts-ignore */}
            <h3 className={s.title}>{product.title}</h3>
            {/* @ts-ignore */}
            <p className={s.category}>{product.category}</p>
            <p className={s.existing}>в наявності</p>
          </div>
        </div>
        <div className={s.item__actions}>
          {/* @ts-ignore */}
          <p className={s.item__actions_price}>{product.price} грн</p>
          <Image
            src={removeImg}
            alt="remove img"
            width={30}
            height={30}
            onClick={() => {
              dispatch(removeItemFromFavourites(id));
            }}
          />
          <button onClick={()=>{
            dispatch(addItemToCart(id))
          }} className={s.item__actions_addToCart}>Додати у кошик</button>
        </div>
      </div>
    </>
  );
};

export default FavouriteItem;
