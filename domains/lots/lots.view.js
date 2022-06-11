import React from "react";

import {Padination, Button, Loader} from "@components"
import {CabinetMenu } from "@components/cabinet";

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

import * as S from "./lots.styled"

const LotsView = ({lots, page, pageCount, loading, onChangePage}) => {
  return (
    <LayoutLots LeftComponent={<LotsFilters data={lots?.filters} />} TopComponent={<CabinetMenu active="lots" />}>
      <S.Container>
        {!!lots && (
          <>
            {lots?.data?.map(item => <S.Card data={item} key={item?.id} />)}

            <Padination value={page} total={lots?.total} pageCount={pageCount} onChange={onChangePage}>
              <Button title="Show 10 more" />
            </Padination>
          </>
        )}

        {loading && <Loader />}
      </S.Container>
    </LayoutLots>
  );
};

export default LotsView;
