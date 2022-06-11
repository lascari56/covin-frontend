import React from "react";

import LotsView from "@domains/lots";

import LayoutCabinet from "../../layouts/cabinet"

import {api} from '../../utils/api.util';

function LotsScreen(props) {
  return (
    <LotsView {...props} />
  );
}

LotsScreen.getLayout = function getLayout(page) {
  return (
    <LayoutCabinet>{page}</LayoutCabinet>
  )
}

export default LotsScreen;

export async function getStaticProps({params}) {
  const lots = await api.service('cars?full=true').find({})

  return {
    props: {lots: {data: lots?.data}}
  };
}