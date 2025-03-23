// import React from "react";
// import LoginForm from "./LoginForm";
// function App() {
//   let isLoggedIn = false;

//   function renderConditionally() {
//     if (isLoggedIn === true) {
//       return (
// <h1>Hello</h1>
//       )
//     } else {
//       return (<LoginForm />)
//     }
//   }
//   return (
//     <div className="container">
//       {renderConditionally()}

//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <h2>Hello, {user}! You are logged in. 🎉</h2>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
