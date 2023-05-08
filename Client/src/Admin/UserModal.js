import React, { useState, useEffect } from "react";
import "./UserModal.css";

const UserModal = ({ user, onSave, onCancel, showModal, fetchUser }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = async () => {
    const updatedUser = await onSave(editedUser);
    setEditedUser(updatedUser);
    fetchUser();
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        <h2>Edit User Details</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={editedUser?.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={editedUser?.username || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={editedUser?.email || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={editedUser?.password || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            value={editedUser?.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="modal-buttons">
          <button className="save" onClick={handleSave}>
            Save
          </button>
          <button className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
