import { Button, CircularProgress } from "@material-ui/core";
import { Typography } from "@mui/material";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const CheckoutForm = ({
  bloggerName,
  blogId,
  user,
  handleClose,
  bloggerEmail,
  blogTitle,
  bloggerPhoto,
}) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);

  const displayName = user.displayName;
  console.log(user);

  const stripe = useStripe();
  const elements = useElements();
  const donateRef = useRef();
  const cardRef = useRef();

  const time = new Date().toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short",
    hour12: false,
  });
  console.log(time, typeof time);

  let donation = {};

  const handleDonation = (e) => {
    donation["amount"] = parseInt(donateRef.current?.value);
    console.log(donation, typeof donation.amount);
    axios
      .post("https://aqueous-chamber-45567.herokuapp.com/create-payment-intent", {
        ...donation,
      })
      .then(function (response) {
        console.log(response.data.clientSecret);
        setClientSecret(response.data.clientSecret);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    setProcessing(true);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
      //   donateRef.current.value = "";
    }

    //payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentIntent);
      setSuccess("Your payment processed successfully");
      setProcessing(false);

      const url = `https://aqueous-chamber-45567.herokuapp.com/blogs/payment/${bloggerEmail}`;
      const payment = {
        amount: paymentIntent.amount,
        trasaction: paymentIntent.client_secret,
        doner: displayName,
        email: user.email,
        bloggerName: bloggerName,
        blogTitle: blogTitle,
        blogId: blogId,
        bloggerPhoto: bloggerPhoto,
        created: paymentIntent.created,
        last4: paymentMethod?.last4,
        time: new Date().toLocaleString("en-US", {
          dateStyle: "medium",
        }),
        date: new Date().toLocaleString("en-US", {
          dateStyle: "short",
          timeStyle: "short",
          hour12: false,
        }),
        donorPhoto: user.photoURL,
      };

      console.log(payment);

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("you donated successfully");
          if (alert) {
            handleClose();
            window.location.reload();
          }
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography id="modal-modal-title">Enter the amount</Typography>
        <input
          className="amount-input"
          type="number"
          name=""
          id=""
          placeholder="Enter the amount"
          ref={donateRef}
          onBlur={handleDonation}
          required
        />
        <Typography id="modal-modal-title">Enter the Card Number</Typography>
        <CardElement
          ref={cardRef}
          options={{
            style: {
              base: {
                fontSize: "16px",
                lineHeight: "30px",

                color: "#424770",
                backgroundColor: "#fff",

                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress style={{ display: "block", margin: "10px auto" }} />
        ) : (
          <Button
            variant="content"
            type="submit"
            disabled={!stripe}
            style={{ display: "block", margin: "10px auto", color: "green" }}
          >
            Donate
          </Button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default CheckoutForm;
