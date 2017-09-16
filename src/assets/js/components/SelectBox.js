import React from "react";
import { connect } from "react-redux"
import { setUserName } from "../actions/userActions"

@connect((store) => {
  return {
    user: store.user.user
  }
})
export default class SelectBox extends React.Component {

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

    this.props.dispatch(setUserName(event.target.value.toUpperCase()));

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
