import React from 'react';
import '../assets/style/Login.scss';
import Google from '../assets/static/google-icon.png';
import Twitter from '../assets/static/twitter-icon.png';


const Login = () => {
    return(
        
    <loogin className="login">
    <section class="login">
    <section class="login__container">
      <h2>Inicia sesión</h2>
      <form class="login__container--form">
        <input class="input" type="text" placeholder="Correo"/>
        <input class="input" type="password" placeholder="Contraseña"/>
        <button class="button">Iniciar sesión</button>
        <div class="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section class="login__container--social-media">
        <div><img src="../assets/google-icon.png" src={Google}/> Inicia sesión con Google</div>
        <div><img src="../assets/twitter-icon.png" src={Twitter}/> Inicia sesión con Twitter</div>
      </section>
      <p class="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
                 </section>
            </section>
        </loogin>
    )
}

export default Login;