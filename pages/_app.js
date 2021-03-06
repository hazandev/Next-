import '../assets/styles/main.scss'
import { Provider } from 'react-redux'
import store from '../store/store'

import Layout from '../component/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
  )}

export default MyApp
