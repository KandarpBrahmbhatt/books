import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { items } from "../../Alldata.jsx"
import { useState, useEffect } from 'react'
import "../Product/Pd.css"
// import { useContext } from 'react'
// import { CartContext } from '../../Features/ContextProvider'

const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState(0)

    // const { dispatch } = useContext(CartContext)

    useEffect(() => {
        const filterProduct = items.filter((product) =>
            product.id == id
        )
        setProduct(filterProduct[0]);

    }, [id])

    return (

        <>
            <div className="container">

                <div className="left-img">
                    <img src={product.imgSrc} alt="" />
                    <img src={product.imgSrc} alt="" />
                    <img src={product.imgSrc} alt="" />
                    <img src={product.imgSrc} alt="" />
                    <img src={product.imgSrc} alt="" />
                </div>

                <div className="img">
                    <img src={product.imgSrc} alt="" />
                </div>

                <div className="detail">
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                    <p>{product.price}</p>

                    <div className="btn">

                        {/* <button onClick={() => dispatch({ type: 'Add', product: prodct })} >Add to card</button> */}
                        <Link to={"/"}><button id='back'>Back</button ></Link>
                    </div>

                </div>
            </div >

        </>
    )
}

export default ProductDetail
