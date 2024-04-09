import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
    "pk_test_51OdTsKGTY2nJebNQ5uMehiWidLMAMw7A20VNfvaowvYVtME32FaMwj7PtFZjCr98lREEhCAOgMc7UPBjpiWExSi800oMSHhWd3"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token)
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http:localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                }
                );
                console.log(res.data);
                history.push("/sucess", { res });
            } catch (err) {
                console.log(err)
            };
            stripeToken && makeRequest;
        };
    }, [stripeToken, history]);

    return (
        < div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout
                    name="HUDEV Shop"
                    image="https://avatars.githubusercontent.com/u/72237544?v=4"
                    billingAddress
                    shippingAddress
                    description="Seu total é R$ 20,00"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}

                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
        )};
        </div>
    );
};

export default Pay;