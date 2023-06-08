import { Component } from "react";

class Form extends Component{

    state = {
        name :"",
    }

myChangeFunc=(ev)=>{
    const { name,value } = ev.target;
    console.log(name,value);
    
}
    render(){
        return(
            <div>
                <input type="text" 
                name="name"
                value={this.state.name}
                onChange={this.myChangeFunc} />
            </div>
        )
    }
}
export default Form;