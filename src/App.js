import './App.css';
import Boton from "./components/Boton";
import Display from "./components/Display";
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {resultado: "0", cantOps: 1, accion: "" }
  };

  operar = boton => {
    switch (boton) {
      case "C":
        this.borrar();
        break;
      case "=":
        this.calcular();
        break;
      case "-":
        let resta = String(this.state.resultado).slice(-1);
        if (resta.match(/[+|*|/]/)) { 
          this.setState({
            resultado: this.state.resultado + boton,
          });
        } else {
        this.setState({
            resultado: this.state.resultado + boton,
            cantOps: this.state.cantOps + 1        
        });     
      } 
        break;
      case "+":
      case "/":
      case "*": 
        let opera2 = String(this.state.resultado).slice(-2);
        let opera = String(this.state.resultado).slice(-1);

        if ((opera2.match(/[+|*|/|-]/g)||[]).length===2) {  //sacado el punto
          this.setState({
            resultado: this.state.resultado.slice(0,-2) + boton,
          });
        } else if (opera.match(/[+|*|/|-]/)) { 
            this.setState({
              resultado: this.state.resultado.slice(0,-1) + boton,
            });
        } else {
        this.setState({
            resultado: this.state.resultado + boton,
            cantOps: this.state.cantOps + 1        
        });     
      } 
        break;
      default:
        if (boton !== "0") { 
          if (this.state.resultado.length === 1 && +this.state.resultado[0]===0) {
            this.setState({
              resultado: boton
            })} else {
              if (boton === ".") { 
                let resultado = this.state.resultado + boton;
                let cuentaPuntos = ((String(resultado).match(/\./g)) || []).length
                  if (cuentaPuntos <= this.state.cantOps) {
                    this.setState({
                      resultado: this.state.resultado + boton
                  })}
              } else {
            this.setState({
            resultado: this.state.resultado + boton
          
        });
              }
      } 
      } else {
        if (this.state.resultado.length === 1 && +this.state.resultado[0]===0) {
          this.setState({
            resultado: this.state.resultado
          })} else {
         this.setState({
          resultado: this.state.resultado + boton
      });} 
        
      }
        
      }
    };
  

  calcular = () => {
    let respuesta = this.state.resultado;
    if (+respuesta[0]===0) {respuesta = respuesta.slice(1)}
    this.setState({
      resultado: eval(respuesta) || "error"
    });
  };

  borrar = () => {
    this.setState({
      resultado: "0",
      cantOps: 1
    });
  };

  render() {
  return (
    <div className="App">

      <h1>Calculadora de 12 dígitos</h1>

      <div className="calculadora">

      <Boton onClick={this.operar} valor="0" id="zero"/>
      <Boton onClick={this.operar} valor="1" id="one"/>
      <Boton onClick={this.operar} valor="2" id="two"/>
      <Boton onClick={this.operar} valor="3" id="three"/>
      <Boton onClick={this.operar} valor="4" id="four"/>
      <Boton onClick={this.operar} valor="5" id="five"/>
      <Boton onClick={this.operar} valor="6" id="six"/>
      <Boton onClick={this.operar} valor="7" id="seven"/>
      <Boton onClick={this.operar} valor="8" id="eight"/>
      <Boton onClick={this.operar} valor="9" id="nine"/>
      <Boton onClick={this.operar} valor="+" id="add"/>
      <Boton onClick={this.operar} valor="-" id="subtract"/>
      <Boton onClick={this.operar} valor="*" id="multiply"/>
      <Boton onClick={this.operar} valor="/" id="divide"/>
      <Boton onClick={this.operar} valor="." id="decimal" />
      <Boton onClick={this.operar} valor="=" id="equals" />
      <Boton onClick={this.operar} valor="C" id="clear" />


      <Display resultado={this.state.resultado}/>

      </div>
    </div>
  );
}
}



export default App;
