import { ADD_TO_CART } from "../Constant";
export const AddToCart=(data)=>{
    return{
        type: ADD_TO_CART,
        data: data
    }
}