import React from 'react'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import Product from './Product';
 


function Checkout(props) {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad'src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg' alt='checkout-ad'/>
        
        <div>
            <h2 className='checkout_title'>
           Your shopping basket
            </h2>
            {basket.map(item=>(
              <CheckoutProduct
              
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            
               />
            ))}
                                    
        </div>
        </div>

        <div className='checkout_right'>
            <h2> <Subtotal className='checkout_right' /></h2>
        </div>
    </div>
  )
}

export default Checkout