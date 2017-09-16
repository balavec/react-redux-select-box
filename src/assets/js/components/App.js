import React from "react";

import HelloWorld from './HelloWorld'
import SelectBox from './SelectBox'
import BoxValue from './BoxValue'

export default class App extends React.Component {

  render() {
    return (
      <section>
          <HelloWorld name='Robert' />
          <SelectBox />
          <BoxValue />
      </section>
    )
  }

}
