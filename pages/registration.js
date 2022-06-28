import React from "react";

import Registration from "@domains/registration";

import AuthCabinet from "../layouts/auth"

function RegistrationScreen(props) {
  return (
    <Registration {...props} />
  );
}

RegistrationScreen.getLayout = function getLayout(page) {
  return (
    <AuthCabinet title="Registration">{page}</AuthCabinet>
  )
}

export default RegistrationScreen;