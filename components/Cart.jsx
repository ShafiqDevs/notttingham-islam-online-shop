import React, { useState } from "react";
import { BsCart, BsCartFill } from "react-icons/bs";

export default function Cart({ size, count }) {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartVisibility = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <div className="mt-[2px] md:relative">
        <div className="relative">
        <div className={`${count>0? null: "hidden"} absolute top-[-1.4rem] left-[1rem] aspect-square min-w-[24px] bg-orange-600 rounded-full p-1`}><h1 className="text-center text-sm">{count}</h1></div>
          <button
            className={`${size || "text-[26px]"} hover:text-orange-700`}
            onClick={() => handleCartVisibility()}
          >
            <span>{count > 0 ? <BsCartFill /> : <BsCart />}</span>
          </button>
        </div>

        <div
          className={`${
            cartOpen ? null : "hidden"
          } bg-orange-400/40 absolute overflow-y-auto overscroll-none  w-full h-[75vh] top-[50%] left-0 md:w-[300px] md:h-[500px] md:top-9 md:left-[-150px]`}
        >
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
          <h1>sdgfss</h1>
        </div>
      </div>
    </div>
  );
}
