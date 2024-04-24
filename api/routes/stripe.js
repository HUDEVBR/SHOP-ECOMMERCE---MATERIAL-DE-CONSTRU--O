const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "brl",
        },
        (stripeErr, StripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(StripeRes);
            }
        }
    );
});

module.exports = router;