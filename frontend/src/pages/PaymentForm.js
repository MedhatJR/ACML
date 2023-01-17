import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

var arr = [];

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      width: 100,
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [users, setData] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const nav = useNavigate();
  const location = useLocation();
  const isClickedTitle = location.state.isClickedTitle;

  const GoToCreditCard = () => {
    nav("/Pay");
  };

  const GoToCourses = () => {
    nav("/IndividualViewMyCourses", {
      state: { passedEmail: document.getElementById("email").value },
    });
  };

  const CompleteRegister = () => {
    axios
      .post("http://localhost:8000/Individual_addPaidCourse", {
        Email: document.getElementById("email").value,
        Title: isClickedTitle,
      })
      .then((response) => {
        console.log(response);
        arr = response.data.CourseDetails;
        setData(response);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8000/payment", {
          amount: 10000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <label>Email</label>
        <input type="email" name="Email" id="email" /> <br />
      </div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <br />
          <button onClick={CompleteRegister}>Pay</button>
        </form>
      ) : (
        <div>
          <h2>Payment successful</h2>
          <button onClick={GoToCourses}>Go To Course</button>
        </div>
      )}
    </>
  );
}
