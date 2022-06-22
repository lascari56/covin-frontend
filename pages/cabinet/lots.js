import React from "react";

import LotsView from "@domains/lots";

import LayoutCabinet from "../../layouts/cabinet"

function LotsScreen(props) {
  return (
    <LotsView {...props} />
  );
}

LotsScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default LotsScreen;