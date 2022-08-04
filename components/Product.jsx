import React, { useState } from "react";
import Image from "next/image";
import { BsCartPlusFill } from "react-icons/bs";
import _ from "lodash";

export default function Product({
  onAdd,
  _id,
  item_Name,
  price,
  totalPrice,
  text,
  imgUrl,
}) {
  const [quantity, setQuantity] = useState(1);
  let quantityAlert = false;

  function handleChange(event) {
    const val = event.target.value;
    setQuantity(val);
  }

  return (
    <div className="relative rounded-lg overflow-hidden max-w-[300px] min-h-[440px] bg-slate-300 shadow-md shadow-black hover:shadow-white">
      <h1 className=" absolute left-0 top-0 w-fit z-[1] text-orange-400 font-semibold text-xl rounded-br-lg p-1 bg-blue-100 shadow-md shadow-slate-400">{`£${totalPrice.toFixed(
        2
      )}`}</h1>
      <Image src={imgUrl} width={300} height={300} alt={`product - ${item_Name}`} />
      <div className=" font-semibold text-black text-center px-2">
        <h1 className="text-2xl border-b-2">{_.startCase(item_Name)}</h1>
        <p className="border-b-2">{text}</p>
      </div>
      <div className="flex justify-end gap-3 mr-2 mb-2 p-2">
        <input
          className="bg-white shadow-md rounded text-black text-center"
          onChange={handleChange}
          value={quantity}
          min={0}
          max={10}
          type="number"
        />
        <button
          className={`border px-4 py-1 shadow-md text-xl  ${
            quantity < 1 ? "bg-gray-600" : "hover:bg-orange-600"
          }`}
          onClick={(e) => {
            const product_in_grid = {
              product_id: _id,
              item_Name: item_Name,
              price: price,
              quantity: parseInt(quantity),
              totalPrice: price * quantity,
              imgUrl: imgUrl,
            };
            onAdd(product_in_grid);
          }}
          disabled={true && quantity < 1}
        >
          <BsCartPlusFill />
        </button>
      </div>
    </div>
  );
}
