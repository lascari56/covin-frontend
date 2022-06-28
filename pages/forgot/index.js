import React from "react";

import Login from "@domains/login";

import AuthCabinet from "../../layouts/auth"

function ForgotScreen(props) {
  return (
    <Login {...props} />
  );
}

ForgotScreen.getLayout = function getLayout(page) {
  return (
    <AuthCabinet title="Enter in Dashboard">{page}</AuthCabinet>
  )
}

export default ForgotScreen;