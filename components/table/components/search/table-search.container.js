import React, {useState, useEffect, useMemo} from 'react';

import TableSearchView from './table-search.view';

export default function TableSearchContainer({navigation, ...props}) {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    if (!value) props.onSearch(value);
    else setValue(value)
  }

  return (
    <TableSearchView
      {...props}
      value={value}
      onChangeValue={handleChange}
    />
  );
}
