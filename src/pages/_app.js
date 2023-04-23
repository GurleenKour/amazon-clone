import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}> 
      <Component {...pageProps} />
      </Provider>
     </SessionProvider>
  );
}

// import "@/styles/globals.css";
// // import {  } from "next-auth/react";
// import { Provider as AuthProvider } from "@reduxjs/toolkit";
// export default function App({ Component, pageProps }) {
//   return (
//     <AuthProvider session={pageProps.session}>
//       <Component {...pageProps} />
//      </AuthProvider>
//   );
// }
