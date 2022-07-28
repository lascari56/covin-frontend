import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

import PaymentsReport from './components/report'
import PaymentsSubscription from './components/subscription'
import PaymentsTable from './components/table'

export const Container = styled.div`
  margin: ${responsiveSize(25)} ${responsiveSize(30)};
`

export const Content = styled.div`
  display: flex;

  /* max-width: 50%; */
`


export const Report = styled(PaymentsReport)`
  flex: 1;
`

export const Subscription = styled(PaymentsSubscription)`
  flex: 1;
  margin-left: ${responsiveSize(14)};
`

export const Table = styled(PaymentsTable)`
  margin-top: ${responsiveSize(14)};
  
`