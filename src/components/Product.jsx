import React, { useEffect, useState } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/ProductSlice';
const Product = () => {
    const dispatch=useDispatch();
    const {data: apiData}=useSelector(state=>state.products)

    function addTOcart(product){
        dispatch(add(product));
    }

    useEffect(() => {
          dispatch(getProducts());

    }, []);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {apiData?.map((item, index) => (
                    <div key={index} className="p-4 bg-white shadow rounded">
                        <div className="text-center">
                            <img src={item.image} alt={item.title} className="mx-auto w-40 h-40 object-cover rounded-md" />
                        </div>
                        <div className="text-lg font-semibold mt-2">{item.title}</div>
                        <div className="text-gray-500">{item.price}</div>
                        <div className="mt-4 text-center">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={()=>addTOcart(item)}> Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
