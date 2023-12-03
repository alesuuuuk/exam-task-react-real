import React from 'react'
import Image from 'next/image'
// style
import s from "./About.module.scss"


const About = () => {
  return (
    <>
    <div className={s.history}>
        <h2>Наша історія</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni esse cumque beatae minus molestiae reiciendis similique, voluptas assumenda in animi ex incidunt, non ducimus. Facilis doloremque ratione quod atque?</p>
        <button>Дізнатися більше</button>
    </div>
    </>
  )
}

export default About