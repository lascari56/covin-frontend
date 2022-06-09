import React from "react";

import Sticker from "@domains/sticker";

import LayoutCabinet from "../../layouts/cabinet"

function StickerScreen(props) {
  return (
    <Sticker {...props} />
  );
}

StickerScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default StickerScreen;
