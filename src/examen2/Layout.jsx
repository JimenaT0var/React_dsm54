import React from 'react';
import '../assets/style/layout.scss';
import JTH from '../components/JTH';
import Vacaciones from '../components/Vacaciones';
import Clasedigital  from '../components/Clasedigital';


const App = () =>(
    <div className="App">
        <JTH />
            <Vacaciones />
                <Clasedigital />
                    
              
    </div>
);
export default App;