import React from "react";

export default class HelloWorld extends React.Component {

  render() {
    return (
      <section id="hello-world">
        <h2>Hello World, {this.props.name}!</h2>
      </section>
    )
  }

}
