import React from "react";


import {Padination, Button} from "@components"
import { CabinetPage, CabinetMenu } from "@components/cabinet";

import LotsFilters from "./components/filters"

import * as S from "./lots.styled"

// const items = [{id: 1, commentary: true}, {id: 2, type: "hide"}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}]

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
