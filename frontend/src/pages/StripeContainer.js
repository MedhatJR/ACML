import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MQ9HPBO9gMXUFPk1PWeIAK36npgyfWv44t7xaRItPcibpkhzxjFbvlMnnBDKqYl8FqfZbFfLr1nlFdCDNx2F1eN00phRWhj0o";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
