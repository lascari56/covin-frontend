import '../styles/global.scss'
import '@splidejs/splide/dist/css/splide.min.css';
import 'react-medium-image-zoom/dist/styles.css'

import RootContainer from '../containers/root';
import AuthContainer from '../containers/auth';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '../store/index';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        {
          getLayout((
            <RootContainer>
              <AuthContainer>
                <Component {...pageProps} />

                <ToastContainer />
              </AuthContainer>
            </RootContainer>
          ))
        }
      </Provider>
    </PersistGate>
  )
}

export default MyApp
