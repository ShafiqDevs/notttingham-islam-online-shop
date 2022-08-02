import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import _ from "lodash";

export default function CartItem({
  id,
  imgUrl,
  item_Name,
  totalPrice,
  quantity,
  removeItem,
}) {
  return (
    <div className="flex flex-row pb-2 m-2 border-b gap-2 text-lg relative">
      <Image src={imgUrl} alt="img" width={90} height={90} />
      <div className="flex flex-col grow">
        <div className="">{_.startCase(item_Name)}</div>
        <div className="flex flex-row gap-3">
          <h1>
            <small>qnt: </small>
            {`${quantity}x`}
          </h1>{" "}
          <h1>{`£${totalPrice}`}</h1>
        </div>
      </div>
      <button
        className="absolute top-0 right-0"
        onClick={() => {
          removeItem(id);
        }}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}
