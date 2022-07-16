import React, {useState, useEffect, useMemo} from 'react';
import { toast } from 'react-toastify';

import {useFormik} from 'formik';

import * as yup from 'yup';

import {api} from '@utils/api.util';

import PaymentsReportView from './payments-report.view';

const validationSchema = yup.object().shape({
  amount: yup.string().required(),
});

export default function PaymentsReportContainer({navigation, ...props}) {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  console.log("11111111page", page);

  const formik = useFormik({
    initialValues: {
      amount: null
    },
    validationSchema,
    onSubmit: (values) => {
      handleSend(values)
    },
  });

  const pageCount = useMemo(() => {
    return Math.ceil(data?.total / data?.limit);
  }, [data?.total, data?.limit]);

  useEffect(() => {
    handleLoadData();
  }, [page]);

  const handleLoadData = async () => {
    console.log("page", page);
    setLoading(true)

    const res = await api.service('report').find({
      query: {
        $sort: {
          date: -1
        },
        $skip: (page - 1) * 20,
        $limit: 20,
      }
    });

    console.log("res", res);

    setData({...res})
    setLoading(false)
  };
  
  const handleChangePage = (value) => {
    setPage(value)
  }

  const handleSend = ({amount}) => {
    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    // console.log("values", values);

    api.service('billing').create({
      amount,
    }).then(async (res) => {
      setLoading(false)

      console.log("res", res);

      // props.onRefreshData();

      const dataForm = document.createElement('form')
      dataForm.style.display = 'none'
      // dataForm.target = "TargetWindow";//Make sure the window name is same as this value
      dataForm.method = 'POST'
      dataForm.action = 'https://secure.wayforpay.com/pay'
      for (const key in res) {
        const postData = document.createElement('input')
        postData.type = 'hidden'
        postData.name = key
        postData.value = res[key]
        dataForm.appendChild(postData)
      }
      document.body.appendChild(dataForm)
      console.log(dataForm)
      dataForm.submit()

      toast.update(notificationId, { 
        render: "Carfax successfully purchased", 
        type: "success", 
        isLoading: false , 
        autoClose: 500, 
      })
    }).catch((e) => {
      console.log("carfax-buy-err", e);
      let message = "Something went wrong, please try again!";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 1000 })
    })
  };

  return (
    <PaymentsReportView
      {...props}
      formik={formik}
      data={data}
      page={page}
      pageCount={pageCount}
      loading={loading}
      onChangePage={handleChangePage}
    />
  );
}
