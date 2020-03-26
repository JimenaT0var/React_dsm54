import React ,{Component} from 'react';

class Clasedigital extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'Pero debo conectarme a classroomfrrf',
        }

    }

    render(){
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default Clasedigital;