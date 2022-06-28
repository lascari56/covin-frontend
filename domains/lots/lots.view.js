import React from "react";

import {Padination, Button, Loader} from "@components"
import {CabinetMenu } from "@components/cabinet";

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

import * as S from "./lots.styled"

const LotsView = ({lots, page, pageCount, loading, formikMeta, units, onFilter, onChangePage, onPageMore}) => {
  return (
    <LayoutLots 
      LeftComponent={<LotsFilters data={lots?.filters} units={units} loading={loading} onFilter={onFilter} />}
      TopComponent={<CabinetMenu active="lots" />}
    >
      <S.Container>
        {!!lots && (
          <>
            <S.Meta formik={formikMeta} />

            {lots?.data?.map(item => <S.Card data={item} speedUnit={formikMeta.values.speed} key={item?._id} />)}

            <Padination value={page} total={lots?.total} pageCount={pageCount} onChange={onChangePage}>
              <Button title="Show 10 more" disabled={page >= pageCount - 1} onClick={onPageMore} />
            </Padination>
          </>
        )}

        {loading && <Loader isBackground={lots?.data?.length} />}
      </S.Container>
    </LayoutLots>
  );
};

export default LotsView;
