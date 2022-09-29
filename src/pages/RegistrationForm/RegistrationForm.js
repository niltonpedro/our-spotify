import {React, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import '../RegistrationForm/RegistrationForm.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
}));

const [user, setUser] = useState({
  name: '',
  email: '',
  confirmar_email: '',
  password: '',
  date: ' '
});

const [status, setStatus] = useState({
  type: '',
  mensagem: ''
});

//Receber os dados do formulário
const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

//Enviar os dados para o back-end
const addUser = async e => {
  e.preventDefault();

  if(!validate()) return;

  const saveDataForm = true;

  if (saveDataForm) {
    setStatus({
      type: 'success',
      mensagem: "Usuário cadastrado com sucesso!"
    });
    setUser({
      name: '',
      email: '',
      password: ''
    });
  } else {
    setStatus({
      type: 'error',
      mensagem: "Erro: Usuário não cadastrado com sucesso!"
    });
  }
}

function validate(){
  if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
  if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
  if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!'});
  if(user.password.length < 6) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});

  return true;
}

 function ValidationTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div className='container'>
        <img src='../../assets/menu/logoSpotify.png' alt="logo" />

        <h3 >Inscreva-se com seu endereço de E-mail</h3>
          <TextField
            id="outlined-error"
            label="E-mail"
            variant="outlined"
            value={user.email}
            onChange={valueInput}
          />
          <TextField
            id="outlined-error-helper-text"
            label="Confirmar E-mail"
            variant="outlined"
            value={user.confirmar_name}
            onChange={valueInput}
          />
          <TextField
            id="outlined-error-helper-text"
            type='password'
            label="Senha"
            variant="outlined"
            value={user.password}
            onChange={valueInput}
          />
          <TextField
            id="outlined-error-helper-text"
            label="Como devemos chamar você?"
            variant="outlined"
            value={user.name}
            onChange={valueInput}
          />
          <TextField
            id="outlined-error-helper-text"
            type='date'
            variant="outlined"
            value={user.date}
            onChange={valueInput}
          />
          <div className='checkbox'>
              <input type='checkbox' checked />Maculino
              <input type='checkbox'         />Feminino
              <input type='checkbox'         />Não binário

          </div>
          <button className='btn'>
            Inscreva-se 
          </button>
        </div>  
    </form>
  );
}

export default ValidationTextFields;
