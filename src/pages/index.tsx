import React from "react";
// style
import s from "@/styles/Home.module.scss";
import { getProducts } from "@/modules/products";
import { getComments } from "@/modules/comments";
import { useEffect } from "react";

const index = () => {
  // init
  const prod = new getProducts();
  const comment = new getComments();
  useEffect(()=>{
    console.log(prod.getData('products'))
    console.log(comment.getData('comments'))
  }, [])  

  return (
    <> 
    
    </>
  );
};

export default index;
