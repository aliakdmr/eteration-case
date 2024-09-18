import React, { useState, useEffect } from 'react'
import './productList.scss'
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
import ProductItem from './productItem/productItem';
import { useSelector, useDispatch } from 'react-redux';


function ProductList() {
    const dispatch = useDispatch();
    const { products, brandFilterList, modelFilterList, isChangeLocalStorage } = useSelector((state) => state);
    const [productList, setproductList] = useState(products);

    useEffect(() => {
        setproductList(products);

    }, [products]);

    useEffect(() => {
        const validModels = modelFilterList.map(model => model.value);
        const validBrands = brandFilterList.map(brand => brand.value);

        const filteredData = products.filter(item =>
            validModels.includes(item.model) || validBrands.includes(item.brand)
        );

        setproductList(filteredData)
        if(!(brandFilterList.length > 0 ) && !(modelFilterList.length > 0)){
            setproductList(products)
        };
        //dispatch(setisChangeLocalStorage(!isChangeLocalStorage));
    }, [brandFilterList, modelFilterList]);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productList?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productList?.length / itemsPerPage);
    const [activeAnimation, setactiveAnimation] = useState(null)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productList.length;

        if (event.selected % 2 === 0) {
            setactiveAnimation('animate__animated animate__fadeIn');
        } else {
            setactiveAnimation('animate__animated animate__fadeInUp');
        }
        setItemOffset(newOffset);
    };


    return (
        <div className='product-list-container' >
            <div className='newspage-news' >
                <div className={isChangeLocalStorage} >
                    <ProductItem currentItems={currentItems} />
                </div>
                <ReactPaginate
                    previousLabel="Prev"
                    previousClassName="prev fa fa-caret-left"
                    nextLabel="Next"
                    nextClassName="next fa fa-caret-right"
                    breakLabel="..."
                    pageLinkClassName="page-link"
                    pageClassName="page"
                    breakClassName={""}
                    pageCount={pageCount ?? 1}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={8}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    subContainerClassName="pages pagination"
                    activeClassName="active"
                />
            </div>

        </div>
    )
}

export default ProductList