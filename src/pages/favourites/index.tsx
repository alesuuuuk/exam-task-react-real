import React, { useEffect, useMemo, useState } from "react";
// style
import s from "./favourites.module.scss";
// redux
import { useSelector, useDispatch } from "react-redux";
// reducers
import {
  removeItemFromFavourites,
  removeAllItemsFromFavourites,
} from "@/store/features/favourite";
//component
import FavouriteItem from "@/components/favouritesItem";

const FavoutitesPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state?.favourite?.items)
  const [products, setProducts] = useState<any>(null)

  return (
    <>
      <div className={`${s.favourite} ${data.length == 0 && s.margin} container`}>
        <h2 className={s.favourite__title}>Список бажання</h2>
        <button
          onClick={() => {
            dispatch(removeAllItemsFromFavourites());
          }}
          className={s.favourite__topButton}
        >
          Очистити список бажань
        </button>
        <div className={s.favourite__items}>
          {data.map((e:any)=>{
            return <FavouriteItem key={e} id={e}/>
          })}
        </div>
        <div className={s.favourite__none}>
          <h5>{data.length == 0 && "Ви ще не додали жодного продукту"}</h5>
        </div>
      </div>
    </>
  );
};

export default FavoutitesPage;
