import React from "react";
// style
import s from "./Partners.module.scss";
// imgs
import Image from "next/image";
import BOSCH from "@/assets/imgs/BOSCH_LOGO.svg"
import FRANKE from "@/assets/imgs/FRANKE_LOGO.svg"
import TEKA from "@/assets/imgs/TEKA_LOGO.svg"
import FABIANO from "@/assets/imgs/FABIANO_LOGO.jpg"
const Partners = () => {
  return (
    <>
      <section className={s.partners}>
        <Image src={BOSCH} alt="bosch"/>
        <Image src={FRANKE} alt="franke"/>
        <Image src={TEKA} alt="TEKA"/>
        <Image src={FABIANO} alt="fabiano"/>

        
      </section>
    </>
  );
};


export default Partners;
