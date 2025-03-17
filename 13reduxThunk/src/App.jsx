import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteData } from "./redux/fetchUserSlice";

function App() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {loading && <h3>page is loading.....</h3>}
      {error && (
        <h3>
          {" "}
          {error} {console.log("Hello")}{" "}
        </h3>
      )}
      <>
        <table style={{ width: "100%" , borderCollapse: 'collapse'}}>
          <thead>
            <tr>
              <th>ID: </th>
              <th>Name</th>
              <th>Username</th>
              <th>Address</th>
              <th>Company</th>
              <th>Delete Data</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  {user.address.street}, {user.address.city},{" "}
                  {user.address.zipcode}, Lattitude:{" "}
                  <span style={{ color: "#e51197", fontWeight: "bold" }}>
                    {" "}
                    {user.address.geo.lat}{" "}
                  </span>{" "}
                  Longtitude:{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {" "}
                    {user.address.geo.lng}{" "}
                  </span>
                </td>
                <td>{user.company.name}</td>
                <td>
                  <button onClick={() => { dispatch(deleteData(user.id))}}> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
}

export default App;
