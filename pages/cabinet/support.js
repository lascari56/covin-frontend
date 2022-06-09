import React from "react";

import Support from "@domains/support";

import LayoutCabinet from "../../layouts/cabinet"

function SupportScreen(props) {
  return (
    <Support {...props} />
  );
}

SupportScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default SupportScreen;
