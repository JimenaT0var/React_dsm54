import React ,{Component} from 'react';

class JTH extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'Me voy gt',
        }

    }

    render(){
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default JTH;