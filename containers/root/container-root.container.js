import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux';

// import {selectUser} from '@store/authReducers/authReducer.selector';

import {getCounty} from '@store/commonReducers/commonReducer.thunk';
import {saveUser, saveToken, logout} from '@store/authReducers/authReducer.slice';

import {api} from '@utils/api.util';

// import { useRouter } from 'next/router'

const ContainerRootView = ({children}) => {
  // const router = useRouter()

  const dispatch = useDispatch();

  // const user = useSelector(selectUser);

  useEffect(() => {
    api.authenticate().then((res) => {
      dispatch(saveUser(res.user))
    }).catch(() => {
      dispatch(logout())
    });

    dispatch(getCounty())
  }, [])
  
  // api.on('authenticated', loginResult => {
  //   // console.log("authenticated", loginResult);
  //   // Get all users and messages
  //   // Promise.all([
  //   //   messagesService.find({
  //   //     query: {
  //   //       $sort: { createdAt: -1 },
  //   //       $limit: 25,
  //   //     },
  //   //   }),
  //   //   usersService.find(),
  //   // ]).then(([messagePage, userPage]) => {
  //   //   // We want the latest messages but in the reversed order
  //   //   const messagesResult = messagePage.data.reverse();
  //   //   const usersResult = userPage.data;

  //   //   // Once both return, update the state
  //   //   setLogin(loginResult);
  //   //   setMessages(messagesResult);
  //   //   setUsers(usersResult);
  //   // });
  // });

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/')
  //   }
  // }, [user])

  return (
    children
  );
}

export default ContainerRootView;
