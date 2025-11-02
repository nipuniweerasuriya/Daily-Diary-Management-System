import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import MemoCard from "../../components/main/MemoCard";
import { FaUser, FaPlus, FaCalendarAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAE6FF]">
      <Header />

      <main className="flex-grow flex flex-col justify-start items-center text-center px-4 py-6">
        {/* Illustration */}
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/writing-idea-11920659-9580352.png"
          alt="Notebook Illustration"
          className="w-56 sm:w-72 mb-6"
        />
       
        {/* Memo Calendar Component */}
        <MemoCard />

        {/* Action Bar */}
        <div className="flex justify-around bg-white border border-[#FAE6FF] shadow-md rounded-2xl px-6 py-3 w-64 sm:w-80 mb-10">
          <FaUser className="text-[#AF6FBF] text-xl cursor-pointer" />
          <FaPlus className="text-[#AF6FBF] text-xl cursor-pointer" />
          <FaCalendarAlt className="text-[#AF6FBF] text-xl cursor-pointer" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
