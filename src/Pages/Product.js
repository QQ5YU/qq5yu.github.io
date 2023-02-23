import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../components/Load';
import { useAxiosGet } from '../Hooks/HttpRequest';

export const Product = () => {
    let content;
    const { id } = useParams();
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
    let product = useAxiosGet(url);

    if(product.loading) {
       content = <Loader />
    }

    if(product.data) {
        content = 
        <div className='flex flex-col w-3/4 items-center m-auto'>
            <h3 className=' w-full bg-red-400 p-3 text-white '>{product.data.name}</h3>
            <img className="py-2 w-full" src={product.data.images[0].imageUrl} alt="productImg" />
            <h5 className='p-3 w-full bg-slate-600 mr-auto font-bold text-white'>${product.data.price}</h5>
            <p className='my-2 p-3 w-full bg-gray-200'>{product.data.description}</p>
        </div>;
    }

    if(product.error){
        content = <p className="flex justify-center">There was an error please refresh or try again later...</p>
    }
  return (
    <div className='w-full h-full py-12'>
        <h1 className='text-center text-lg font-bold text-slate-600  py-3'>This is the product page. </h1>
        { content }
    </div>
  )
}
