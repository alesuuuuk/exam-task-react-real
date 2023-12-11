import React from "react";
// next tags
import Link from "next/link";
import Image from "next/image";

//style 
import s from "./rewiewCard.module.scss"

// interfaces
import { Com } from "@/interfaces";

// imgs
import star from "@/assets/icons/rewiewCard/Star.svg"

const RewiewCard = (props: Com) => {
  const {body, email} = props.data;
  return (
    <>
    <div className={s.responseCard}>
      <p className={s.responseCard__date}>1 вересня 1939</p>
      <h2 className={s.responseCard__author}>{email}</h2>
      <div className={s.responseCard__stars}>
        <Image src={star} alt="star"/>
        <Image src={star} alt="star"/>
        <Image src={star} alt="star"/>
        <Image src={star} alt="star"/>
        <Image src={star} alt="star"/>
      </div>
      <p className={s.responseCard__description}>{body}</p>
      <Link className={s.responseCard__link} href={`#`}>Відгук повністю</Link>
    </div>
    </>
  )
};

export default RewiewCard;
