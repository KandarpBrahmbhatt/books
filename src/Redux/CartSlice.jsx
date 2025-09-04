import {createSlice} from "@reduxjs/toolkit"

const cartSlice =  createSlice ({
    name:  "cart",
    initialState :{
        cart:[]
    },          
    reducers:{
        addtoCard: (state,action) => {
            console.log(state,"state");
            
            console.log(action.payload,"Action");
             
            state.cart.push(action.payload)
        },
        removefromCart : (state,action) =>{
           state.cart = state.cart.filter(x => x.id !== action.payload.id)
        },

        
    }
})  

export default cartSlice.reducer;
export const {addtoCard,removefromCart} = cartSlice.actions;
