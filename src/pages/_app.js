// import App from 'next/app'
import "styles/global.scss";
import {QueryClient, QueryClientProvider} from 'react-query'

function MyApp({ Component, pageProps }) {
   // Create a client
 const queryClient = new QueryClient()
    return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    )
  }

  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  export default MyApp
