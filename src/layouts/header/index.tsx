import React from 'react'
import Link from 'next/link'
// style
import s from "./Header.module.scss"
// images
import Image from 'next/image'

const Header = () => {
  return (
    <header>
        <Link href={"/"} className={s.Logo}>LOGO</Link>

        <ul>
          <li>
            <Link href={"/"}></Link>
          </li>
          <li>
            <Link href={"/"}></Link>
          </li>
          <li>
            <Link href={"/"}></Link>
          </li>
          <li>
            <Link href={"/"}></Link>
          </li>
        </ul>

        <div>
          {/* <Image src={} alt=""></Image>
          <Image src={} alt=""></Image>
          <Image src={} alt=""></Image> */}
          <div>
            <button>Телефонувати</button>
          </div>
        </div>
    </header>
  )
}

export default Header
