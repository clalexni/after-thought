import React from "react";
import { hot } from 'react-hot-loader/root';
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
      </>
    );
  }
}

export default hot(App);
