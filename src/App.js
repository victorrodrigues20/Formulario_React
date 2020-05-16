import React from "react";
import "./styles.css";
//import EnderecoForm from './components/EnderecoForm'
import EnderecoForm from './components/EnderecoFormMaterialUI'

export default function App() {
  return (
    <div className="App">
      <h1>Formulário</h1>
      <h2>Escolher no código qual dos formulários utilizar</h2>
      <EnderecoForm />
    </div>
  );
}
