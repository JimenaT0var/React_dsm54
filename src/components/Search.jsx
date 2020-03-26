
import React from 'react';
import '../assets/style/Search.scss';


const Search = () =>{
    return(
        <center>
        <div className="">
              <section class="main">
    <h2 class="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" class="input" placeholder="Buscar..." />
  </section>
        </div>
        </center>
    );
};


export default Search;