import React from "react";

import {Empty} from "@components"

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

const TrackingView = ({lots, templates, selectedId, onChangeSelectedId}) => {
  return (
    <LayoutLots 
      {...lots}
      LeftComponent={
        <LotsFilters
          items={templates}
          value={selectedId}
          onChange={onChangeSelectedId}
        />
      } 
    >
      {!lots?.loading && !lots?.data?.length && <Empty title="Not chosen" description="Choose a template for viewing lots" />}
    </LayoutLots>
  );
};

export default TrackingView;
