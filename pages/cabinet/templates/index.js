import React from "react";

import Templates from "@domains/templates";

import LayoutCabinet from "../../../layouts/cabinet"

function TemplatesScreen(props) {
  return (
    <Templates {...props} />
  );
}

TemplatesScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default TemplatesScreen;
