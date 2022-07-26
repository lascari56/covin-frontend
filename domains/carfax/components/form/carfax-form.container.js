import React, {useMemo, useState} from 'react';

import CarfaxFormView from "./carfax-form.view"

import {useFormik} from 'formik';

import * as yup from 'yup';

import { toast, Zoom } from 'react-toastify';

import {useDispatch} from 'react-redux';

import {getUser} from '@store/authReducers/authReducer.thunk';

import {api} from '@utils/api.util';
import type from 'domains/payments/components/subscription/components/type';

import RebuyNotification from "./components/rebuy-notification"

const validationSchema = yup.object().shape({
  vin: yup.string().min(17).max(17).required(),
});

const CarfaxFormContainer = ({...props}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      vin: null
    },
    validationSchema,
    onSubmit: (values) => {
      handleBuy(values)
    },
  });

  const title = useMemo(() => {
    return props.type.slice(0, 1).toUpperCase() + props.type.slice(1);
  }, [props.type])

  const handleBuy = async ({vin}) => {
    setLoading(true);

    let report = await api.service(`report`).find({
      query: {
        vin,
        status: "Success"
      }
    });

    console.log("report", report);

    if (report.total > 0) {
      const toastId = toast(<RebuyNotification 
        onCancel={() => {
          setLoading(false)
          toast.dismiss(toastId.current)
        }}
        onConfirm={() => {
          toast.dismiss(toastId.current)
          handleSend({vin, reBuy: true})
        }}
      />, {
        role: "alert",
        autoClose: false,
        draggable: false,
        closeButton: false,
        closeOnClick: false,
        position: toast.POSITION.TOP_CENTER,
        // delay: 500,
        // transition: Zoom
      }) 
    } else handleSend({vin})
  }

  const handleSend = async ({vin, reBuy}) => {
    // if (props.user.balance)

    // setLoading(true);

    const notificationId = toast.loading("Pending...")

    // let report = await api.service(`report`).find({
    //   query: {
    //     car: vin,
    //     status: "Success"
    //   }
    // });

    // if (report.total) {
    //   toast(<RebuyNotification 
    //     onCancel,
    //     onConfirm={}
    //   />, {
    //     role: "alert",
    //     autoClose: false,
    //     draggable: false,
    //     closeButton: false,
    //     position: toast.POSITION.TOP_CENTER,
    //     // transition: Zoom
    //   }) 
    // }

    // console.log("report", report);

    // return [];

    // console.log("values", values);

    api.service('report').create({
      vin,
      source_group: props.type,
      re_buy: !!reBuy
    }).then(async (res) => {
      setLoading(false)

      formik.resetForm()

      props.onRefreshData();

      await dispatch(getUser())

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
    <CarfaxFormView {...props} title={title} formik={formik} loading={loading} />
  );
}

export default CarfaxFormContainer;
