import { useEffect, useRef, useState } from "react";
import { posts } from "../variables/home";

const PostCard = ({
  image,
  caption,
  username,
  profileImage,
}: {
  image: string;
  caption: string;
  username: string;
  profileImage: string;
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="loginbackground rounded-xl shadow-sm border p-4 mb-4 relative">
      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={profileImage}
            alt={username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-whit">{username}</span>
        </div>

        {/* Vertical dots */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-500 text-xl hover:text-white"
        >
          ⋮
        </button>
      </div>

      {/* 🔹 Modal / Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-4 top-14 bg-dark border rounded-lg shadow-lg w-32 z-10"
        >
          <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Edit
          </button>
          <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Delete
          </button>
          <button
            onClick={() => setOpen(false)}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      )}

      {/* 🔹 Post Image */}
      <img
        src={image}
        alt="post"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* 🔹 Buttons */}
      <div className="flex items-center gap-4 mt-3">
        <button
          onClick={() => setLiked(!liked)}
          className={`text-lg ${liked ? "text-pink-500" : "white"}`}
        >
          ❤️
        </button>

        <button className="text-gray-500 text-lg">💬</button>
      </div>

      {/* 🔹 Caption */}
      <p className="mt-2 text-sm text-white">{caption}</p>
    </div>
  );
};

const PostSection = () => {
  return (
    <div className="space-y-4 m-12">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          image={post.image}
          caption={post.caption}
          username={post.username}
          profileImage={post.profileImage}
        />
      ))}
    </div>
  );
};

export default PostSection;
