import { Link, TextField } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../RegistrationForm/RegistrationForm.css';
import logo from '../../assets/menu/logoSpotify2.png';

function FormEditProfile() {

  const navegacao = useNavigate();

  const [user, setUser] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  async function buscarUsuario() {   //async para pegar dados do servidor e manter o usuario livre
    let userLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    let apiReturn = await axios.get(`http://localhost:3001/usuarios/?email=${userLogado.email}`) 
      .then(async function (response) {
        setUser(response.data[0]);
        console.log(user);
      })
      .catch(function (error) {
        console.log("erro:");
        console.log(error);
      });
    return apiReturn;
  }

    //Receber os dados do formulário
    /*const valueInput = e => setUser({
   
    [e.target.setUser.nome]: e.target.value,
    [e.target.setUser.email]: e.target.value,
    [e.target.setUser.senha]: e.target.value


    });*/

    //Receber os dados do formulário
  const valueInput = e => setUser({
    ...user,
    [e.target.name]: e.target.value
  });
  
 /* useEffect(() => {
    axios.get(`http://localhost:3001/usuarios?email=${localStorage.getItem("email") ?? sessionStorage.getItem("email")}`).then((response) => {
      setUser.email(response.data[0].email);
      setUser.nome(response.data[0].nome);
      setUser.senha(response.data[0].senha);
      setUser.id(response.data[0].id);
    })
  }, []);*/

  useEffect(() => {
    buscarUsuario();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    if(!user.email || !user.nome || !user.senha){

      alert("Por favor, preencha todos os campo")
      return;
    }

    axios.patch(`http://localhost:3001/usuarios/${user.id}`,
      {
        email: user.email,
        nome:  user.nome,
        senha: user.senha
      }
    ).then(function(response){
      user.email = "";
      user.senha = "";
      user.nome = "";
      
      if(sessionStorage && sessionStorage.getItem("nome")){
        sessionStorage.setItem("nome", user.nome);
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("senha", user.senha);
      }
      if(localStorage && localStorage.getItem("nome")){
        localStorage.setItem("nome", user.nome);
        localStorage.setItem("email", user.email);
        localStorage.setItem("senha", user.senha);
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
    variant="outlined"
    name="email"
    required={true}
    onChange={valueInput}
    value={user.email}
  />

  <TextField
    id="senha"
    type='password'
    variant="outlined"
    name="senha"
    required={true}
    onChange={valueInput}
    value={user.senha}
  />

  <TextField
    id="nomeuser"
    variant="outlined"
    name="nome"
    required={true}
    onChange={valueInput}
    value={user.nome}
  />
  <button className='btn'>
    Alterar
  </button>
</div>
</form>


</>
  );
}

export default FormEditProfile;