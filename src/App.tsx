import "./App.css";
import Layout from "./pages/layout";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen loginbackground">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="home" element={<Layout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
