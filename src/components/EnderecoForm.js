import React from 'react'
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import Input from "./Form/Input";

function EnderecoForm() {

  const handleSubmit = (data) => {
    console.log(data)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" label="Nome" />
      <Input name="empresa" label="Empresa" />
      <Input name="email" label="E-mail" type="email" />

      <Scope path="endereco">
        <Input name="logradouro" label="Logradouro" />
        <Input name="cep" label="CEP" />
      </Scope>

      <button type="submit"  name="action">
         Salvar
      </button>
    </Form>
  )
}

export default EnderecoForm