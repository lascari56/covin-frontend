import React from "react";

import {Empty} from "@components"

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

const TrackingView = ({lots, templates}) => {
  return (
    <LayoutLots 
      {...lots}
      cardType="buy-now"
      LeftComponent={
        <LotsFilters {...templates} />
      } 
    >
      {!lots?.loading && !lots?.data?.length && <Empty title="Not chosen" description="Choose a template for viewing lots" />}
    </LayoutLots>
  );
};

export default TrackingView;
