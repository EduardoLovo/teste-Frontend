import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="loginContentd">
      <h1>Faça o login</h1>
      <form>
        <div>
          <label>Usuario:</label>
          <input type="text" id="usuario" name="usuario" />
        </div>
        <div>
          <label>Senha</label>
          <input type="text" id="senha" name="senha" />
        </div>
      </form>
    </div>
  );
};
