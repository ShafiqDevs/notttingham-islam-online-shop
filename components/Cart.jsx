import React, {useState} from "react";
import {BsCart, BsCartFill} from "react-icons/bs";
import CartItem from "./CartItem";
import {v4 as uuidv4} from "uuid";
import Router from "next/router";
import axios from "axios";

export default function Cart({cartItems, removeItem, myWidth}) {
  const [cartOpen,
    setCartOpen] = useState(false);
  const [inShoppingCart,
    setInShoppingCart] = useState(true);
  const [customer,
    setCustomer] = useState({
    fName: "",
    lName: "",
    Email: "",
    Property: "",
    Street: "",
    Town: "",
    County: "",
    Country: "",
    PostCode: "",
    Telephone: ""
  });

  let cartTotalAmount = 0;

  cartItems.forEach((item) => {
    cartTotalAmount += item.totalPrice;
  });

  const handleCartVisibility = () => {
    setCartOpen(!cartOpen);
  };

  const handleCustomer = (e) => {
    const {name, value} = e.target;
    setCustomer((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  async function checkout() {
    const res = await axios.post(`/api/checkout`, {
      cartElements: JSON.stringify(cartItems),
      customer: JSON.stringify(customer)
    });
    Router.replace(res.data.checkout_session.url);
  }

  return (
    <div>
      <div className="mt-[2px] md:relative">
        <div className="relative">
          <div
            className={`${cartItems.length > 0
            ? null
            : "hidden"} absolute top-[-1.4rem] left-[1rem] aspect-square min-w-[24px] bg-orange-600 rounded-full p-1`}>
            <h1 className="text-center text-sm">{cartItems.length}</h1>
          </div>
          <button
            className={`text-[26px] hover:text-orange-700`}
            onClick={() => handleCartVisibility()}>
            <span>{cartItems.length > 0
                ? <BsCartFill/>
                : <BsCart/>}</span>
          </button>
        </div>

        <div
          className={`${cartOpen
          ? null
          : "hidden"} bg-black/90 text-white border absolute w-full h-[75vh] top-[50%] left-0 md:w-[350px] md:h-[500px] md:top-9 md:left-[-150px]`}>
          {/* shoping cart */}
          <div
            className={`${inShoppingCart
            ? null
            : "hidden"} flex flex-col w-full h-full overflow-y-auto overscroll-none`}>
            {/* cart item */}
            {cartItems.map((cartItem, index) => {
              return (
                <div key={uuidv4()}>
                  {" "}
                  <CartItem
                    id={index}
                    imgUrl={cartItem.imgUrl}
                    item_Name={cartItem.item_Name}
                    totalPrice={cartItem.totalPrice}
                    quantity={cartItem.quantity}
                    removeItem={removeItem}/>
                </div>
              );
            })}
            <div className="border-t mt-auto p-7 gap-4 flex flex-col">
              <div className="flex flex-row text-base">
                <h1 className="">TOTAL PRICE</h1>{" "}
                <h1 className="ml-auto">{`£${cartTotalAmount.toFixed(2)}`}</h1>
              </div>
              <div className="flex flex-col gap-2 text-xl">
                <button
                  className="border bg-white/70 text-black p-3 hover:bg-orange-400"
                  onClick={() => {
                  if (cartItems.length > 0) 
                    setInShoppingCart(!inShoppingCart);
                  }}>
                  CHECKOUT
                </button>
                <button
                  className="border p-3 hover:bg-red-400"
                  onClick={() => {
                  removeItem(null, true);
                }}>
                  CLEAR CART
                </button>
              </div>
            </div>
          </div>
          {/* billing form */}
          <div
            className={`${inShoppingCart
            ? "hidden"
            : null} flex flex-col w-full h-full gap overflow-y-scroll overscroll-none `}>
            <div className={`flex flex-col w-full h-full gap p-4 text-[18px]`}>
              <div className={`flex flex-row min-w-full gap-2 `}>
                <input
                  className={`w-[50%] border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="fName"
                  placeholder="first name"
                  required
                  value={customer.fName}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
                <input
                  className={`w-[50%] border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="lName"
                  placeholder="last name"
                  required
                  value={customer.lName}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
              </div>
              <div className={`flex flex-row flex-wrap gap-2 p-1 mt-4`}>
                <input
                  className={`w-full border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="Email"
                  placeholder="email address"
                  required
                  value={customer.Email}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
                <input
                  className={` w-full border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="Property"
                  placeholder="address line"
                  required
                  value={customer.Property}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
                <input
                  className={` w-full border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="Street"
                  placeholder="street"
                  required
                  value={customer.Street}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
                <input
                  className={`w-full border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="Town"
                  placeholder="town"
                  required
                  value={customer.Town}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
                <input
                  className={`w-full border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="County"
                  placeholder="county"
                  required
                  value={customer.County}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
              </div>
              <div className={`flex flex-col`}>
                <input
                  className={`w-[50%] border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="Country"
                  placeholder="country"
                  required
                  value={customer.Country}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
                <input
                  className={`w-[50%] border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="text"
                  name="PostCode"
                  placeholder="post code"
                  required
                  value={customer.PostCode}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
              </div>
              <div className={`flex flex-col`}>
                <input
                  className={`w-[50%] border-b focus:outline-none focus:border-orange-500 bg-transparent p-1`}
                  type="tel"
                  name="Telephone"
                  placeholder="telephone"
                  required
                  value={customer.Telephone}
                  onChange={(e) => {
                  handleCustomer(e);
                }}/>
              </div>
            </div>

            {/* buttons */}
            <div className="border-t mt-auto p-7 gap-4 flex flex-col">
              <div className="flex flex-row text-base">
                <h1 className="">TOTAL PRICE</h1>{" "}
                <h1 className="ml-auto">{`£${cartTotalAmount.toFixed(2)}`}</h1>
              </div>
              <div className="flex flex-col gap-2 text-xl">
                <button
                  className="border bg-white/70 text-black p-3 hover:bg-orange-400"
                  onClick={() => {
                  console.log("Line 70:", JSON.stringify(cartItems));
                  checkout();
                }}>
                  PLACE ORDER
                </button>
                <button
                  className="border p-3 hover:bg-red-400 text-center"
                  onClick={() => {
                  setInShoppingCart(!inShoppingCart);
                }}>
                  BACK TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
