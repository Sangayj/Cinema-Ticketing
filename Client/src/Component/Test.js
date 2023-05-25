import Cookies from "js-cookie";

const getCurrentUsername = () => {
  const token = Cookies.get("token");
  if (token) {
    const decodedToken = decodeToken(token);
    const username = decodedToken.username;
    return username;
  }
  return null;
};

const decodeToken = (token) => {
  try {
    // Decode the token payload
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
export default getCurrentUsername;
