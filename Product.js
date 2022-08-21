import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider';

function Product(props) {

  const [{basket},dispatch]=useStateValue();

  const addTobasket=()=>{
    //dispatch the item into dta layer

    dispatch({
      type: 'ADD_TO_BASKET',

      item:{
        id:props.id,
        title:props.title,
        image:props.image,
        price:props.price,
        rating:props.rating
      }
    })
  }
  return (
    <div className='product'>
       <div className='product_info'>
         
       <p>{props.title}</p>
        <p className='product_price'>
            <small >$</small>
            <strong>{props.price}</strong>
        </p>
        <div className='product_rating'>
            {Array(props.rating).fill().map((_,i)=>(<p>⭐</p>))}
            
            
        </div>
        </div>
         <img src={props.image} alt='product_img'/>
            <button onClick={addTobasket}>Add to basket</button>   
    {/** 'https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg'*/}
        
    </div>
  );
}

export default Product