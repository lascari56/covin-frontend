import React from "react";

import Logs from "@domains/logs";

import LogsCabinet from "../../layouts/cabinet"

function LogsScreen(props) {
  return (
    <Logs {...props} />
  );
}

LogsScreen.getLayout = function getLayout(page) {
  return (
    <LogsCabinet>{page}</LogsCabinet>
  )
}

export default LogsScreen;
