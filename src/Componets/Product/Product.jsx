// import React, { useContext } from 'react'
import { items } from "../../Alldata.jsx"
import "../Product/Product.css"
import { Link } from 'react-router-dom'
// import { CartContext } from '../../Features/ContextProvider'

import { useDispatch } from "react-redux"
import { addtoCard } from "../../Redux/CartSlice.jsx"

import { ToastContainer } from "react-toastify";
 const Product = () => {
    // const { dispatch } = useContext(CartContext)

    const dispatch  = useDispatch()

    return (
        <>
            <div className="box">
                <div className="imges">
                    {items.map((prodct) => (
                        <div className='item'>
                            <Link to={`/product/${prodct.id}`} style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <img src={prodct.imgSrc} alt="" /></Link>
                            <p>{prodct.name}</p>

                            <p>{prodct.price}</p>

                            <button onClick={()=>dispatch(addtoCard(prodct))}>Add to card</button>
                            <ToastContainer />
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}

export default Product


