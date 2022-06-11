import React, {useState, useEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import LotsView from './lots.view';

export default function СontactsContainer({navigation, ...props}) {
  const [lots, setLots] = useState(props.lots);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});

  const didMount = React.useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;

      return;
    }

    handleGetLots();
  }, [page]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;

      return;
    }

    handleGetLots();
  }, [filters]);

  const pageCount = useMemo(() => {
    return Math.ceil(lots.total / lots.limit);
  }, [lots]);


  const hnadlehangePage = async (value) => {
    setPage(value);
  };

  const handleFilter = async (value) => {
    setPage(0);
    setFilters(value);
  };

  const handleGetLots = async () => {
    const res = await api.service('cars').find({
      query: {
        $skip: page * 10,
        ...filters,
      }
    });

    setLots({...lots, ...res})
  };

  return (
    <LotsView
      {...props}
      lots={lots}
      page={page}
      pageCount={pageCount}
      onFilter={handleFilter}
      onChangePage={hnadlehangePage}
    />
  );
}
