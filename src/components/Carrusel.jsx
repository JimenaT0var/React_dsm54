import React from 'react';
import '../assets/style/Carrusel.scss';

const Carusel = ({children}) => (

        <section className="carousel">
          <div className="carousel__container">
            {children}
          </div>
        </section>
)
export default Carusel;