import React from "react";
import { Link } from "react-router-dom";
export const ProductCard = (props) => {
  return (
    <div className="flex flex-col border-2 rounded-md w-5/6 p-2 mb-6 items-center m-auto">
      <h3 className=" w-full bg-red-400 p-3 text-white ">
        {props.product.name}
      </h3>
      <img
        className="py-2 w-full"
        src={props.product.images[0].imageUrl}
        alt="productImg"
      />
      <h5 className="my-2 w-full mr-auto font-bold text-sm">
        ${props.product.price}
      </h5>
      <p className="my-2  w-full ">{props.product.description}</p>
      <Link
        className="transition-all w-full mt-2 h-10 bg-sky-900 text-center hover:bg-slate-500"
        to={`/products/${props.product.id}`}
      >
        <button className="m-2 text-white font-bold">View</button>
      </Link>
    </div>
  );
};
