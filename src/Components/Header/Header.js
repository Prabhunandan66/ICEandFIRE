import React from "react";
import "./Header.css";
export default function Header(props) {
  return (
    <>
      <header className="Header">
        <h1>
          <img src={`${props.icon}`} alt="fire and ice" />
          {props.name}
        </h1>
      </header>
    </>
  );
}
