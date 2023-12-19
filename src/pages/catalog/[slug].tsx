import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'
// styles
import s from './single.module.scss'
// reducers
import { addItemToCart } from "@/store/features/cart";
import { addItemToFavourites } from '@/store/features/favourite';
import { useDispatch } from 'react-redux';
// module
import { getProducts } from '@/modules/products'
// components
import PopularProducts from '@/components/popularProducts'
// interfaces
import { ProdNoProps } from '@/interfaces'
// Image
import Image from 'next/image'
import img_fav from "@/assets/icons/productCard/favourites.svg"

interface Props{
    prods: ProdNoProps[]
}

const SingleProduct = ({prods}: Props) => {
    // redux
    const dispatch = useDispatch()
    // router
    const router = useRouter()
    const { slug, id } = router.query
    // init
    const prod = new getProducts()
    // states
    const [product, setProduct] = useState<any>()
    const [image, setImage] = useState<string>()
    
    // onLoad
    useEffect(()=>{
        slug && prod.getData(`products/${id}`).then((data)=>{
            setProduct(data)
        })
    }, [slug])
    return (
        <>
            <main className={'container'}>
                <div className={s.hero}>
                <div className={s.hero__carousel}>
                    <div className={s.hero__carousel_thumbnail}>
                        <div><Image src={product?.image} alt='' width={50} height={50} unoptimized></Image></div>
                    </div>
                    <div className={s.hero__carousel_images}>
                        <div><Image src={product?.image} alt='' width={50} height={50}></Image></div>
                        <div><Image src={product?.image} alt='' width={50} height={50}></Image></div>
                        <div><Image src={product?.image} alt='' width={50} height={50}></Image></div>
                        <div><Image src={product?.image} alt='' width={50} height={50}></Image></div>
                        <div><Image src={product?.image} alt='' width={50} height={50}></Image></div>
                    </div>
                </div>

                <div className={s.hero__info}>
                    
                    <div className={s.hero__info_first}>
                        <div className={s.hero__info_first_holder}>
                            <h3>{product?.title}</h3>
                            <Link href={'#'}>Продавець</Link>
                        </div>

                        <div className={s.hero__info_first_category}>{product?.category}</div>

                        <div className={s.hero__info_first_proportions}>
                            <ul>
                                <li>Матеріал: Tegranit Plus гранітна крихта</li>
                                <li>Монтаж 2 в 1: під стільницю або на стільницю</li>
                                <li>Розміри: 456×456 мм</li>
                                <li>Чаша: 400×400×200 мм</li>
                                <li>Ширина кухонної секції: 60см</li>
                                <li>Ручний вентиль PerfectFlow 3½, корзина HelixPro</li>
                            </ul>
                        </div>

                        <div className={s.hero__info_first_standartColor}>Колір виробника чорний</div>

                        <div className={s.hero__info_first_colorBtns}>
                            <button className={s.activeBtn}>чорний</button>
                            <button>графіт</button>
                            <button>білий</button>
                        </div>

                        <div className={s.hero__info_first_price}>
                            <h3>{product?.price} грн</h3>
                            <div>В наявності</div>
                        </div>

                        <div className={s.hero__info_first_btns}>
                            <button onClick={()=>{dispatch(addItemToCart(Number(id)))}}>Добавити в корзину</button>
                            <button onClick={()=>{dispatch(addItemToFavourites(Number(id)))}}>
                                <div>У бажання</div>
                                <Image src={img_fav} alt=''></Image>
                            </button>
                        </div>
                    </div>
                    <div className={s.hero__info_openBtns}>
                        <div>
                            <button className={s.activeBtn}>Всі характеристики</button>
                            <button>Опис</button>
                            <button>Відгуки</button>
                        </div>
                        
                        <div>
                            <button>Схожі товари</button>
                        </div>
                    </div>
                    
                </div>
                </div>

                <div className={s.characteristics}>
                    <h3 className={s.characteristics__title}>ХАРАКТЕРИСТИКИ</h3>
                    <div className={s.characteristics__container}>
                        <div className={s.characteristics__container_item}>
                            <div><div>Model:</div><div>Acer Aspire Vero Gray PC AV15-51-56DG</div></div>
                            <div className={s.line}></div>
                            <div><div>Color:</div><div>Gray</div></div>
                            <div className={s.line}></div>
                            <div><div>Material:</div><div>Metal</div></div>
                            <div className={s.line}></div>
                            <div><div>Operating System:</div><div>Windows 10</div></div>
                            <div className={s.line}></div>
                            <div><div>Producting country:</div><div>China</div></div>
                            <div className={s.line}></div>
                            <div><div>Screen diagonal:</div><div>15.6</div></div>
                        </div>
                        <div className={s.characteristics__container_item}>
                            <div><div>Processor generation:</div><div>Intel Core i3-6006U</div></div>
                            <div className={s.line}></div>
                            <div><div>Weight:</div><div>2.2</div></div>
                            <div className={s.line}></div>
                            <div><div>Type of RAM:</div><div>DDR4-2133</div></div>
                            <div className={s.line}></div>
                            <div><div>Network adapters:</div><div>WI-FI Bluetooth</div></div>
                            <div className={s.line}></div>
                            <div><div>The amount of RAM:</div><div>8 GB</div></div>
                            <div className={s.line}></div>
                            <div><div>Type of RAM:</div><div>DDR4-2133</div></div>
                        </div>
                    </div>
                </div>

                <div className={s.desc}>
                    <h3 className={s.desc__title}>ОПИС</h3>
                    <p className={s.desc__text}>{product?.description}</p>
                </div>
                {/* @ts-ignore */}
                <PopularProducts key={1} title="Схожі товари" data={prods}/>
            </main>
        </>
    )
}

// SSR
export async function getServerSideProps() {
    // init
    const prod = new getProducts();
    const products = await prod.getData('products').then((data: [])=>{return data})
    
    return { props: { prods: products} }
  }

export default SingleProduct