import React from "react";

export default class Manas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haserror: false,
      error: undefined,
    };
  }
  static getDerivedStateFromError(error) {
    return { haserror: true, error: error };
  }
  componentDidCatch(error) {
    console.log(error);
  }
  render() {
    if (this.state.haserror) {
      return <p> MANAS found the error</p>;
    } else {
      return this.props.children;
    }
  }
}
