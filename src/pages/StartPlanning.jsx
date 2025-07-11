import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 

const slides = [
  {
    image: "https://i.pinimg.com/1200x/eb/73/1d/eb731d7fe1437bbba6fe4babb188330e.jpg",
    text: "Find the Perfect Venue",
  },
  {
    image: "https://i.pinimg.com/1200x/96/93/03/969303026c913656860d526ad787bc66.jpg",
    text: "Design Your Invitations",
  },
  {
    image: "https://i.pinimg.com/1200x/5a/39/a7/5a39a725b4ed9ac3b3cfe2916519733a.jpg",
    text: "Pick Your Dream Dress",
  },
  {
    image: "https://i.pinimg.com/736x/f1/0f/c1/f10fc14736c432d756f27d786d0d4593.jpg",
    text: "Choose Your Decor Style",
  },
  {
    image: "https://i.pinimg.com/736x/a9/f3/e1/a9f3e17f67472ed23db77cf85d67b7f5.jpg",
    text: "Plan Your Wedding Menu",
  },
  {
    image: "https://i.pinimg.com/736x/06/dc/4b/06dc4b291ef50defd3afb8d6427e5162.jpg",
    text: "Select Music and Entertainment",
  },
];

const images = [
  {
    src: "https://i.pinimg.com/736x/12/6e/71/126e717d821f124134db21b5d10760f7.jpg",
    alt: "Wedding Dress",
  },
  {
    src: "https://i.pinimg.com/736x/d1/b5/2b/d1b52ba71914e58f828f7bc892391f37.jpg",
    alt: "Rustic Table Setting",
  },
  {
    src: "https://i.pinimg.com/736x/54/24/e2/5424e26679e85006eaf3ebc234e7003a.jpg",
    alt: "Floral Arch",
  },
  {
    src: "https://i.pinimg.com/736x/25/22/14/25221448944196af5bd1eb7d7d0f3c2e.jpg",
    alt: "Wedding Cake",
  },
  {
    src: "https://i.pinimg.com/1200x/31/30/25/313025ca2244d0738c9e1a596fa17e8c.jpg",
    alt: "Bridesmaids Dress",
  },
  {
    src: "https://i.pinimg.com/736x/86/c2/65/86c26540336ce8875d5b7ead14b4eee8.jpg",
    alt: "Table Decor",
  },
];


export default function StartPlanning() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const howItWorksRef = useRef(null);
    const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    {/* Hero Carousel */}
    <section className="relative w-full h-[90vh] overflow-hidden font-sans">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
                <img
                    src={slide.image}
                    alt={slide.text}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl md:text-4xl font-Sans Serif text-center max-w-3xl px-4 bg-black bg-opacity-40 rounded-xl py-3">
                        {slide.text}
                    </h2>
                </div>
            </div>
        ))}

        <div className="absolute bottom-10 inset-x-0 flex justify-center z-20">
       <button
          onClick={() => navigate('/choose-role')}
          className="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 text-white px-6 py-3 rounded-full"
        >
          Start Planning
        </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
                <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                        idx === currentSlide ? "bg-pink-500" : "bg-white/50"
                    }`}
                />
            ))}
        </div>
    </section>
      <section
        ref={howItWorksRef}
        className="bg-white py-20 px-6 md:px-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Wedding Bells makes planning your dream wedding simple, joyful, and organized. Here's how you get started:
        </p>

        <div className="grid gap-10 md:grid-cols-4 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-pink-100 p-5 rounded-full w-20 h-20 flex items-center justify-center text-pink-600 text-2xl font-bold shadow-sm">
              1
            </div>
            <h3 className="mt-4 font-semibold text-xl text-gray-800">
              Create Account
            </h3>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Sign up and enter your wedding date and role (Bride, Groom, Planner).
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-pink-100 p-5 rounded-full w-20 h-20 flex items-center justify-center text-pink-600 text-2xl font-bold shadow-sm">
              2
            </div>
            <h3 className="mt-4 font-semibold text-xl text-gray-800">
              Set Your Date
            </h3>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Lock in your timeline and start receiving personalized checklists.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-pink-100 p-5 rounded-full w-20 h-20 flex items-center justify-center text-pink-600 text-2xl font-bold shadow-sm">
              3
            </div>
            <h3 className="mt-4 font-semibold text-xl text-gray-800">
              Browse & Plan
            </h3>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Discover venues, dresses, inspiration boards, and more — all in one place.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-pink-100 p-5 rounded-full w-20 h-20 flex items-center justify-center text-pink-600 text-2xl font-bold shadow-sm">
              4
            </div>
            <h3 className="mt-4 font-semibold text-xl text-gray-800">
              Save & Share
            </h3>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Favorite what you love and share your vision with your planner or partner.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
<section className="bg-pink-50 py-20 px-6 md:px-12">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
      Get Inspiration Sent to Your Inbox
    </h2>
    <p className="text-gray-600 text-lg mb-8">
      Join thousands of couples who receive weekly wedding tips, trends, and ideas.
    </p>
    <form className="flex flex-col md:flex-row gap-4 justify-center">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full md:w-1/3"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full md:w-1/3"
      />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

<section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-10">
          Explore Wedding Inspiration
        </h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-md transform transition hover:scale-105">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

