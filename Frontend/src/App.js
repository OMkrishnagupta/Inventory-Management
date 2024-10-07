import LandingPage from "./pages/landingpage";
import Bill from "./pages/billpage";
import StocksPage from "./pages/stocksPage"; // Changed to PascalCase
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/bills" element={<Bill />} />
      <Route path="/stocks" element={<StocksPage />} />{" "}
      {/* Changed to PascalCase */}
    </Routes>
  );
}

export default App;
