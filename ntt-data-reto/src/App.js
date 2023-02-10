import './App.css';
import React, { useEffect, useState } from "react";

function App() { 
  const [user, setUser] = useState(null);

  const fetchData = () => {
    return fetch("https://randomuser.me/api/?seed=foobar&results=15")
          .then((response) => response.json())
          .then((data) => setUser(data.results));
  }

  useEffect(() => {
    fetchData();
    console.log(user)
  },[])

  return (
    <div>
    <table className="table-auto">
  <thead>
    <tr className="columnas">
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Edad</th>
      <th>Género</th>
      <th>Email</th>
      <th>Nacionalidad</th>
      <th>Foto</th>
    </tr>
  </thead>
  <tbody>
    {user && user.length > 0 && user.sort((a,b)=>a.dob.age - b.dob.age).map((userObj, index) => (
    <tr className={index % 2 === 0 ? "clasePar": "claseImpar"} key={index}>
      <td>{userObj.name.first}</td>
      <td>{userObj.name.last}</td>
      <td>{userObj.dob.age}</td>
      <td>{userObj.gender === "female" ? "F" : "M"}</td>
      <td>{userObj.email}</td>
      <td>{userObj.nat}</td>
      <td><img className="img" src={userObj.picture.thumbnail}/></td>
    </tr>
          ))}
      </tbody>
    </table>
    <a href="https://randomuser.me/api/?seed=foobar&results=15&format=csv&dl">Descargar CSV</a>
    </div>
  );
}

export default App;