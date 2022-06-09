import React from "react";

import News from "@domains/news";

import LayoutCabinet from "../../layouts/cabinet"

function NewsScreen(props) {
  return (
    <News {...props} />
  );
}

NewsScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default NewsScreen;
