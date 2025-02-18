import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "", // Giá trị mặc định của input
    };
  }

  // Hàm handle khi người dùng thay đổi giá trị input
  handleInput = (event) => {
    this.setState({ valueInput: event.target.value });
  };

  render() {
    let { valueInput } = this.state; // Destructure state

    return (
      <div>
        <h2>ChildComponent (Child)</h2>
        <input
          value={valueInput}
          onChange={this.handleInput} // Gọi hàm handle khi thay đổi
          type="text"
        />
        <p>Current Input: {valueInput}</p> {/* Hiển thị giá trị hiện tại */}
      </div>
    );
  }
}

export default ChildComponent;
