// import React from "react";
// import ChildComponent from "./ChildComponent";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       valueInput: "", // Lưu trữ giá trị input từ form
//     };
//   }

//   // Hàm xử lý khi nhập liệu vào input
//   handleOnchangeInput = (event) => {
//     this.setState({
//       valueInput: event.target.value,
//     });
//   };

//   // Hàm xử lý khi form được submit
//   handleOnSubmit = (event) => {
//     event.preventDefault(); // Ngăn không để trang tải lại khi submit
//     console.log("Submitted value:", this.state.valueInput); // In giá trị nhập vào ra console
//   };

//   render() {
//     return (
//       <div>
//         <h2>MyComponent (Parent)</h2>

//         {/* Form với sự kiện onSubmit */}
//         <form onSubmit={this.handleOnSubmit}>
//           <input
//             type="text"
//             value={this.state.valueInput} // Gán giá trị input từ state
//             onChange={this.handleOnchangeInput} // Gọi hàm khi người dùng thay đổi giá trị
//           />
//           <button type="submit">Submit</button> {/* Button để submit form */}
//         </form>

//         {/* Truyền giá trị input xuống ChildComponent */}
//         <ChildComponent
//           valueInput={this.state.valueInput}
//           handleInput={this.handleOnchangeInput}
//         />
//       </div>
//     );
//   }
// }

// export default MyComponent;


import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, Name: "Dung", Age: 49 },
      { id: 2, Name: "Hoang", Age: 34 },
      { id: 3, Name: "Chien", Age: 32 },
    ],
  };

  handleAddnewUser = (userObject) => {
    this.setState({
      listUser: [userObject, ...this.state.listUser],
    });
  };

  // Hàm xóa người dùng
  handleDeleteUser = (userID) => {
    const listUserClone = this.state.listUser.filter((item) => item.id !== userID); 
    this.setState({
      listUser: listUserClone,
    });
  };

  render() {
    return (
      <div>
        <h1>MyComponent</h1>
        <UserInfor handleAddnewUser={this.handleAddnewUser} />
        <hr />
        {/* Truyền handleDeleteUser xuống DisplayInfor */}
        <DisplayInfor
          listUser={this.state.listUser}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default MyComponent;




