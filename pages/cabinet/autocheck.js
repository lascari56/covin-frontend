import React from "react";

import Autocheck from "@domains/autocheck";
import Сarfax from "@domains/carfax";

import LayoutCabinet from "../../layouts/cabinet"

function AutocheckScreen(props) {
  return (
    <Сarfax {...props} type="autocheck" />
  );
}

AutocheckScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default AutocheckScreen;
