import React from 'react'
import {useState} from 'react'
// imgs
import Image from 'next/image';
import ARROW_FAQ_IMG from "@/assets/imgs/FAQ/FAQ_ARROW.svg";

// styles
import s from './faqQuestions.module.scss'

interface Props{
    title: string,
    desc: string
}

const FaqQuestions = (props: Props) => {
    // state

    // to see if the desc is opened or closed
    const [descStatus, setDeskStatus] = useState<boolean>(false)

    // to open/close desc
    const statusToogle = ()=>{
        setDeskStatus(!descStatus)
    }

    return (
        <>
            <div className={s.FAQ__item}>
                <div className={s.FAQ__item_container}>
                    <p>
                        {props.title}
                    </p>
                    <Image onClick={statusToogle} className={`${s.FAQ__item_container_img} ${descStatus ? s.active : ''}`} src={ARROW_FAQ_IMG} alt="arrow_img" />
                </div>
                <div className={`${s.FAQ__item_desc} desc ${descStatus ? s.active : ''}`}>
                    {props.desc}
                </div>
            </div>
        </>
    )
}

export default FaqQuestions