import { Link, TextField } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../RegistrationForm/RegistrationForm.css';
import logo from '../../assets/menu/logoSpotify2.png';

function FormEditProfile() {

  const navegacao = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    senha: '',
    id: ''
  });

    //Receber os dados do formulário
    const valueInput = e => setUser({
    ...user,
    [e.target.name]: e.target.value
    });
  
  useEffect(() => {
    axios.get(`http://localhost:3001/usuario?email=${localStorage.getItem("email") ?? sessionStorage.getItem("email")}`).then((response) => {
      setUser.email(response.data[0].email);
      setUser.nome(response.data[0].nome);
      setUser.senha(response.data[0].senha);
      setUser.id(response.data[0].id);
    })
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    if(!setUser.email || !setUser.nome || !setUser.senha){
      alert("Por favor, preencha todos os campo")
      return;
    }

    axios.patch(`http://localhost:3001/usuario/${setUser.id}`,
      {
        email: setUser.email,
        nome:  setUser.nome,
        senha: setUser.senha
      }
    ).then(() => {
      setUser.email("");
      setUser.senha("");
      setUser.nome("");
      
      if(sessionStorage && sessionStorage.getItem("nome")){
        sessionStorage.setItem("nome", setUser.nome);
        sessionStorage.setItem("email", setUser.email);
        sessionStorage.setItem("senha", setUser.senha);
      }
      if(localStorage && localStorage.getItem("nome")){
        localStorage.setItem("nome", setUser.nome);
        localStorage.setItem("email", setUser.email);
        localStorage.setItem("senha", setUser.senha);
      }
      alert("Edição realizada");
      
      navegacao("/Home");
    }).catch((e) => {
      alert("Houve um erro no cadastro");
    });
  }
  return (
    <>

<form noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
<div className='container'>
  <Link to={'/Home'}>
    <img src={logo} alt="logo" className='img' />
  </Link>
  <h3 >Alterar dados cadastrados</h3>
  <TextField
    id="email"
    label="E-mail"
    variant="outlined"
    name="email"
    required={true}
    value={setUser.email}
    onChange={valueInput}
  />

  <TextField
    id="senha"
    type='password'
    label="Senha"
    variant="outlined"
    name="senha"
    required={true}
    value={setUser.senha}
    onChange={valueInput}
  />

  <TextField
    id="nomeuser"
    label="Seu nome"
    variant="outlined"
    name="name"
    required={true}
    value={setUser.nome}
    onChange={valueInput}
  />

  <div className='checkbox'>
    <input type='radio' name='genero' onChange={valueInput} />Masculino
    <input type='radio' name='genero' onChange={valueInput} />Feminino
    <input type='radio' name='genero' onChange={valueInput} />Não binário
  </div>
  <button className='btn'>
    Alterar
  </button>
</div>
</form>


</>
  );
}

export default FormEditProfile;