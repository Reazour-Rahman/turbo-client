import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KbxEzCVVcBNgjD55ZRIduAmTFUc9CMNwbyAbNZ2ov35HLiPvW89rPMSvNtrTG6xSFOMqIXxmkxIAFYNZ5ailyni00YSCLYXsR"
);
const Payment = ({ style, bloggerName, blogId, user, handleClose }) => {
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title">Donate {bloggerName}</Typography>

      <Elements stripe={stripePromise}>
        <CheckoutForm
          bloggerName={bloggerName}
          blogId={blogId}
          user={user}
          handleClose={handleClose}
        />
      </Elements>

      {/*  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {user.displayName}
      </Typography> */}
    </Box>
  );
};

export default Payment;
