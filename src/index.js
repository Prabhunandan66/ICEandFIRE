import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./Container/Gameofthrones/MainPage";
import Character from "./Container/Gameofthrones/Characters";
import { Provider } from "react-redux";
import { createStore } from "redux";
import charlistReducer from "./Utils/Redux/reducer";

let store = createStore(charlistReducer);
ReactDOM.render(
  <React.StrictMode>
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<App />}></Route>
            <Route exact path="/GameofThrones" element={<MainPage />}></Route>
            <Route exact path="/Characters" element={<Character />}></Route>
          </Routes>
        </Router>
      </Provider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
