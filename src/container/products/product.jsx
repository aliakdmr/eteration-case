import React, {useEffect} from 'react';
import './product.scss';
import ProductFilter from './productFilter/productFilter'
import ProductList from './productList/productList'
import ProductBasket from './productBasket/productBasket'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest, setisChangeLocalStorage, setOrgProductList } from '../../store/actions';

function Product() {
  const dispatch = useDispatch();
  const {isChangeLocalStorage} = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProductsRequest());
    dispatch(setisChangeLocalStorage(!isChangeLocalStorage))
  }, []);

  return (
    <div className='product-container' >
        <ProductFilter />
        <ProductList />
        <ProductBasket />
    </div>
  )
}

export default Product