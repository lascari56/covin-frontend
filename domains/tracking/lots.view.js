import React from "react";

import {Padination, Button} from "@components"
import {CabinetMenu } from "@components/cabinet";

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

import * as S from "./lots.styled"

const LotsView = ({lots}) => {
  return (
    <LayoutLots LeftComponent={<LotsFilters />} TopComponent={<CabinetMenu active="tracking" />}>
      {lots?.data?.map(item => <S.Card data={item} key={item?.id} />)}

      <Padination>
        <Button title="Show 10 more" />
      </Padination>
    </LayoutLots>
  );
};

export default LotsView;
