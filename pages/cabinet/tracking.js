import React from "react";

import Tracking from "@domains/tracking";

import LayoutCabinet from "../../layouts/cabinet"

import {api} from '../../utils/api.util';

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

// export async function getStaticProps({params}) {
//   const lots = await api.service('cars').find({})
  
//   return {
//     props: {lots}
//   };
// }