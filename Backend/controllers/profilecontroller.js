// Assuming you have an Express.js server
const express = require("express");
const app = express();

// Define your API endpoint for retrieving user data
// ...

app.get("/api/user/:username", async (req, res) => {
    const { username } = req.params;
  
    try {
      const user = await User.findOne({ username }); // Modify this to match your user schema
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      console.error("Error retrieving user data:", error);
      res.status(500).json({ error: "Failed to retrieve user data" });
    }
  });
  
  // ...
  

// Start your Express server
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
