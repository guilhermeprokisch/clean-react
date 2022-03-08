import React from 'react'
import Styles from './login-syles.scss'
import Spinner from '../components/spinner/spinner'
import Header from '../components/login-header/login-header'
import Footer from '../components/footer/footer'
import Input from '../input/input'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Digite seu e-mail' />
        <Input type='password' name='password' placeholder='Digite seu senha' />
        <button className={Styles.submit} type='submit'>
          Entrar
        </button>
        <span className={Styles.link}>Criar Conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
