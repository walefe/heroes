import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png';

import { Form, Container } from './styles';

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
    };

    handleSignUp = e => {
        e.preventDefault();
        alert("Eu vou te registrar");
    };

    render() {
     return (
         <Container>
             <Form onSubmit={this.handleSignUp}>
                <img src={Logo} alt="Logo heroes"/>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text"
                    placeholder="Nome de usuário"
                    onChange={e => this.setState({ username: e.target.value })}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/">Fazer Login</Link>
             </Form>
         </Container>
     );
    }
}

export default SignUp;