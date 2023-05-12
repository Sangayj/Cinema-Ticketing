import React from "react";
import { useLocation } from "react-router-dom";

function Book() {
  const location = useLocation();
  const theatre = location.state?.theatre;

  return (
    <div>
      <h1>Booking Page</h1>
      {theatre ? (
        <p>You have selected {theatre} theatre.</p>
      ) : (
        <p>No theatre selected.</p>
      )}
    </div>
  );
}

export default Book;
