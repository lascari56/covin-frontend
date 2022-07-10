import {useMemo, useState, useEffect} from 'react';

import {api} from '@utils/api.util';

import {find} from "lodash"

const templatesItems = [
  {
    "_id": 1,
    "filters": {
      "make": [
        "ACURA"
      ]
    },
    "name": "ACURA"
  },
  {
    "_id": 2,
    "filters": {
      "make": [
        "ALFA ROMEO",
      ]
    },
    "name": "ALFA ROMEO"
  }
]

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

    setItems({ data: res?.data, loading: false })
  }

  return {
    value,
    items,
    onChange: setValue
  }
}