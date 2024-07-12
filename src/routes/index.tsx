import { Route, Routes, useLocation } from "react-router-dom";
import { Gow, Home } from "../pages";

export const Rotas = () => {
  const location = useLocation();

  const hiddenComponents =
    location.pathname === "/error";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/god-of-war" element={<Gow />} />
      </Routes>
    </>
  );
};
