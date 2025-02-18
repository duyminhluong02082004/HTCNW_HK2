import React from "react";
import '../App.css';

class DisplayInfor extends React.Component {
  render() {
    const { listUser } = this.props; // Lấy danh sách người dùng từ props

    // DisplayInfor.jsx
    return (
        <div>
        {listUser.map((user) => {
            return (
            <div
                key={user.id}
                className={`user-card ${user.Age < 18 ? "red" : "blue"}`}
            >
                <div>User name is: {user.Name}</div>
                <div>User Age: {user.Age}</div>
                <hr />
            </div>
            );
        })}
        </div>
    );
  }
}

export default DisplayInfor;
