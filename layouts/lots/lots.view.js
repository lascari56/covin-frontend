import React from 'react'

import {Loader, Empty, Padination, Button} from "@components"

import * as S from "./lots.styled"

import {CabinetMenu, CabinetPhotosModal} from "@components/cabinet";

export default function LotsView({lots, loading, fullItemSelected, formikMeta, page, pageCount, meta, LeftComponent, onChangePage, onPageMore, onChangeFulLotId}) {
  return (
    <S.Container>
      {!!LeftComponent && <S.Left>{LeftComponent}</S.Left>}
      
      <S.Content>
        <CabinetMenu />

        <S.Children>
          <S.Lots>
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

                {!lots?.length && <Empty />}

                {!!lots?.length && (
                  <Padination value={page} total={meta?.total} pageCount={pageCount} onChange={onChangePage}>
                    <Button title="Show 10 more" disabled={page >= pageCount - 1} onClick={onPageMore} />
                  </Padination>
                )}
              </>
            )}

            {loading && <Loader isBackground={lots?.length} />}
          </S.Lots>

          <CabinetPhotosModal items={fullItemSelected?.link_img_hd} onRequestClose={() => onChangeFulLotId(null)} />
        </S.Children>
      </S.Content>
    </S.Container>
  )
}
