import React, { useEffect, useState } from 'react';
import './productFilter.scss';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { fetchProductsSuccess, setBrandFilterList, setisChangeLocalStorage, setModelFilterList, setTest } from '../../../store/actions';

function ProductFilter() {

  const dispatch = useDispatch();
  const { products, isChangeLocalStorage } = useSelector((state) => state);
  const [brandList, setbrandList] = useState([]);
  const [selectedBrand, setselectedBrand] = useState([]);
  const [modelList, setmodelList] = useState([]);
  const [selectedModel, setselectedModel] = useState([]);

  useEffect(() => {
    if (products) {

      const model = [...new Set(products.map(product => product.model))];
      setmodelList(convertObj(model));
      dispatch(setModelFilterList(selectedModel));
      const brand = [...new Set(products.map(product => product.brand))];
      setbrandList(convertObj(brand));
      dispatch(setBrandFilterList(selectedBrand));
    }
  }, [products]);


  function convertObj(list) {
    const createdObj = list.map((item, index) => ({
      id: index + 1,
      value: item,
    }));
    return createdObj
  }

  function handleSelectedValue(e, type) {
    if (type === 'brand') {
      setselectedBrand(e);
      dispatch(setBrandFilterList(e));
    } else if (type === 'model') {
      setselectedModel(e);
      dispatch(setModelFilterList(e));
    }
  }
  function sortList(sortType) {
    let newProducts = [];
    switch (sortType) {
      case 'Oldtonew':
        newProducts = products.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        break;
      case 'Newtoold':
        newProducts = products.sort((b, a) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        break;
      case 'Pricehighttolow':
        newProducts = products.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case 'Pricelowtohigh':
        newProducts = products.sort((b, a) => {
          return b.price - a.price;
        });
        break;

      default:
        newProducts = products;
        break;
    }
    dispatch(fetchProductsSuccess(newProducts));
    dispatch(setisChangeLocalStorage(!isChangeLocalStorage));
  }

  return (
    <div className='product-filter-container' >
      <div className='pf-item' >
        <span className='pf-label' >Sort By</span>
        <div className='pf-item-card' >
          <div className='pf-radio-btn' >
            <input className="form-check-input" type="radio" value={1} id='test' name='sort' onClick={()=>{sortList('Oldtonew')}} />
            <span for='test' >
              Old to new
            </span>
          </div>
          <div className='pf-radio-btn' >
            <input className="form-check-input" type="radio" value={1} id='test' name='sort' onClick={()=>{sortList('Newtoold')}} />
            <span for='test' >
              New to old
            </span>
          </div>
          <div className='pf-radio-btn' >
            <input className="form-check-input" type="radio" value={1} id='test' name='sort' onClick={()=>{sortList('Pricehighttolow')}} />
            <span for='test' >
              Price hight to low
            </span>
          </div>
          <div className='pf-radio-btn' >
            <input className="form-check-input" type="radio" value={1} id='test' name='sort' onClick={()=>{sortList('Pricelowtohigh')}} />
            <span for='test' >
              Price low to high
            </span>
          </div>
        </div>
      </div>

      <div className='pf-item' >
        <span className='pf-label' >Brands</span>
        <div className='pf-item-card' >
          <Select
            value={selectedBrand}
            onChange={(e) => { handleSelectedValue(e, 'brand') }}
            options={brandList}
            isDisabled={!(brandList.length > 0)}
            isMulti={true}
            isClearable={true}
            getOptionLabel={(option) => option.value}
            getOptionValue={(option) => option.id}
            placeholder="Search brand.."
          />
        </div>
      </div>

      <div className='pf-item' >
        <span className='pf-label' >Model</span>
        <div className='pf-item-card' >
          <Select
            value={selectedModel}
            onChange={(e) => { handleSelectedValue(e, 'model') }}
            options={modelList}
            isDisabled={!(modelList.length > 0)}
            isMulti={true}
            isClearable={true}
            getOptionLabel={(option) => option.value}
            getOptionValue={(option) => option.id}
            placeholder="Search model.."
          />
        </div>
      </div>
    </div>
  )
}

export default ProductFilter