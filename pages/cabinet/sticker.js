import React from "react";

// import Sticker from "@domains/sticker";
import Сarfax from "@domains/carfax";

import LayoutCabinet from "../../layouts/cabinet"

function StickerScreen(props) {
  return (
    <Сarfax {...props} type="sticker" />
  );
}

StickerScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default StickerScreen;
