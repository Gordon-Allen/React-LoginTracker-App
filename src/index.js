import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: false };
  }
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

class Body extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  getData = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 3000);
  };

  componentDidMount() {
    this.getData();
    console.log("this is after getData() is called");
  }

  render() {
    return <div>{this.state.isLoading ? "Loading" : "This is my info"}</div>;
  }
}

function Header() {
  return <p> This is G-Man's header</p>;
}

function Footer() {
  return <p>This is G-Man's footer</p>;
}

ReactDOM.render(<App />, document.getElementById("root"));
