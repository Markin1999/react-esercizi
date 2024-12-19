import { useEffect, useState } from "react";
import "./App.css";
import { UserProvider } from "./userContext";
import { Registrazione } from "./componenti/Registrazione";

function App() {
  return (
    <UserProvider>
      <Registrazione />
    </UserProvider>
  );
}

export default App;
