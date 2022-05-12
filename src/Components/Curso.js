 /* const Curso = ({name,teacher,duration}) => { */
 const Curso = (props) => {
    return(
      < >
      <hr/>
      <h2> {props.name}</h2>
      <div> profesor: <span>{props.teacher}</span></div>
      <div> duracion: <span>{props.duration}</span></div>
      </>
    );
  }

  export default Curso