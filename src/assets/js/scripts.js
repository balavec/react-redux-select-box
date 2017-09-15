import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash'
import '../scss/style.scss';


class BoxValue extends React.Component {

  render(){
    return <p>Value selected: {this.props.name}</p>
  }

}

class HelloWorld extends React.Component {

  render() {
    return (
      <section id="hello-world">
        <h2>Hello World, {this.props.name}!</h2>
      </section>
    )
  }

}

class SelectBox extends React.Component {

  constructor(){
    super();
    this.state = {value: 100};

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount(){
    this.state.drgs = [
      {'id': 100, 'name': 'Cool one'},
      {'id': 200, 'name': 'Hot one'},
      {'id': 250, 'name': 'Green'}
    ]
  }

  handleSelect(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  render() {

    var options = _.map(this.state.drgs, (drg) => {
      return <option key={drg.id} value={drg.id}>{drg.name}</option>;
    });

    return (
      <section id="select-box">
        <select className="form-control" onChange={this.handleSelect}>
          {options}
        </select>
        <p>Value selected: {this.state.value}</p>
      </section>
    )
  }

}

class App extends React.Component {

  render() {
    return (
      <section>
          <HelloWorld name='Robert' />
          <SelectBox />
      </section>
    )
  }

}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
