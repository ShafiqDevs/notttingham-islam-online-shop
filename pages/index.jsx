import Head from "next/head";
import Image from "next/image";
import NavBar from "./../components/NavBar";
import Hero from "./../components/Hero";
import quranCollection from "../models/quranCollection";
import db from "../utils/db";
import Product from "../components/Product";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home({ backendData }) {
  const [cartItems, setCartItems] = useState([]);

  function addProductToCart(product) {
    setCartItems((prev) => {
      const index = prev.findIndex(p => p.product_id === product.product_id);
      if (index > -1) {
        prev[index].quantity += product.quantity;
        prev[index].totalPrice = prev[index].price * prev[index].quantity;
        return [...prev];
      } else{
        return [...prev, product];
      }

      return [...prev, product];
    });
  }
  function removeItem(id, all) {
    if (all) {
      setCartItems([]);
      return;
    }
    setCartItems((prev) => {
      return cartItems.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <>
      <Head>
        <title>Nottingham Islam Shop</title>
        <meta name="Nottingam Islam Shop" content="Quran Translations" />
        <link rel="icon" href="/niic.png" />
      </Head>{" "}
      <NavBar scrollAt={244} cartItems={cartItems} removeItem={removeItem} />{" "}
      <Hero heading="Nottingham Islam Shop" message="Multiple Quran translations available" />{" "}
      <div className=" w-full bg-gradient-to-r from-green-700/30 to-orange-700/30  py-[7rem] px-6">
        <div className="border rounded-lg md:p-4">
          <>
            {" "}
            {/* list products in grid view*/}
            <h1 className="text-2xl md:text-4xl text-center">
              Quran Translations
            </h1>
            <div className="md:grid grid-cols-3 lg:grid-cols-4 gap-4 flex flex-col items-center md:p-16 p-8">
              {backendData.map((product, index) => {
                return (
                  <div key={index}>
                    <Product
                      _id={product._id}
                      onAdd={addProductToCart}
                      item_Name={product.item_Name}
                      price = {product.deliveryCost + product.value}
                      totalPrice={product.deliveryCost + product.value}
                      text={`A box containing 999 Qurans`}
                      imgUrl={`https://iera.org/wp-content/uploads/2020/09/the-clear-quran-front-1.jpg`}
                    />
                  </div>
                );
              })}
            </div>
          </>
        </div>
      </div>
      <footer>
        <div className="bg-orange-500 flex flex-row justify-center items-center h-[150px]">
          <h1 className="text-black md:text-3xl text-2xl">
            Visit Our Centre in <span className=" border-b-2">Nottingham</span>{" "}
          </h1>{" "}
        </div>
      </footer>{" "}
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    //console.log("CONNECTING TO MONGO");
    await db.connect();
    //console.log("CONNECTED TO MONGO"); console.log("FETCHING DOCUMENTS");
    const docs = await quranCollection.find({}, "item_Name value deliveryCost");
    console.log("FETCHED DOCUMENTS"); // fetching _id item_Name value deliveryCost field from db

    return {
      props: {
        backendData: JSON.parse(JSON.stringify(docs)),
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }

  return { props: {} };
}
