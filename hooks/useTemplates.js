import {useMemo, useState, useEffect} from 'react';

import {api} from '@utils/api.util';

import {find} from "lodash"

export const useTemplates = ({ entry, onFilter }) => {
  const [value, setValue] = useState(null)
  const [items, setItems] = useState({data: [], loading: true})

  useEffect(() => {
    loadItem()
  }, [])
  
  useEffect(() => {
    if (value && items?.data?.length) {
      const filters = find(items?.data, {_id: value})?.filters;

      onFilter(filters)
    }
  }, [value, items?.data])

  const loadItem = async () => {
    const res = await api.service(entry).find({});

    setItems({ data: res, loading: false })
  }

  return {
    value,
    items,
    onChange: setValue
  }
}