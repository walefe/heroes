 import React from "react";
import { Link } from 'react-router-dom';
 import { Form, Input } from "@rocketseat/unform";
 import * as Yup from 'yup';


import Logo from '../../assets/Logo.png';
import './global';
import { Container } from './styles';


const schema = Yup.object().shape({
  email: Yup.string()
    .email('Custom invalid email message')
    .required('Custom required message'),
  password: Yup.string().min(4).required(),
})

function SignUp() {
  function handleSubmit(data) {};

  return (
      <Container>

        <Form schema={schema} onSubmit={handleSubmit}>
           <img src={Logo} alt="Logo heroes"/>
            <Input name="nome" type="nome" placeholder="nome"/> 
            <Input name="password" type="password" placeholder="senha" />

            <button type="submit">Save</button>
            <hr />
         <Link to="/">Fazer Login</Link>
        </Form>
      </Container>
  );
}


export default SignUp;