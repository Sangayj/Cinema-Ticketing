import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [history]);

  function handleLogout() {
    // Perform logout action here
    history.push("/");
  }

  return (
    <div>
      <h1>Logout page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
