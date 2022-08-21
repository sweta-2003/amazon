import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
export default function Header() {

  const[{basket},dispatch]=useStateValue();
  return (
    <div className="header">
      <Link to={'/'}><img className='header_logo'
         src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='amazon-logo'/>
       </Link>
         <div className='header_search'>
        <input 
        className='header_searchInput'
        type='text'
        />
        <SearchIcon className='header_searchIcon'/>
        

        </div>
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_option_one'>hello</span>
                <span className='header_option_two'>sign in</span>
            </div>
            <div className='header_option'>
            <span className='header_option_one'>Return</span>
            <span className='header_option_two'>& Orders</span>
            </div>
            <div className='header_option'>
            <span className='header_option_one'>Your</span>
            <span className='header_option_two'>Prime</span>
            </div>
            <Link to={"/checkout"}><div className='ShoppingBasket'>
                <ShoppingBasketIcon  />
                <span className='header_option_two basket_count'>{basket.length}</span>
           </div></Link>
           
            
        </div>
        

    </div>
  );
}

