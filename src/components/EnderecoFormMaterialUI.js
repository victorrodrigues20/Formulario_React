import React, { useState } from 'react'
import { Form } from '@unform/web';
import { Scope } from '@unform/core'
import { TextField, Select, Checkbox } from 'unform-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MenuItem, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    'label' : {
      color: 'yellow'
    }
  },
}));

function EnderecoFormMaterialUI() {

  const classes = useStyles();

  const handleSubmit = (data) => {
    console.log(data)
  };

  const [ receberNotif, setReceberNotif ] = useState(true)

  return (
    <Form className={classes.root} onSubmit={handleSubmit}>
      <TextField name="nome" label="Nome" />

      <Scope path="endereco">
        <TextField name="logradouro" label="Logradouro" />
        <TextField name="cep" label="CEP" />
      </Scope>

      <Select name="linguagem" label="Linguagem">
        <MenuItem value="js">JavaScript</MenuItem>
        <MenuItem value="cs">C#</MenuItem>
        <MenuItem value="py">Python</MenuItem>
      </Select>

      <FormControlLabel
        control={
          <Checkbox
            checked={receberNotif}
            onChange={() => setReceberNotif(!receberNotif)}
            name="receberNotificacoes"
            color="primary"
          />
        }
        label="Receber Notificações"
      />

      <Button type="submit" name="action" variant="contained" color="secondary">
        Salvar
      </Button>
    </Form>
  )
}

export default EnderecoFormMaterialUI