import React, { useState } from "react";
import Gateway from "./components/Gateway.component";
import Home from "./components/Home.component";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  if (!login) {
    return (
      <div>
        <Gateway setUser={setUser} setLogin={setLogin}/>
      </div>
    );
  } else {
    return (
      <div>
        <Home user={user} setUser={setUser} setLogin={setLogin} />
      </div>
    );
  }
}

export default App;
