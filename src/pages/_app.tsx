import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '@/modules/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <div className='container' id='app'>
            <Component {...pageProps} />
          </div>
        </Provider>
      </PersistGate>
    </>
  )
}
