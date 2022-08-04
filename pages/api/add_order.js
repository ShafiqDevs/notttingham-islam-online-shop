import db from "../../utils/db";
import Order from "../../models/Order";
import quranCollection from "../../models/quranCollection";

const handler = async(req, res) => {
  // console.log("line 6:", JSON.parse(req.body.metadata.billingForm));
  // console.log("line 7:", JSON.parse(req.body.metadata.cartItems));

console.log("xxxxxxxxxxxxxxxxx  order api xxxxxxxxxxxxxxxxxxxxxx");

  await db.connect();

  const customer = JSON.parse(req.body.metadata.customer);
  const cartElements = JSON.parse(req.body.metadata.cartElements);

  const cartElementsFormatted = await Promise.all(cartElementsFormatted.map(async(item) => {
    return {
      ...await getProductData(item.product_id),
      Quantity: item.quantity
    };
  }));

  console.log("line 22:", cartElementsFormatted);

  let orders = cartItemsFormatted.map((item) => {
    return {
      ...item,
      ...customer
    };
  });
  console.log("line 29:", orders);
  await Order.insertMany(orders);
  await db.disconnect();
  res.status(200).json({processed: true});
};

async function getProductData(_product_id) {
  const {_doc} = await quranCollection.findById(_product_id, "item_Name value weight length width height -_id");
  //console.log("line 34:", _doc);
  return _doc;
}

export default handler;
