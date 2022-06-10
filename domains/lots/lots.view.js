import React from "react";

import {Padination, Button} from "@components"
import { CabinetPage, CabinetMenu } from "@components/cabinet";

import LotsFilters from "./components/filters"

import * as S from "./lots.styled"

const LotsView = ({lots}) => {
  return (
    <CabinetPage LeftComponent={<LotsFilters />} TopComponent={<CabinetMenu />}>
      {lots?.data?.map(item => <S.Card data={item} key={item?.id} />)}

      <Padination>
        <Button title="Show 10 more" />
      </Padination>
    </CabinetPage>
  );
};

export default LotsView;
