import React from 'react';
import '../assets/style/Registro.scss';

const Registro = () => {
    return(
        <registro className="registro">
            <section class="register">
    <section class="register__container">
      <h2>Regístrate</h2>
      <form class="register__container--form">
        <input class="input" type="text" placeholder="Nombre"/>
        <input class="input" type="text" placeholder="Correo"/>
        <input class="input" type="password" placeholder="Contraseña"/>
        <button class="button">Registrarme</button>
      </form>
      <a href="">Iniciar sesión</a>
    </section>
  </section>

        </registro>

    )
}

export default Registro;