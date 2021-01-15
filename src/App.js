import './App.css';
import Boton from "./components/Boton";
import Display from "./components/Display";
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {resultado: "0"}
  }

  operar = boton => {
    if (isNaN(boton)) {
      console.log("es una operación")
    }
    this.setState({resultado: boton})
  }

  render() {
  return (
    <div className="App">
    <Display resultado={this.state.resultado}/>

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
