import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { Loader } from '../components/Load';
import { ProductCard } from '../components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequest';
export const Home = () => {
  let content = null;
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;
  let product = useAxiosGet(url);
  
  if(product.loading){
    content = <Loader />;
  }

  if(product.data) {
    content = 
    product.data.map((product, key) => 
      <div className='w-1/2' key={key}>
        <ProductCard product={product} />
      </div>
    )
  }

  return (
    <div className='home'>
      <h1 className='font-bold text-2xl m-3'>Beest Sellers</h1>
      <div className='flex justify-center flex-wrap'>
        {content}
      </div>
      
    </div>
  )
}
