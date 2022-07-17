import { Routes, Route } from "react-router-dom";

import { Clients } from "./containers/Clients";
import { Home } from "./containers/Home";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
