import React, {useEffect, useState} from 'react';

import TrackingView from './tracking.view';

import {useFormik} from 'formik';

import {api} from '../../utils/api.util';

export default function TrackingContainer({navigation, ...props}) {
  const [lots, setLots] = useState(null);
  const [loading, setLoading] = useState(true);

  const formikMeta = useFormik({
    initialValues: {
      search: '',
      speed: "miles",
      time: "+02:00"
    },
    onSubmit: () => {
      
    },
  });

  useEffect(() => {
    handleLoadLots()
  }, []);

  const handleLoadLots = async () => {
    const res = await api.service('cars?full=true').find({});

    setLots({...res})
    setLoading(false)
  };

  return (
    <TrackingView
      {...props}
      lots={lots}
      loading={loading}
      formikMeta={formikMeta}
    />
  );
}
