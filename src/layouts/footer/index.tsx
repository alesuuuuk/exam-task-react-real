import React from 'react'
import Link from 'next/link'
// style
import s from "./Footer.module.scss"
// images
import Image from 'next/image'
import img_location from "@/assets/imgs/footer/location.png"
import img_phone from "@/assets/imgs/footer/phone.png"
import img_mail from "@/assets/imgs/footer/mail.png"
import img_facebook from "@/assets/imgs/footer/facebook.png"
import img_telegram from "@/assets/imgs/footer/telegram.png"
import img_instagram from "@/assets/imgs/footer/instagram.png"

const Footer = () => {
  return (
    <footer className={`${s.footer}`}>
        <div className={`${s.container} container`}>
        <Link href={'/'} className={s.Logo}>LOGO</Link>

        <div className={s.locations}>
          <div className={`${s.locations__title} ${s.title}`}>location</div>
          <ul>
            <li>
              <Image src={img_location} alt=''></Image>
              <div>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</div>
            </li>
            <li>
              <Image src={img_location} alt=''></Image>
              <div>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</div>
            </li>
            <li>
              <Image src={img_location} alt=''></Image>
              <div>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</div>
            </li>
          </ul>
        </div>

        <nav>
          <ul>
            <li>
              <Link href={'/'}>Каталог</Link>
            </li>
            <li>
              <Link href={'/'}>Про нас</Link>
            </li>
            <li>
              <Link href={'/'}>Контакти</Link>
            </li>
            <li>
              <Link href={'/'}>FAQ</Link>
            </li>
          </ul>
        </nav>

        <div className={s.Info}>
          <div className={s.Info__contact}>

            <div className={`${s.Info__contact_title} ${s.title}`}>Contact us</div>
            <div className={s.Info__contact_container}>
              <div>
                <Image src={img_mail} alt=''></Image>
                <div>logo@figma.com</div>
              </div>
              <div>
              <Image src={img_phone} alt=''></Image>
              <div>+3800065628</div>
              </div>
            </div>

          </div>

          <div className={s.Info__socials}>
            <div className={`${s.Info__socials_title} ${s.title}`}>Follow us</div>
            <div>
              <Link target='_blank' href={'https://www.facebook.com/'}><Image src={img_facebook} alt=''></Image></Link>
              <Link target='_blank' href={'https://web.telegram.org/a/'}><Image src={img_telegram} alt=''></Image></Link>
              <Link target='_blank' href={'https://www.instagram.com/'}><Image src={img_instagram} alt=''></Image></Link>
            </div>
          </div>

          <div>

          </div>
        </div>

        </div>
    </footer>
  )
}

export default Footer
