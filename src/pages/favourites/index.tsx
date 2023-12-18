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

// let data = [
//   {
//     id: 1,
//   },
//   {
//     id:2
//   },
//   {
//     id:5
//   },
//   {
//     id:4
//   },
// ];

const FavoutitesPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state?.favourite?.items)
  const [products, setProducts] = useState<any>(null)
 useMemo(()=>{
  const data = useSelector((state: any) => state?.favourite?.items);
 }, [])
    
  console.log(data, "all data to favourites")
  return (
    <>
      <div className={`${s.favourite} container`}>
        <h2 className={s.favourite__title}>Список бажання</h2>
        <button
          onClick={() => {
            dispatch(removeAllItemsFromFavourites);
          }}
          className={s.favourite__topButton}
        >
          Очистити список бажань
        </button>
        <div className={s.favourite__items}>
          {data.map((e:any)=>{
            console.log(e, "map item ")
            return <FavouriteItem key={e} id={e}/>
          })}
        </div>
      </div>
    </>
  );
};

export default FavoutitesPage;
