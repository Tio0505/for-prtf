import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts";
import { HOME } from "./data/routes";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index path={HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
