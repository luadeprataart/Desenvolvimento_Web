import * as React from "react";
import "./App.css";

function App() {
  const [users, setUsers] = React.useState([]);

  const funcaoAssync = async () => {
    const resultado = await fetch("https://reqres.in/api/users/");
    const json = await resultado.json();
    setUsers(json.data);
  };

  funcaoAssync();

  return (
    <div className="flex">
      {users.map((user) => {
        return (
          <div key={user.id} className="conteudo">
            <p>
              {" "}
              <strong> {user.first_name} </strong>{" "}
            </p>
            <p> {user.email} </p>
            <img key={user.avatar} src={user.avatar} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
