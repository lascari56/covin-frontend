import React from "react";

import Сarfax from "@domains/carfax";

import LayoutCabinet from "../../layouts/cabinet"

function СarfaxScreen(props) {
  return (
    <Сarfax {...props} type="carfax" />
  );
}

СarfaxScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default СarfaxScreen;
