import React from 'react';
import './header.scss';
import { CiSearch, CiUser } from "react-icons/ci";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsRequest, fetchProductsSuccess } from '../../store/actions';

function Header() {

    const dispatch = useDispatch();
    const { products, totalPrice } = useSelector((state) => state);

    function handleChangeSearch(e) {
        let searchWord = e.target.value;
        
        let newProductList = products.filter((item) => (item.name.toLowerCase().includes(searchWord.toLowerCase())))
        console.log("🚀 ~ handleChangeSearch ~ newProductList:", newProductList, searchWord, products)

        dispatch(fetchProductsSuccess(newProductList));

        if(searchWord === ''){
            dispatch(fetchProductsRequest());

        }

            // dispatch(fetchProductsSuccess(newProducts));
            // dispatch(setisChangeLocalStorage(!isChangeLocalStorage));
          
    }

    return (
        <div className='header-container' >
            <span className='banner' >Eteration</span>
            <div className='input-container' >
                <CiSearch className='i' />
                <input className='search-bar' placeholder='Search' onChange={(e)=>{handleChangeSearch(e)}} />
            </div>
            <div className='basket-profile-container' >
                <div className='basket-price'>
                    <RiShoppingBasketLine />
                    <span className='basket-amount' >{totalPrice}₺</span>
                </div>
                <div className='user-info' >
                <CiUser />
                <span className='user-name' >Kerem</span>
                </div>
            </div>
        </div>
    )
}

export default Header