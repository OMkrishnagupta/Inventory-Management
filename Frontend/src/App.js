import LandingPage from "./pages/landingpage";
import Bill from "./pages/billpage";
import StocksPage from "./pages/stocksPage"; // Changed to PascalCase
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
  <ChakraProvider>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/bills" element={<Bill />} />
      <Route path="/stocks" element={<StocksPage />} />{" "}
      {/* Changed to PascalCase */}
    </Routes>
    </ChakraProvider>
  );
}

export default App;
