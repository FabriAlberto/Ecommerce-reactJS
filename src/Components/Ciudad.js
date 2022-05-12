
const Ciudad=(props)=>{
  
  return(
    <>
<h1>Ciudad: {props.nombre}</h1>
<h2>cantidad de habitantes :{props.habitantes}</h2>
</>
  );
}


/* import { Components } from "react";

class Ciudad  extends Components{
    render(){
        return(
            <>
            <hr/>
            <h1>Ciudad: {this.props.nombre}</h1>
            <h2>cantidad de habitantes :{this.props.habitantes}</h2>
            </>

        );
    };
} */

export default Ciudad;