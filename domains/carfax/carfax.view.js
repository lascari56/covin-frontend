import React from 'react'

import { CabinetPage } from "@components/cabinet";

import CarfaxTable from "./components/table"

import * as S from "./carfax.styled"

export default function СarfaxView({type, user, reports, page, pageCount, loading, onChangePage, onRefreshData}) {
  return (
    <CabinetPage>
      <S.Form type={type} user={user} onRefreshData={onRefreshData} />

      {!!reports?.data?.length && (
        <CarfaxTable 
          type={type}
          data={reports?.data}
          // columns={columns}
          // renderItem={renderItem}
          page={page}
          total={reports?.total}
          pageCount={pageCount}
          loading={loading}
          onChangePage={onChangePage}
        />
      )}
      
    </CabinetPage>
  )
}
