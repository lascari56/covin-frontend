import React from "react";

import Settings from "@domains/settings";

import LayoutCabinet from "../../layouts/cabinet"

function SettingsScreen(props) {
  return (
    <Settings {...props} />
  );
}

SettingsScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default SettingsScreen;
