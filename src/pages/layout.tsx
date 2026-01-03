import Home from "./Home";
import Nav from "./navbar";
function Layout() {
  return (
    <>
      {/* Navbar */}
      <Nav />

      {/* Main content */}
      <main className=" md:ml-64 flex-1 p-4  text-white">
        <Home></Home>
      </main>
    </>
  );
}
export default Layout;
