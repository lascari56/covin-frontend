import React from "react";

import Bookmarks from "@domains/bookmarks";

import LayoutCabinet from "../../layouts/cabinet"

function BookmarksScreen(props) {
  return (
    <Bookmarks {...props} />
  );
}

BookmarksScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default BookmarksScreen;
