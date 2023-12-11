// hooks
import React, {useEffect, useState} from "react";

// react tags
import Image from "next/image";
import Link from "next/link";

// style
import s from "./About.module.scss";

//modules
import { getComments } from "@/modules/comments";

//interfaces 
import { Com } from "@/interfaces";
// components
import Partners from "@/components/partners";
import RewiewCard from "@/components/rewiewCard";
import FaqQuestions from "@/components/faqQuestions";

interface Props{
  rewiews: Com[];
}
const About = ({rewiews}: Props) => {
  // rews == rewiews 
  const [rews, setRewiews] = useState<Com[] | null>(rewiews)
  // FAQ
  const [FAQ, setFAQ] = useState<any>(null)

  // FAQ titles and descriptions array
  const FAQ_array = [
    {title: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", desc: "lorem1", id: 1},
    {title: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", desc: "lorem2", id: 2},
    {title: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", desc: "lorem3", id: 3},
    {title: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", desc: "lorem4", id: 4},
  ]
  return (
    <>
      <Partners />
      <Link href={`/`}>home</Link>
      <section className={`${s.history} container`}>
        <h2>Наша історія</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni
          esse cumque beatae minus molestiae reiciendis similique, voluptas
          assumenda in animi ex incidunt, non ducimus. Facilis doloremque
          ratione quod atque?
        </p>
        <Link target="_blank" href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3s`}>Дізнатися більше</Link>
      </section>
      <section className={`${s.name} container`}>
        <div className={s.FAQ}>
          <h2>Часті запитання</h2>
          <div>
            {FAQ_array.map((e)=>{
              return(
                <FaqQuestions key={e.id} title={e.title} desc={e.desc}/>
              )
            })}
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
        <div className={s.reviews__items}>
        {/* {
          rews ? (
            rews.map((rewiew: Com)=>{
              return <RewiewCard/>
            })
          ) : (
            <div className={s.rewiew__load}> Rewiews are loading...</div>
          )}  */}
        </div>
      </section>
    </>
  );
};

// SSR get rewiews
export async function getServerSideComments() {
  const com = new getComments();
  const data = await com.getData(`comments`)
  return { props: { rewiews: data}}
}

export default About;
