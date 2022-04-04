import '../assets/styles/main.scss'

import Layout from '../component/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
