import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import '../RegistrationForm/RegistrationForm.css';
import logo from '../../assets/menu/logoSpotify2.png';
import users from './users';
import { Link } from 'react-router-dom';
//import Home from '../Home/Home';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
}));

async function adicionarUsuario({usuario}) {
  const adUser = {
    nome: usuario.name,
    email: usuario.email,
    senha: usuario.password
  }

  let apiReturn = await axios.post('http://localhost:3001/usuarios/', adUser)
    .then(async function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("erro:");
      console.log(error);
    });
  return apiReturn;
}

function ValidationTextFields() {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: '',
    email: '',
    confirmar_email: '',
    password: '',
    date: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = e => setUser({
    ...user,
    [e.target.name]: e.target.value
  });

  //Enviar os dados para o back-end
  const addUser = async e => {
    e.preventDefault();

    const usuario = {
      ...user
    }

    users.push(usuario);

    console.log(users);

    if (!validate()) {
      console.log(status);
      return;
    } else {
      console.log(status);
    }

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setUser({
        name: '',
        email: '',
        confirmar_email: '',
        password: '',
        date: ''
      });
      adicionarUsuario({usuario});
      console.log(status);
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }

  function validate() {
    if (!user.name) return setStatus({ type: 'error', mensagem: "Erro: Necessário preencher o campo nome!" });
    if (!user.email) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!' });
    if (user.email !== user.confirmar_email) return setStatus({ type: 'error', mensagem: 'Erro: Campo e-mail diferente da confirmação de e-mail!' });
    if (!user.password) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!' });
    if (user.password.length < 6) return setStatus({ type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!' });

    return true;
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={e => addUser(e)}>
      <div className='container'>
        <Link to={'/Home'}>
          <img src={logo} alt="logo" className='img' />
        </Link>
        <h3 >Inscreva-se com seu endereço de E-mail</h3>
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          name="email"
          required={true}
          value={user.email}
          onChange={valueInput}
        />
        <TextField
          id="confirmar"
          label="Confirmar E-mail"
          variant="outlined"
          name="confirmar_email"
          required={true}
          value={user.confirmar_email}
          onChange={valueInput}
        />
        <TextField
          id="senha"
          type='password'
          label="Senha"
          variant="outlined"
          name="password"
          required={true}
          value={user.password}
          onChange={valueInput}
        />
        <TextField
          id="nomeuser"
          label="Como devemos chamar você?"
          variant="outlined"
          name="name"
          required={true}
          value={user.name}
          onChange={valueInput}
        />
        <TextField
          id="date"
          type='date'
          variant="outlined"
          name="date"
          required={true}
          value={user.date}
          onChange={valueInput}
        />
        <div className='checkbox'>
          <input type='radio' name='genero' onChange={valueInput} />Maculino
          <input type='radio' name='genero' onChange={valueInput} />Feminino
          <input type='radio' name='genero' onChange={valueInput} />Não binário
        </div>
        <button className='btn'>
          Inscreva-se
        </button>
      </div>
    </form>
  );
}

export default ValidationTextFields;
