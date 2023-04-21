("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { cartProducts } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        cartProducts.map(async (product) => {
        /*
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);
        */
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.title,
              },
              unit_amount: Math.round(product.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      console.log(lineItems);
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/success/true",
        cancel_url: process.env.CLIENT_URL + "/success/false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { stripeId: session.id, product: cartProducts } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
