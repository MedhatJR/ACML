# Team SMMMM

# Teach Me :

An implementation of full stack web application using the MERN stack. The application is a platform for users to manage an online learning platform. The application is built using the MERN stack.

## Motivation 💥

This project is created for the Advanced Computer Lab Course to teach students how use MERN Stack to build complete functional websites.
We were assigned to build a complete functional online learning website.

## Build status 🔨

- This project is still under construction.
- More styling is required in certain areas.
- The website is still not deployed.

## Code Style 💻

We used prettier to ensure the consistency of spacing and we used conventional variable and state names to comply with the clean code formats so that the code can be easily understood.

## Technologies 🤖

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [ReactJS](https://reactjs.org/)
- [Mongoose](https://mongoosejs.com/)
- [Stripe](https://stripe.com/en-de)
- [Thunder Client](https://www.thunderclient.com/)

## Installation

- Clone the repository from github
- Install all needed libraries in the main folder, backend folder and frontend folder using the command:

```bash
npm install
```

- Change directory to the Backend folder.

```bash
cd Backend
```

- Run the backend server

```bash
npm run dev
```

- Go back to the Frontend page and run the command:

```bash
npm start
```

And Enjoy the ride 😁

## Screenshots

![Guest](https://drive.google.com/file/d/1PNkm8Pv-m_BPNbfCpSHwB6Zkt4odjCTp/view?usp=share_link)
![All Courses](https://drive.google.com/file/d/10-vDIM4ET5wEJhyGSqUF1sowR4xju9Ja/view?usp=share_link)
![Instructor search for courses](https://drive.google.com/file/d/1Y9UGzL2AMVljMoqt5O_F80Ic3PC8Vyly/view?usp=share_link)
![Most popular courses](https://drive.google.com/file/d/1-hEfcUMm0juMoWn4O26YLukPgKyvI-C1/view?usp=share_link)

## Features 🧾

- As an Admin, you can grant access to specific courses for corporate trainees.
- As an Instructor, you can add your courses and view the amount of money owed to you.
- As an Individual Trainee, you can view your courses and watch their videos and solve an exam after finishing the course.
- As a Corporate Trainee, you can request access for courses your organization is not registered into.

## Code Examples 👨‍💻

### Frontend of payment form using Stripe API

```javascript
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
  const isClickedPrice = location.state.isClickedPrice;
  const isClickedUsername = location.state.isClickedUsername;
  console.log(isClickedUsername);

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
```

### Handle Submit

```javascript
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
        amount: isClickedPrice * 100,
        id,
        Username: isClickedUsername,
        Wallet: isClickedPrice,
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
```

### Return Part

```javascript

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
```

### Backend of payment form

```javascript
app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Courses",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
    Instructor.findOneAndUpdate(
      { Username: req.body.Username },

      { $inc: { Wallet: req.body.Wallet } },
      { new: true },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      }
    );
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});
```

##

## Authors

- [@Sarahwaly](https://github.com/Sarahwaly)
- [@MedhatJR](https://github.com/MedhatJR)
- [@moataz110](https://github.com/moataz110)
- [@Mennaabdallah7](https://github.com/Mennaabdallah7)
- [@Me2adef22](https://github.com/Me2adef22)

## Credits

- [Mongoose Documentation](https://mongoosejs.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [Ninja Net](https://www.youtube.com/@NetNinja)
- [StackOverFlow](https://stackoverflow.com/)
- [](https://stackoverflow.com/)

## Feedback

If you have any feedback, please reach out to us at mohamedmedhat4a@gmail.com
