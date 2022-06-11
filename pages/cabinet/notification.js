import React from "react";

import Notification from "@domains/notification";

import LayoutCabinet from "../../layouts/cabinet"

function NotificationScreen(props) {
  return (
    <Notification {...props} />
  );
}

NotificationScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default NotificationScreen;
