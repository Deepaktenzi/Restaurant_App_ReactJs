import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('ComponentDidMount Called');
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Called');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Component Will UnMount');
  }

  render() {
    return (
      <>
        <h1>Hello THis is class Components</h1>
        <h2>{this.props.Name}</h2>

        <h2>Count = {this.state.count2}</h2>
        <button
          onClick={() => this.setState({ count2: this.state.count2 + 1 })}
        >
          Button
        </button>
      </>
    );
  }
}
export default Profile;
