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
    <AuthCabinet>{page}</AuthCabinet>
  )
}

export default LoginScreen;