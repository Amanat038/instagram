import {
  HeartIcon,
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import instagram from "../assets/instagram.png";

function Nav() {
  return (
    <nav className="bg-white border-b border-pink-600 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src={instagram}
              alt={instagram}
              className="h-8 w-auto cursor-pointer"
            />
          </div>
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-pink-500">Instagram</h1>
          </div>

          {/* Search bar */}
          <div className="hidden sm:block flex-1 px-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <HomeIcon className="h-6 w-6 cursor-pointer text-pink-500" />
            <PlusCircleIcon className="h-6 w-6 cursor-pointer text-pink-500" />
            <HeartIcon className="h-6 w-6 cursor-pointer text-pink-500" />
            <UserCircleIcon className="h-8 w-8 cursor-pointer text-pink-500 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
