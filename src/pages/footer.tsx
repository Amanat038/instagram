const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 border-pink-600">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-500 text-sm space-y-2">
        {/* Links */}

        {/* Copyright */}
        <div className="text-pink-500 font-bold">
          &copy; {new Date().getFullYear()} Instagram Clone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
