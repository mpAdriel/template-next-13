import '@/styles/globals.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { Provider } from 'react-redux'
import { store } from '@/modules/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
// toast
import { Toaster } from 'react-hot-toast'
// resources
import { initI18N } from '@/i18n/i18n'

const persistor = persistStore(store)

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		initI18N('es')
	}, [])

	return (
		<>
			<PersistGate persistor={persistor}>
				<Provider store={store}>
					<Toaster position="top-center" />
					<div className="container" id="app">
						<Component {...pageProps} />
					</div>
				</Provider>
			</PersistGate>
		</>
	)
}
