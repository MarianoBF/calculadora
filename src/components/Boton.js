import React from "react";

export default class Boton extends React.Component {
  render() {
    return (
      <div className="boton">
        <button
          name={this.props.valor}
          onClick={(e) => this.props.onClick(e.target.name)}
          id={this.props.id}
        >
          {this.props.valor}
        </button>
      </div>
    );
  }
}
