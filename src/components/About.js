import { Component } from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    // Best place to call API
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Page</h1>
        <p>This is react chapter 6</p>
        <ProfileClass name="First Child" />
        <Profile />
      </div>
    );
  }
}

export default About;

/* ---------- Component LifeCycle -------------
 * Parent constructor
 * Parent Render
 *   First Child Constructor
 *   First Child Render
 *   Second Child Constructor
 *   Second Child Render
 *   First Child ComponentDidMount
 *   Second Child ComponentDidMount
 * Parent ComponentDidMount
 */
