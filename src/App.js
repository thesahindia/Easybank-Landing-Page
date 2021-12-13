import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
