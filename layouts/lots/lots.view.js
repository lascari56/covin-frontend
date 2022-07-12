import React from 'react'

import {Loader, Empty, Padination, Button} from "@components"

import * as S from "./lots.styled"

import {CabinetMenu, CabinetPhotosModal} from "@components/cabinet";

export default function LotsView({
    children, 
    data, 
    loading, 
    fullItemSelected, 
    formikMeta, 
    page, 
    pageCount, 
    meta, 
    showOptions,
    cardType,
    LeftComponent, 
    onChangePage, 
    onPageMore, 
    onChangeFulLotId,
    onSubmitCommentary,
    onSubmitHidden
  }) {
  return (
    <S.Container>
      {!!LeftComponent && <S.Left>{LeftComponent}</S.Left>}
      
      <S.Content>
        <CabinetMenu />

        <S.Children>
          <S.Lots>
            {children}

            {!!data && (
              <>
                <S.Meta formik={formikMeta} showOptions={showOptions} />

                {data?.map(item => (
                  <S.Card 
                    data={item}
                    speedUnit={formikMeta.values.speed}
                    type={cardType}
                    key={item?._id}
                    onFull={() => onChangeFulLotId(item?._id)}
                    onSubmitCommentary={onSubmitCommentary}
                    onSubmitHidden={onSubmitHidden}
                  />
                ))}

                {!data?.length && !loading && <Empty />}

                {!!data?.length && (
                  <Padination value={page} total={meta?.total} pageCount={pageCount} onChange={onChangePage}>
                    <Button title="Show 10 more" disabled={page >= pageCount} onClick={onPageMore} />
                  </Padination>
                )}
              </>
            )}

            {loading && <Loader isBackground={data?.length} />}
          </S.Lots>

          <CabinetPhotosModal items={fullItemSelected?.link_img_hd} onRequestClose={() => onChangeFulLotId(null)} />
        </S.Children>
      </S.Content>
    </S.Container>
  )
}
