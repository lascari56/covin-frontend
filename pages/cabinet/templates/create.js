import React from "react";

import TemplatesCreate from "@domains/templates-create";

import LayoutCabinet from "../../../layouts/cabinet"

function TemplatesCreateScreen(props) {
  return (
    <TemplatesCreate {...props} />
  );
}

TemplatesCreateScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default TemplatesCreateScreen;