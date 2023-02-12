import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log("Child - constructor " + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tahirkhan056");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.helloInterval = setInterval(() => {
      console.log("Hello i am setInterval");
    }, 1000);
    console.log("Child - componentDidMount " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child - componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.helloInterval);
    console.log("Child - componentWillUnmount");
  }

  render() {
    console.log("Child - render " + this.props.name);
    return (
      <div>
        <h3>Profile</h3>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Location: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default ProfileClass;
