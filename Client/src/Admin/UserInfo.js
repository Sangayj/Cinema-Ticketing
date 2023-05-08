import React, { useEffect, useState } from "react";
import "./UserInfo.css";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleSave = (updatedUser) => {
    handleUpdate(updatedUser._id, updatedUser)
      .then((data) => {
        const updatedUsers = users.map((u) => {
          if (u._id === data._id) {
            return data; // use the updated user returned by the API
          } else {
            return u;
          }
        });
        setUsers(updatedUsers); // update the state of users
        setEditingUser(null);
        setShowModal(false);
        console.log(`User with ID ${data._id} has been updated.`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setEditingUser(null);
    setShowModal(false);
  };

  const handleUpdate = async (id, user) => {
    try {
      const res = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const updatedUser = await res.json();
      return updatedUser;
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers(users.filter((user) => user._id !== id));
        console.log(`User with ID ${id} has been deleted.`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>User Details</h1>
      <Link to="/SignUp" className="add-users-button">
        Add Users
      </Link>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <input type="password" defaultValue={user.password} readOnly />
              </td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <UserModal
          user={editingUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default UserInfo;
