import React from 'react';

import TableSearch from "./components/search"

import * as S from "./table.styled"

const TableView = ({ data, columns, renderItem, page, total, pageCount, onSearch, onChangePage }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Table>
          <thead>
            <tr>
              {columns?.map(item => (
                <th key={item.label}>
                  <S.Label>
                    {item.label}
                  </S.Label>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data?.map(renderItem)}
          </tbody>
        </S.Table>
        
        {!!onSearch && <TableSearch onSearch={onSearch} />}
      </S.Content>

      <S.Pagination value={page} total={total} pageCount={pageCount} onChange={onChangePage} />
    </S.Container>
  );
}

export default TableView;
