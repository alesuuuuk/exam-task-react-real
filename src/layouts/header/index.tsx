import React from 'react'
import Link from 'next/link'
// style
import s from "./Header.module.scss"

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
    </header>
  )
}

export default Header
