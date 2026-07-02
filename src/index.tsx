import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router, } from "react-router-dom";
import "./css/index.css";

// Global Integrations here
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>     {/* Redux Parent*/}
      <ThemeProvider theme={theme}>     {/* MUI Parent */}
        <CssBaseline />  {/* Child css brauzerlar aro tafovutni olib beradi */}
        <Router>     {/* Router Parent*/}
          <App />  {/* App Child */}
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


