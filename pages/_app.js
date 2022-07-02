import '../styles/global.scss'
import '@splidejs/splide/dist/css/splide.min.css';
import 'react-medium-image-zoom/dist/styles.css'

import RootContainer from '../containers/root';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '../store/index';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout((
    <>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          
          <RootContainer>
            <Component {...pageProps} />

            <ToastContainer />
          </RootContainer>
        </Provider>
      </PersistGate>
    </>
  ))
}

export default MyApp
