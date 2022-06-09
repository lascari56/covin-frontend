import React from "react";

import Autocheck from "@domains/autocheck";

import LayoutCabinet from "../../layouts/cabinet"

function AutocheckScreen(props) {
  return (
    <Autocheck {...props} />
  );
}

AutocheckScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default AutocheckScreen;
