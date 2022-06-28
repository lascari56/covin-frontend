import React from "react";

import Login from "@domains/login";

import AuthCabinet from "../layouts/auth"

function LoginScreen(props) {
  return (
    <Login {...props} />
  );
}

LoginScreen.getLayout = function getLayout(page) {
  return (
    <AuthCabinet title="Log In">{page}</AuthCabinet>
  )
}

export default LoginScreen;