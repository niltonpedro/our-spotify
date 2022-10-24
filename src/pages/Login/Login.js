import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import '../RegistrationForm/RegistrationForm.css';
import logo from '../../assets/menu/logoSpotify2.png';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState({dadosInvalidos: ''});
    const navegacao = useNavigate();

    function enviar(e) {
        e.preventDefault();

        axios.get(`http://localhost:3001/usuario?email=${email}`)
            .then((res) => {
                const usuario = res.data[0];

                if ( usuario.senha !== senha ) {
                    setError({dadosInvalidos: 'Dados inválidos'});
                    return;
                }

                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                navegacao('/Home')
            })
    }

    return (
    <>
    {error.dadosInvalidos && ( <div> Ops! Ocorreu um erro.
        {error.dadosInvalidos} </div>)}

        <form className='container' onSubmit={ e => enviar(e) }>
            <Link to={'/Home'}>
            <img src={logo} alt="logo" className='img' />
            </Link>

            <h3 >Faça login com seu endereço de E-mail</h3>
            <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <TextField
            id="senha"
            type='password'
            label="Senha"
            variant="outlined"
            name="password"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            />
            
            <button className='btn'>
            Entrar
            </button>
        </form>

        {     console.log(setEmail.value) }
    </>
    );
}
export default Login;