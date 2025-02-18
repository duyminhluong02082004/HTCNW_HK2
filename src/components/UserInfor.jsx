import React from "react";

class UserInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Age: "",
    };
  }

  // Xử lý sự kiện thay đổi giá trị input
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Xử lý sự kiện submit form
  handleOnSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 100) + 1, // Tạo ID ngẫu nhiên
      Name: this.state.Name,
      Age: this.state.Age,
    };
    this.props.handleAddnewUser(newUser); // Gửi dữ liệu người dùng mới lên cha
    this.setState({ Name: "", Age: "" }); // Reset form
  };

  render() {
    return (
      <div>
        <h2>Add User Information</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={this.state.Name}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="Age"
            placeholder="Age"
            value={this.state.Age}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
