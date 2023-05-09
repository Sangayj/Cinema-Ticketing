import React from "react";

function Seat() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const body = {
      number: formData.get("number"),
      price: formData.get("price"),
    };

    try {
      const response = await fetch("http://localhost:8000/api/seats/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to add seat");
      }

      const seat = await response.json();
      alert(`Seat ${seat.number} added successfully!`);
      event.target.reset();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Seat Number:
        <input type="number" name="number" required />
      </label>
      <label>
        Price:
        <input type="number" name="price" required />
      </label>
      <button type="submit">Add Seat</button>
    </form>
  );
}

export default Seat;
