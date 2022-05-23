import React from "react";
import { Card } from "./components/Card";
import { GlobalStyle } from "./styles/globals";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
