import React from 'react';

import TableSearch from "./components/search"

import * as S from "./table.styled"

const TableView = ({ data, columns, renderItem, onSearch }) => {
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
        
        {!!onSearch && <TableSearch />}
      </S.Content>

      <S.Pagination value={1} total={200} pageCount={10} onChange={() => {}} />
    </S.Container>
  );
}

export default TableView;
