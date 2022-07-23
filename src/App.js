import React, { useState } from "react";
import Home from "./pages/Home";
import "./index.css";

function App() {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  return (
    <div className="App">
      <Home
        userDropdownOpen={userDropdownOpen}
        setUserDropdownOpen={setUserDropdownOpen}
      />
    </div>
  );
}

export default App;
