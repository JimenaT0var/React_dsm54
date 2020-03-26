import React from 'react';
import '../assets/style/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carusel from '../components/Carrusel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CaruselItem';

const App = () =>(
    <div className="App">
        <Header />
            <Search />
            <Categories>  
                <Carusel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    </Carusel>
                </Categories>
              
                    <Footer />
              
    </div>
);
export default App;