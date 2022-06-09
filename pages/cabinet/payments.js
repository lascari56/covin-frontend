import React from "react";

import Payments from "@domains/payments";

import LayoutCabinet from "../../layouts/cabinet"

function PaymentsScreen(props) {
  return (
    <Payments {...props} />
  );
}

PaymentsScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default PaymentsScreen;
