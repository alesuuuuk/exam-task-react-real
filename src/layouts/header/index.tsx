import React from 'react'
import Link from 'next/link'
// style
import s from "./Header.module.scss"
// images
import Image from 'next/image'
import img_like from "@/assets/imgs/header/like.png"
import img_cart from "@/assets/imgs/header/cart.png"
import img_search from "@/assets/imgs/header/search.png"

const Header = () => {
  return (
    <>
      <header className={`${s.header} container`}>
        <Link href={"/"} className={s.Logo}>LOGO</Link>
        
        <nav>
          <ul>
            <li>
              <Link href={"#"}>Каталог</Link>
            </li>
            <li>
              <Link href={"#"}>Про нас</Link>
            </li>
            <li>
              <Link href={"#"}>FAQ</Link>
            </li>
            <li>
              <Link href={"#"}>Контакти</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Image src={img_like} alt=""></Image>
          <label htmlFor=""><Image src={img_search} alt=""></Image></label>
          <Image src={img_cart} alt=""></Image>
          <div className={s.btnHolder}>
            <button>Телефонувати</button>
          </div>
        </div>
        
        <div /*onClick={()=>{
              burger ? setBurger(false) : setBurger(true)
            }}*/ className={`${s.burger}`}>
              <div></div>
              <div></div>
              <div></div>
        </div>

        <div className={`${s.mobileMenu}`}>
            <nav className={s.mobileMenu__nav}>
              <ul>
                <li>
                  <Link href={"#"}>Каталог</Link>
                </li>
                <li>
                  <Link href={"#"}>Про нас</Link>
                </li>
                <li>
                  <Link href={"#"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"#"}>Контакти</Link>
                </li>
              </ul>
            </nav>
          </div>

      </header>
    </>
  )
}

export default Header
