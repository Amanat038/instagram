import "./App.css";
import Layout from "./pages/layout";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Layout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
