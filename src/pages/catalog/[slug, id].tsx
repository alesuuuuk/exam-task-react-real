import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// styles
import s from './single.module.scss'
// module
import { getProducts } from '@/modules/products'

const singleProduct = () => {
    // router
    const router = useRouter()
    const { slug, id } = router.query
    // init
    const prod = new getProducts()
    // states
    const [product, setProduct] = useState<any>()
    
    
    // onLoad
    useEffect(()=>{
        slug && prod.getData(`products/${id}`).then((data)=>{
            setProduct(data)
        })

        console.log(product)
    }, [slug])

    return (
        <>
            <div>id : {id}</div>
        </>
    )
}

export default singleProduct