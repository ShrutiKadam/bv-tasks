import  'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import store from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return (
    // global state wrapper
    //  PersistGate delays the rendering of UI until the persisted state has been retrrieved and saved to redux
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
