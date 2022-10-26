import { useContext, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";

export const Register = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async() => {
        if (name && email && password ) {
            const isLogged = await auth.signin(name, email, password)
            if(isLogged) {
                navigate('/')
            } else {
                alert("Não deu certo.")
            }
        }
    }
    
const NavUnlisted = styled.ul`
    text-decoration: none;
`;
const linkStyle = {
    color: '#fff',
    textDecoration: "none",
}
    return <>
          <p>Cadastro</p>
    <div className="input-cont">
        <input 
        className="input-block" 
        placeholder="Usuário"
        value={name} 
        onChange={e => setName(e.target.value)}
        />
        <input 
        className="input-block" 
        placeholder="E-mail" 
        type="email"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        />
        <input 
        className="input-block" 
        placeholder="Senha" 
        type="password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />
        <button className="btn-send" >
            <Link style={linkStyle} to="/login">
                Enviar
            </Link>
        </button>
    </div> 
    </>
}

export default Register