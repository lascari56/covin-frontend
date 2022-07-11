import React, {useState, useMemo, useEffect} from 'react';
import * as yup from 'yup';

import LoginView from "./login.view"

import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

// import {selectUser} from '@store/authReducers/authReducer.selector';

import {saveUser, saveToken} from '@store/authReducers/authReducer.slice';

import {API} from '@configs/api';
import {api} from '@utils/api.util';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const LoginContainer = ({...props}) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("handleSend");
      handleSend(values)
    },
  });

  const validItems = useMemo(() => {
    return {
      email: !formik.touched.email || !formik.errors.email,
      password: !formik.touched.password || !formik.errors.password,
    };
  }, [formik.touched, formik.errors]);

  const isValid = useMemo(() => {
    let res = true;

    for (let item of Object.values(validItems)) {
      if (!item) res = false;
    }

    return res;
  }, [validItems]);

  useEffect(() => {
    api.authenticate().catch((e) => {})

    api.on('authenticated', async loginResult => {
      console.log("loginResult", loginResult);

      await dispatch(saveToken(loginResult.accessToken));
      await dispatch(saveUser(loginResult.user));

      router.push('/cabinet/lots')
    });
  }, []);

  const handleSend = ({email, password}) => {
    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    api.authenticate({
      strategy: 'local',
      email,
      password,
    }).then(async (res) => {
      await dispatch(saveToken(res.accessToken));
      await dispatch(saveUser(res.user));

      console.log("res", res);

      toast.update(notificationId, { 
        render: "Login success", 
        type: "success", 
        isLoading: false , 
        autoClose: 500, 
        onClose: () => {
          router.push('/cabinet/lots')

          setLoading(false)
        }})
    }).catch((e) => {
      console.log("authError", e);

      setLoading(false)

      toast.update(notificationId, { render: "Login or password is incorrect", type: "error", isLoading: false, autoClose: 2000 })
    })
  };

  const handleLoginGoogle = () => {
    window.location.href = `${API}/oauth/google`;
  }

  return (
    <LoginView {...props} formik={formik} loading={loading} validItems={validItems} isValid={isValid} onLoginGoogle={handleLoginGoogle} />
  );
}

export default LoginContainer;
