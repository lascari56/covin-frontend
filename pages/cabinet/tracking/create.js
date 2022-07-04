import React from "react";

import TrackingCreate from "@domains/tracking-create";

import LayoutCabinet from "../../../layouts/cabinet"

function TrackingCreateScreen(props) {
  return (
    <TrackingCreate {...props} />
  );
}

TrackingCreateScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default TrackingCreateScreen;