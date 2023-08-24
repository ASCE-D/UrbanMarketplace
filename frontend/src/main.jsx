import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
// import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

// const export server = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
    
  </React.StrictMode>
);