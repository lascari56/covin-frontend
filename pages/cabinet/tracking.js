import React from "react";

import Tracking from "@domains/tracking";

import LayoutCabinet from "../../layouts/cabinet"

import {api} from '../../utils/api.util';

import axios from "axios"

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
export async function getStaticProps({params}) {
  // const lots = await api.service('cars').find({})

  const _lots = await axios.get("https://vmi423304.contaboserver.net/API/api2_1_iaai_copart.php?api_key=E5nH1rkFKQ8Xr38mPag")
  // console.log(_lots)
  return {
    props: {lots: {data: _lots?.data?.reverse()}}
  };
}