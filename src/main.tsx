import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from './store/store';

import { ThemeProvider } from "./provider/ThemeProvider.tsx";
import { Provider } from "react-redux";
import Header from "./components/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>

    <ThemeProvider>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
