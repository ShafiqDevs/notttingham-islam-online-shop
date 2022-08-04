import quranCollection from "../../models/quranCollection";
const stripe = require("stripe")("sk_test_51LABzlBP38kujVQZbFPPqU9jsB73vt0sSMiSjaDERVCXDJrkzcLr7TNQ83Xku43sQd4NRqg" +
    "optiAyc3oYZZsIwEh00zz6F0DEu");

export default async function checkout(req, res) {
  const cartElements = JSON.parse(req.body.cartElements);
  console.log(cartElements);
  const customer = JSON.parse(req.body.customer);
  if (req.method === "POST") {
    try {
      // console.log(customer);
      const session = await stripe
        .checkout
        .sessions
        .create({
          line_items: cartElementsToStripeFormat(cartElements),
          mode: "payment",
          success_url: `${req.headers.origin}/process/?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/cancel`,
          metadata: {
            cartElements: JSON.stringify(cartElements.map(item => {
              return {product_id: item.product_id, quantity: item.quantity}
            })),
            customer: JSON.stringify(billingFormToDatabaseFormat(customer))
          }
        });

      res
        .status(200)
        .json({checkout_session: session});
    } catch (err) {
      res
        .status(err.statusCode || 500)
        .json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res
      .status(405)
      .end("Method Not Allowed");
  }
}

function cartElementsToStripeFormat(_cartElements) {
  const lineItems = _cartElements.map(element => {
    return {
      price_data: {
        currency: "gbp",
        unit_amount: (element.price) * 100,
        product_data: {
          name: element.item_Name
        }
      },
      quantity: element.quantity
    };
  });
  return lineItems;
}

function billingFormToDatabaseFormat(_customer) {
  return {
    Name: _customer.fName + " " + _customer.lName,
    Property: _customer.Property,
    Street: _customer.Street,
    Town: _customer.Town,
    County: _customer.County,
    PostCode: _customer.PostCode,
    Country: _customer.Country,
    Telephone: _customer.Telephone
  };
}
