import './App.css';
import Boton from "./components/Boton";
import Display from "./components/Display";
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cuentas: [], resultado: "", operacion: null, flagoperacion: false, valor: null}
  }

  operar = boton => {
    switch (boton) {
      case "C":
        this.setState({resultado: "", operacion: null, flagoperacion: false, cuentas: []});
        break;
      case "=":
        this.setState((state) => { 
          return {cuentas: [...state.cuentas, state.resultado], resultado: null, operacion: null, flagoperacion: false, valor: state.cuentas.join("")}
        });
          
        // this.setState((state) => {
        //   return {resultado: b}
        //   });        
          break;
      case "+":
      case "-":
      case "*":
      case "/":        
        this.setState({cuentas: [...this.state.cuentas, this.state.resultado], resultado: null, operacion: boton, flagoperacion: true})
        break
      
      default:
        if (this.state.flagoperacion === true) {this.setState({operacion: null, cuentas: [...this.state.cuentas, this.state.operacion], resultado: "", flagoperacion: false})}
        switch (boton) {
          case "0":
            if (this.state.resultado !== "0") { 
              this.setState((state) => {
                return {resultado: state.resultado + boton}
              });
            } else {
              this.setState((state) => {
                return {resultado: state.resultado}
            });
            }
            break;
          default:
            this.setState((state) => {
              return {resultado: state.resultado + boton}
              });
            break;
        }
        break

    }
  }

  sumar = cuenta => {
    console.log("a")
  }

 //split(/\+|-|\/|\*/) 

  // calcular = () => {  
  //   return {resultado: eval(...this.state.cuentas)}
  // }

  render() {
  return (
    <div className="App">
    <Display resultado={this.state.resultado} operacion={this.state.operacion} cuentas={this.state.cuentas}/>

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

      </div>
  );
}
}

export default App;
