import React, { useState, useEffect } from "react";

function User() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); // Empty dependency array ensures the effect runs only once after mounting

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <b>{item.name}</b> {item.email}
          </li>
        ))}
      </ul>
    );
  }
}

export default User;
