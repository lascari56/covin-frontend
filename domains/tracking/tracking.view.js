import React from "react";

import {Padination, Button, Loader, Empty} from "@components"
import {CabinetMenu } from "@components/cabinet";

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

// import * as S from "./lots.styled"

const TrackingView = ({lots, loading, page, pageCount, formikMeta, onChangePage}) => {
  return (
    <LayoutLots LeftComponent={<LotsFilters />} TopComponent={<CabinetMenu active="tracking" />} />
  );
};

export default TrackingView;
