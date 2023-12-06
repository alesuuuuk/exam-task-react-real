import React from "react";
import Image from "next/image";
import Link from "next/link";
// style
import s from "./About.module.scss";

// components
import Partners from "@/components/partners";

// imgs
import ARROW_FAQ_IMG from "@/assets/imgs/FAQ/FAQ_ARROW.svg";

const About = () => {
  return (
    <>
      <Partners />
      <Link href={`/`}>рщьу</Link>
      <section className={`${s.history} container`}>
        <h2>Наша історія</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni
          esse cumque beatae minus molestiae reiciendis similique, voluptas
          assumenda in animi ex incidunt, non ducimus. Facilis doloremque
          ratione quod atque?
        </p>
        <Link href={`#`}>Дізнатися більше</Link>
      </section>
      <section className={`${s.name} container`}>
        <div className={s.FAQ}>
          <h2>Часті запитання</h2>
          <div className={s.FAQ__item}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?
            </p>
            <Image src={ARROW_FAQ_IMG} alt="arrow_img" />
          </div>
          <div className={s.FAQ__item}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?
            </p>
            <Image src={ARROW_FAQ_IMG} alt="arrow_img" />
          </div>
          <div className={s.FAQ__item}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?
            </p>
            <Image src={ARROW_FAQ_IMG} alt="arrow_img" />
          </div>
          <div className={s.FAQ__item}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?
            </p>
            <Image src={ARROW_FAQ_IMG} alt="arrow_img" />
          </div>
        </div>
        <div className={s.form}>
          <h2>Замовити дзвінок</h2>
          <form>
            <input type="text" placeholder="Ім'я" />
            <input type="number" placeholder="Номер телефону" />
            <input type="text" className={s.form__input_comment} placeholder="Коментар" />
            <input className={s.form__input_submit} type="submit" value={`Отримати дзвінок`} />
          </form>
        </div>
      </section>
      <section className={`${s.reviews} container`}>
        <h2>Відгуки</h2>

      </section>
    </>
  );
};

export default About;
