import React from 'react';
import { useNavigate } from "react-router-dom";

import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';


const vendorData = [
  {
    category: 'Photography',
    vendors: [
      {
        name: 'Lens Studio Harare',
        image: 'https://images.unsplash.com/photo-1534081333815-ae5019106621',
        portfolioImages: [
          'https://images.unsplash.com/photo-1534791547702-290b7d38d25b',
          'https://images.unsplash.com/photo-1518770660439-4636190af475',
          'https://images.unsplash.com/photo-1516728778615-2d590ea1856f',
        ],
        phone: '+263 77 123 4567',
        email: 'lensharare@weddings.com',
      },
      {
        name: 'Golden Light Photography',
        image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8',
        portfolioImages: [
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
          'https://images.unsplash.com/photo-1582719478144-bd064f1e4d71',
          'https://images.unsplash.com/photo-1499955085172-a104c9463ece',
        ],
        phone: '+263 77 765 4321',
        email: 'goldenlight@weddings.com',
      },
      {
        name: 'Visual Stories Studio',
        image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8',
        portfolioImages: [
          'https://images.unsplash.com/photo-1534791547702-290b7d38d25b',
          'https://images.unsplash.com/photo-1556020685-ae41abfc9365',
          'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
        ],
        phone: '+263 77 333 9999',
        email: 'visualstories@weddings.com',
      },
    ],
  },
  {
    category: 'Catering',
    vendors: [
      {
        name: 'Flavors & Co Harare',
        image: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564',
        portfolioImages: [
          'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
          'https://images.unsplash.com/photo-1559628233-6d5c728c5d91',
          'https://images.unsplash.com/photo-1589927986089-35812388d1b0',
        ],
        phone: '+263 78 456 7890',
        email: 'flavorsharare@weddings.com',
      },
      {
        name: 'Tasty Affairs',
        image: 'https://images.unsplash.com/photo-1543352634-5a4b24e5b3c2',
        portfolioImages: [
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
          'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
          'https://images.unsplash.com/photo-1525351484163-7529414344d8',
        ],
        phone: '+263 78 222 5555',
        email: 'tastyaffairs@weddings.com',
      },
      {
        name: 'The Culinary Touch',
        image: 'https://images.unsplash.com/photo-1613145993486-bb24f1212d01',
        portfolioImages: [
          'https://images.unsplash.com/photo-1544511916-0148ccdeb877',
          'https://images.unsplash.com/photo-1551218808-94e220e084d2',
          'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
        ],
        phone: '+263 78 654 3210',
        email: 'culinarytouch@weddings.com',
      },
    ],
  },
  {
    category: 'Decor & Styling',
    vendors: [
      {
        name: 'Elegant Touch Bulawayo',
        image: 'https://images.unsplash.com/photo-1598807502744-74ecdf4bcdff',
        portfolioImages: [
          'https://images.unsplash.com/photo-1618221195333-cdf45f4aa6ed',
          'https://images.unsplash.com/photo-1622519401988-20204bde0ee5',
          'https://images.unsplash.com/photo-1591288464045-bf1bc7fc1df5',
        ],
        phone: '+263 71 987 6543',
        email: 'elegantbulawayo@weddings.com',
      },
      {
        name: 'Royal Drapes',
        image: 'https://images.unsplash.com/photo-1587750051106-1c6f9648d6f4',
        portfolioImages: [
          'https://images.unsplash.com/photo-1593032465170-ea612f6480f2',
          'https://images.unsplash.com/photo-1576153192396-180ecef2a715',
          'https://images.unsplash.com/photo-1598935882615-a961d7b3eb42',
        ],
        phone: '+263 71 246 8100',
        email: 'royaldrapes@weddings.com',
      },
      {
        name: 'Glow & Petals',
        image: 'https://images.unsplash.com/photo-1585421399446-c3b5c6d17b45',
        portfolioImages: [
          'https://images.unsplash.com/photo-1611690872375-7f0de3e9f5b3',
          'https://images.unsplash.com/photo-1560807707-8cc77767d783',
          'https://images.unsplash.com/photo-1618221741517-d4a19a19445d',
        ],
        phone: '+263 71 112 3344',
        email: 'glowpetals@weddings.com',
      },
    ],
  },
];


export default function VendorsPage() {
  
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1600880292011-0491b37beae0?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-2xl p-6 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl text-pink-700 font-bold text-center mb-10">
          Explore Wedding Vendors
        </h2>

        {vendorData.map((category) => (
          <div key={category.category} className="mb-12">
            <h3 className="text-2xl text-pink-600 font-semibold mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.vendors.map((vendor, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h4 className="text-lg font-bold text-pink-700">
                      {vendor.name}
                    </h4>
                    <div className="overflow-x-auto flex gap-2">
                      {vendor.portfolioImages.map((imgUrl, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={imgUrl}
                          alt={`work-${imgIdx}`}
                          className="w-24 h-24 rounded-lg object-cover border border-pink-100 shadow"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-pink-600" />
                        {vendor.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-pink-600" />
                        {vendor.email}
                      </div>
                    </div>
                 <button
  onClick={() => navigate("/message")}
  className="mt-3 bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full w-full flex items-center justify-center gap-2"
>
  <MessageCircle size={16} />
  Message Vendor
</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
