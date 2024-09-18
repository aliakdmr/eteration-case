import React, { useEffect, useState } from 'react';
import './productBasket.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setBrandFilterList, setisChangeLocalStorage, setTest, setTotalPrice } from '../../../store/actions';


function ProductBasket() {
  const dispatch = useDispatch();
  const { isChangeLocalStorage } = useSelector((state) => state);
  const [productList, setproductList] = useState(null);
  const [basketTotalPrice, setBasketTotalPrice] = useState('');

  useEffect(() => {
    let basket = JSON.parse(localStorage.getItem('basket'));

    basket = groupById(basket)

    setproductList(basket);
    let basketPrice = 0;
    if (basket?.length > 0) {
      basket?.forEach(itemList => {
        basketPrice += (parseFloat(itemList[0].price)) * itemList.length;
      });
      setBasketTotalPrice(basketPrice);
      dispatch(setTotalPrice(basketPrice));
    } else{ 
      setBasketTotalPrice(0)
      dispatch(setTotalPrice(0));
    }

  }, [isChangeLocalStorage]);


  function changeProductCount(product, process) {
    if (process === 'inc') {
      let basket = JSON.parse(localStorage.getItem('basket'));
      if (basket === null) {
        localStorage.setItem('basket', JSON.stringify([product]));
      } else {
        basket.push(product);
        localStorage.setItem('basket', JSON.stringify(basket));
      }
      dispatch(setisChangeLocalStorage(!isChangeLocalStorage));
    } else if (process === 'desc') {
      let basket = JSON.parse(localStorage.getItem('basket'));

      let newBasket = [];
      let isDeleted = false;
      basket.forEach((item) => {
        if (item.id !== product.id || isDeleted) {
          newBasket.push(item);
        } else {
          isDeleted = true;
        }
      });
      localStorage.setItem('basket', JSON.stringify(newBasket));
      dispatch(setisChangeLocalStorage(!isChangeLocalStorage));
    }


  }

  function groupById(items) {
    const groupedItems = new Map();

    items?.forEach(item => {
      if (!groupedItems.has(item.id)) {
        groupedItems.set(item.id, []);
      }
      groupedItems.get(item.id).push(item);
    });

    return Array.from(groupedItems.values());
  }

  return (
    <div className='product-basket-container' >
      <div className='pb-item' >
        <span className='pb-label' >Cart</span>
        <div className='pb-item-card' >
          {
            productList?.map((itemList, index, array) => (
              <div className='pb-product-item' key={index} >
                <div className='pb-product-name' >
                  <span>{itemList[0].name}</span>
                  <span>{itemList[0].price}</span>
                </div>
                <div className='pb-btn-container' >
                  <button onClick={() => { changeProductCount(itemList[0], 'desc') }} >-</button>
                  <button>{itemList.length}</button>
                  <button onClick={() => { changeProductCount(itemList[0], 'inc') }} >+</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='pb-item' >
        <span className='pb-label' >Checkout</span>
        <div className='pb-item-card' >
          <div className='pb-basket-price' >
            <span>Total price: <b>{basketTotalPrice} ₺</b> </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBasket