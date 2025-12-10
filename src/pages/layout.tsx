import Nav from "./navbar";
import Footer from "./footer";
function Layout() {
  return (
    <>
      {/* Navbar */}
      <Nav />

      {/* Main content */}
      <main className=" md:ml-64 flex-1 mt-16 p-4  text-white">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Instagram Clone
        </h1>
        <p className="text-center mt-4">Add your main content here</p>
      </main>
    </>
  );
}
export default Layout;
