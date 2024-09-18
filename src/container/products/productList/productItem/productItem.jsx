import React from 'react';
import './productItem.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setisChangeLocalStorage } from '../../../../store/actions';

function ProductItem(props) {
    const dispatch = useDispatch();
    const {isChangeLocalStorage} = useSelector((state) => state);

    function addBasket(product) {
        let basket = JSON.parse(localStorage.getItem('basket'));
        if(basket === null){
            localStorage.setItem('basket', JSON.stringify([product]));
        } else {
            basket.push(product);
            localStorage.setItem('basket', JSON.stringify(basket));
        }
        dispatch(setisChangeLocalStorage(!isChangeLocalStorage));
    }
    return (
        <div className='product-item-container' >
            {
                props.currentItems &&
                props.currentItems.map((productItem, key) => (
                    <div className='product-item-box' id={key} >
                        <div className='pi-image-box' >
                            <img src={productItem.image} alt="img" />
                        </div>
                        <span className='pi-price' >{productItem.price}</span>
                        <span className='pi-name' >{productItem.name}</span>
                        <button onClick={()=>{addBasket(productItem)}} className='btn btn-primary pi-add-btn' >Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductItem