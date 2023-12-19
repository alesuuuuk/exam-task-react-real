import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'
// style
import s from "./Header.module.scss"
// images
import Image from 'next/image'
import img_like from "@/assets/imgs/header/like.png"
import img_cart from "@/assets/imgs/header/cart.png"
import img_search from "@/assets/imgs/header/search.png"

import Footer from '../footer'
const Header = () => {
  // redux
  const cart: any = useSelector((state: any) => state.cart.items)
  const uniqueCart = Array.from(new Set(cart))
  
  // states
  const [burgerStatus, setBurgerStatus] = useState<boolean>(false)

  // adding fixed class to body when burger is opened
  useEffect(()=>{
    burgerStatus ? document.body.classList.add('fixed') : document.body.classList.remove('fixed')
  }, [burgerStatus])

  return (
    <>
      <header className={`${s.header} ${burgerStatus ? '' : 'container'}`}>
        <Link href={"/"} className={s.Logo}>LOGO</Link>
        
        <nav>
          <ul>
            <li>
              <Link href={"/catalog"}>Каталог</Link>
            </li>
            <li>
              <Link href={"#"}>Про нас</Link>
            </li>
            <li>
              <Link href={"/about"}>FAQ</Link>
            </li>
            <li>
              <Link href={"#"}>Контакти</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Link href={'#'}><Image src={img_like} alt=""></Image></Link>
          <label htmlFor="input"><Image src={img_search} alt=""></Image></label>
          <Link href={'/cart'}><div className={s.cart}>
            <Image src={img_cart} alt=""></Image>
            <div className={s.cart__show}>{uniqueCart.length}</div>
          </div></Link>
          <div className={s.btnHolder}>
            <button>Телефонувати</button>
          </div>
        </div>
        
        <div onClick={()=>{
              burgerStatus ? setBurgerStatus(false) : setBurgerStatus(true)
            }} className={`${s.burger} ${burgerStatus ? s.active : s.unactive}`}>
              <div></div>
              <div></div>
              <div></div>
        </div>

        <div className={`${s.mobileMenu} ${burgerStatus ? s.active : s.unactive}`}>
            <nav className={s.mobileMenu__nav}>
              <ul>
                <li>
                  <Link onClick={()=>{setBurgerStatus(false)}} href={"/catalog"}>Каталог</Link>
                </li>
                <li>
                  <Link onClick={()=>{setBurgerStatus(false)}} href={"#"}>Про нас</Link>
                </li>
                <li>
                  <Link onClick={()=>{setBurgerStatus(false)}} href={"/about"}>FAQ</Link>
                </li>
                <li>
                  <Link onClick={()=>{setBurgerStatus(false)}} href={"#"}>Контакти</Link>
                </li>
              </ul>
            </nav>
            <div className={`${s.btnHolder} ${s.mobileBtnHolder}`}>
                <button onClick={()=>{setBurgerStatus(false)}}>Телефонувати</button>
            </div>
          </div>

      </header>
    </>
  )
}

export default Header
