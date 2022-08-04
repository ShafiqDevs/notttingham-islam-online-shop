import React from "react";
import Feedback from "../components/Feedback";
import NavBar from "../components/NavBar";
import db from "../utils/db";
import quranCollection from "../models/quranCollection";
import Order from "../models/Order";

export default function Process({pass}) {
  return (
    <div className="bg-gradient-to-r from-green-700/30 to-orange-700/30 h-screen w-full">
      <NavBar cartItems={[]} />
      <Feedback
        pass={pass}
        Header={`Payment was Successful`}
        subHeader={`You will be redirected to the Home page`}
        btnText={`Go to Home Page`}
      />
    </div>
  );
}

export async function getServerSideProps(context){
  if (context.query.session_id) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(
      context.query.session_id
    );
    if (session.payment_status === "unpaid") {
    } else {
      console.log("Line 121 Email:", session.customer_details.email);
      addOrderToDB(session); //--------------------
      return {
        props: {
          pass: true,
        },
      };
    }
  }
  return { notFound: true };
}

async function addOrderToDB(_session) {
    await db.connect();
  
    const customer = JSON.parse(_session.metadata.customer);
    const cartElements = JSON.parse(_session.metadata.cartElements);
    const email = _session.customer_details.email;
    console.log("line 153:", _session.metadata.cartElements);
  
    const cartElementsFormatted = await Promise.all(
      cartElements.map(async (item) => {
        return {
          ...(await getProductData(item.product_id)),
          Quantity: item.quantity,
        };
      })
    );
  
    let orders = cartElementsFormatted.map((item) => {
      return {
        ...item,
        ...customer,
        Email: email,
      };
    });
    console.log("line 29:", orders);
    await Order.insertMany(orders);
    await db.disconnect();
  }
  
  async function getProductData(_product_id) {
    const { _doc } = await quranCollection.findById(
      _product_id,
      "item_Name value weight length width height -_id"
    );
    //console.log("line 34:", _doc);
    return _doc;
  }
