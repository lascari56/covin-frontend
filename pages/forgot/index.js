import React from "react";

import Forgot from "@domains/forgot";

import AuthCabinet from "../../layouts/auth"

function ForgotScreen(props) {
  return (
    <Forgot {...props} />
  );
}

ForgotScreen.getLayout = function getLayout(page) {
  return (
    <AuthCabinet title="Enter in Dashboard">{page}</AuthCabinet>
  )
}

export default ForgotScreen;