import React from "react";

import Tracking from "@domains/tracking";

import LayoutCabinet from "../../../layouts/cabinet"

function TrackingScreen(props) {
  return (
    <Tracking {...props} />
  );
}

TrackingScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default TrackingScreen;