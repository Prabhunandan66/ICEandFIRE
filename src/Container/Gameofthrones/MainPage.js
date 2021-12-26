import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import throne from "../../Resources/throne.png";
import Houses from "./Houses";
export default function MainPage() {
  return (
    <div>
      <Header name={"Book 1 : A Game Of Thrones"} icon={throne} />
      <Houses />
      <Footer name={"Next books will be Available soon..."}></Footer>
    </div>
  );
}
