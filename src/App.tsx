import { Route, Routes } from "react-router-dom";
import "@fontsource/poppins/700.css"; // Жирный стиль (700)
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

function App() {
  return (
    <Routes>
      {/* Nmadr */}
      <Route element={<RootLayout />}>

        <Route index element={<Home />} />
      </Route>
      
    </Routes>
  );
}

export default App;
