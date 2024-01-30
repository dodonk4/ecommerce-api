import Stripe from 'stripe'

const stripe = new Stripe("sk_test_51OL4E7GEU6GUNtdOv49pwzQH9GIm5A0g8CgPDVSEFSDNADq8mp632AsUJ1HiHhvZlVbjAvyEU6td3u98kNuXiKiq00SJYm8Dhf"); 


const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return items;
  };
  

const createPaymentIntent = async (req, res) => {
    let { items } = req.body;
    let priceStringified = items[0].price.toString();
    console.log(priceStringified)
    let newPriceStringified;

        if(priceStringified.includes(".")){
            newPriceStringified = priceStringified.replace(".", "");
        }else{
            console.log(newPriceStringified)
            newPriceStringified = priceStringified + "00";
            console.log(newPriceStringified)
        }


    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(newPriceStringified),
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
        enabled: true,
        },
    });

    console.log(paymentIntent.client_secret)

    res.send({
        clientSecret: paymentIntent.client_secret,
    });

    
}

export default createPaymentIntent;