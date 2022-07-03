import React from 'react';

import SettingsView from "./settings.view"

import {useSelector, useDispatch} from 'react-redux';

import {selectUser} from '@store/authReducers/authReducer.selector';

const SettingsContainer = ({...props}) => {
  const user = useSelector(selectUser);

  const onUpdatePersonalInfo = (values) => {
  }

  return (
    <SettingsView {...props} user={user} />
  );
}

export default SettingsContainer;
