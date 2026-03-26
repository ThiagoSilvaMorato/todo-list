import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "@/pages/PageComponents";
import LayoutMain from "./pages/LayoutMain";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path='/components' element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
