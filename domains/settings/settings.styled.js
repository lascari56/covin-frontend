import styled from "styled-components";

import SettingsPersonalInfo from './components/personal-info'
import SettingsNotificationSetting from './components/notification-settings'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  flex: 1;
  display: flex;

  padding: ${responsiveSize(25)} ${responsiveSize(30)};
`

export const PersonalInfo = styled(SettingsPersonalInfo)`
  flex: 1;
`

export const NotificationSetting = styled(SettingsNotificationSetting)`
  flex: 1;
  margin-left: ${responsiveSize(14)};
`