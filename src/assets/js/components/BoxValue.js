import React from "react";
import { connect } from "react-redux"
import { fetchUser } from "../actions/userActions"

@connect((store) => {
  return {
    user: store.user.user
  }
})
export default class BoxValue extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render(){
    return <p>Value selected: {this.props.user.name}</p>
  }

}
