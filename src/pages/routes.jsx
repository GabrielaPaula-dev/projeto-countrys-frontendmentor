import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Details } from "./details";

const AppRouts = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/:name`}
          element={<Details/>}
        />
      </Routes>
    </BrowserRouter>
  );
};
export { AppRouts };
