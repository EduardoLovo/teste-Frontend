import React from "react";
import { Title } from "./AppStyled";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="./home" />
      </Routes>
      <Title>Ola Mundo</Title>{" "}
    </>
  );
};
