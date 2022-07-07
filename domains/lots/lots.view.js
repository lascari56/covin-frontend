import React from "react";

import {Padination, Button, Loader, Empty} from "@components"
import {CabinetMenu, CabinetPhotosModal} from "@components/cabinet";

import LotsFilters from "./components/filters"

import LayoutLots from "@layouts/lots"

import * as S from "./lots.styled"

const LotsView = ({lots, meta, page, pageCount, loading, formikMeta, units, fullItemSelected, onFilter, onChangePage, onPageMore, onChangeFulLotId}) => {
  return (
    <LayoutLots 
      LeftComponent={<LotsFilters data={meta?.filters} units={units} onFilter={onFilter} />}
    >
      {/* <S.Container>
        {!!lots && (
          <>
            <S.Meta formik={formikMeta} />

            {lots?.map(item => (
              <S.Card 
                data={item}
                speedUnit={formikMeta.values.speed}
                key={item?._id}
                onFull={() => onChangeFulLotId(item?._id)}
              />
            ))}

            {!lots?.data?.length && <Empty />}

            {!!lots?.data?.length && (
              <Padination value={page} total={meta?.total} pageCount={pageCount} onChange={onChangePage}>
                <Button title="Show 10 more" disabled={page >= pageCount - 1} onClick={onPageMore} />
              </Padination>
            )}
          </>
        )}

        {loading && <Loader isBackground={lots?.length} />}
      </S.Container>

      <CabinetPhotosModal items={fullItemSelected?.link_img_hd} onRequestClose={() => onChangeFulLotId(null)} /> */}
    </LayoutLots>
  );
};

export default LotsView;
