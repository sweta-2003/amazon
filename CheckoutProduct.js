import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct(props) {
   const[{basket},dispatch]=useStateValue();
    const RemoveFromBasket =()=>{
           dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id,
           })
    }
   
  return (
    <div className='checkout-product'>
        
        <img className='checkout-product-img'src={props.image} />
    
    <div className='checkout-product-info'>
        <p className='checkout-product-title'>{props.title}</p>
        <p className='checkout-product-price'>
            <small>$</small>
            <strong>{props.price}</strong>
            </p> 

            <div className='checkout-product-rating'>
            {Array(props.rating).fill().map(()=>(<p>⭐</p>))}
            
                </div>  
                <button onClick={RemoveFromBasket}>Remove from basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct