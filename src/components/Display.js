function Display(props) {
    return (
      <div className="display">
      <p id = "acumulado"> {props.cuentas} </p>
      <p id = "display"> {props.resultado || props.operacion} </p>
        </div>
    );
  }
  
export default Display;
  
