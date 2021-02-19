function Display(props) {
    return (
      <div className="display">
      <p id = "display"> {props.resultado.length < 12 ? props.resultado : props.resultado.toString().slice(0,12)} </p>
        </div>
    );
  }
  
export default Display;
  
