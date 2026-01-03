import { useEffect, useRef, useState } from "react";
import PostSection from "./Post";
type SlideItem = {
  name: string;
  image: string;
};

const items: SlideItem[] = [
  { name: "Anita", image: "https://via.placeholder.com/150" },
  { name: "Riya", image: "https://via.placeholder.com/150" },
  { name: "Pooja", image: "https://via.placeholder.com/150" },
  { name: "Neha", image: "https://via.placeholder.com/150" },
  { name: "Kajal", image: "https://via.placeholder.com/150" },
  { name: "Sonia", image: "https://via.placeholder.com/150" },
  { name: "Anita", image: "https://via.placeholder.com/150" },
  { name: "Riya", image: "https://via.placeholder.com/150" },
  { name: "Pooja", image: "https://via.placeholder.com/150" },
  { name: "Neha", image: "https://via.placeholder.com/150" },
  { name: "Kajal", image: "https://via.placeholder.com/150" },
  { name: "Sonia", image: "https://via.placeholder.com/150" },
  { name: "Anita", image: "https://via.placeholder.com/150" },
  { name: "Riya", image: "https://via.placeholder.com/150" },
  { name: "Pooja", image: "https://via.placeholder.com/150" },
  { name: "Neha", image: "https://via.placeholder.com/150" },
  { name: "Kajal", image: "https://via.placeholder.com/150" },
  { name: "Sonia", image: "https://via.placeholder.com/150" },
];

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  const visibleImages = 5;
  const totalSlides = items.length - visibleImages + 1;

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-4 transition-transform duration-500 ease-in-out"
      >
        {items.map((items, i) => (
          <div key={i} className="flex-shrink-0 w-1/6 flex justify-center">
            <div>
              <div className="p-[3px] rounded-full bg-gradient-to-r from-pink-500 to-orange-400">
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-20 h-20 p-4 rounded-full object-cover loginbackground"
                />
              </div>
              {/* Name */}
              <p className="mt-2 text-sm text-center font-medium text-white">
                {items.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4 mx-12">
        {/* Slider Section */}
        <div className="col-span-8 mx-12">
            <Slider></Slider>
            <PostSection></PostSection>
        </div>

        {/* Right Section */}
        <div className="col-span-4  p-4 rounded-lg">section</div>
      </div>
    </>
  );
}

export default Home;
