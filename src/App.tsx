import { useState } from "react";
import { GlobalStyle } from "./global";
import { Header } from "./components/Header";

export function App() {
  const [username, setUsername] = useState("usuarioteste");

  return (
    <>
      <GlobalStyle />
      <Header username={username} setUsername={setUsername} />

      <main
        style={{ maxWidth: "600px", margin: "2rem auto", padding: "0 1rem" }}
      >
        {/* Futuro componente de form e feed entrarão aqui */}
      </main>
    </>
  );
}

export default App;
