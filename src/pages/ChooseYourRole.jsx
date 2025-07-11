import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Heart, Briefcase, Users } from "lucide-react";


const roles = [
  { name: "Bride", icon: <Heart className="w-6 h-6" /> },
  { name: "Groom", icon: <User className="w-6 h-6" /> },
  { name: "Planner", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Guest", icon: <Users className="w-6 h-6" /> },
];

export default function ChooseYourRole() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole) {
      localStorage.setItem("weddingRole", selectedRole);
      navigate("/start/couple-names");
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://i.pinimg.com/1200x/c6/7a/ab/c67aab481b7ab7447a058920495ce023.jpg')] bg-cover bg-center flex items-center justify-center px-4">
        
      <section className="bg-white-50 bg-opacity-80  backdrop-blur-md rounded-3xl flex flex-col justify-center items-center px-6 py-16 max-w-5xl w-full shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 text-center">
          Choose Your Role
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Help us personalize your experience by selecting your role in the wedding.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
          {roles.map((role) => (
            <button
              key={role.name}
              onClick={() => setSelectedRole(role.name)}
              className={`flex flex-col items-center p-6 border-2 rounded-2xl transition hover:shadow-md ${
                selectedRole === role.name
                  ? "border-pink-500 bg-white shadow"
                  : "border-transparent bg-white"
              }`}
            >
              <div className="text-pink-600 mb-2">{role.icon}</div>
              <span className="text-lg font-semibold text-gray-800">{role.name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className="mt-10 bg-pink-500 text-white px-8 py-3 rounded-full font-semibold disabled:opacity-50 transition"
        >
          Continue
        </button>
      </section>
    </div>
  );
}

