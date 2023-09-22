// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { wrapper } from "../redux/store"

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default wrapper.withRedux(App)


import { wrapper } from "@/redux";
import {Provider} from 'react-redux';
import { FC } from "react";
import "@/styles/main.scss";
import { AppProps } from "next/app";

// function App({ Component, pageProps }: any) {
const App: FC<AppProps> = ({ Component, ...rest }: any) => {
	const {store, props} = wrapper.useWrappedStore(rest)
	return(
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	)
}

export default App;
