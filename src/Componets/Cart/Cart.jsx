import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../Cart/Cart.css"
// import { items } from '../../Alldata'
import { removefromCart } from '../../Redux/CartSlice'

removefromCart
const Cart = () => {
    const cartitems = useSelector(state=>state.cart.cart)
    
    const dispatch = useDispatch()
    return (
        <div>
      <h2>Cart items</h2>
      {
          
          cartitems.map(item =>{
            return(
                
                <div className='cart'>
                    <img src={item.imgSrc} alt="" />

                    <div> 
                        <h4>{item.title}</h4>
                        <button onClick={()=>dispatch(removefromCart({id : item.id}))}>Remove </button>
                    </div>

                </div>
            )
        })
      }
    </div>
  )
}

export default Cart
