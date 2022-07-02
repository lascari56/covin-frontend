import '../styles/global.scss'
import '@splidejs/splide/dist/css/splide.min.css';
import 'react-medium-image-zoom/dist/styles.css'

import RootContainer from '../containers/root';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '../store/index';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout((
    <>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          
          <RootContainer>
            <Component {...pageProps} />
          </RootContainer>
        </Provider>
      </PersistGate>
    </>
  ))
}

export default MyApp
