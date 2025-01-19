'use client'
import { useState } from "react";
import { FormDiv, InputBorder } from "./styles";
import styles from "./component.module.css";
import { useRouter } from "next/navigation";

const FormContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPassordError] = useState(false);

  const router = useRouter();

  function resetForm() {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(password.length <= 5) {
      alert('Erro ao fazer login')
      setPassordError(true)
    } else {
      alert('Login efetuado com sucesso')
      router.push('/userpage')
    }

    resetForm();
  }
  return (
    <FormDiv>
      <form onSubmit={ (event) => handleSubmit(event)}>
        <label htmlFor="email">
          E-mail:
          <InputBorder>
            <input
              id="email"
              type="email"
              value={email}
              onChange={({target}) => setEmail(target.value)}
              placeholder="Digite seu e-mail"
              required/>
          </InputBorder>
        </label>
        <label htmlFor="passowrd">
          Senha:
          <InputBorder>
            <input
              id="password"
              type="password"
              value={password}
              onChange={({target}) => setPassword(target.value)}
              onClick={ ()=> setPassordError(false)}
              placeholder="Digite sua senha"
              required />
          </InputBorder>
        </label>
        {passwordError && (
          <p className={styles.errorMensage}>*A senha precisa ter 6 caracteres</p>
        )}
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </FormDiv>
  )
}

export default FormContainer;