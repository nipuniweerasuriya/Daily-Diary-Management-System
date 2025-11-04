import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import { FaArrowRight } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAE6FF]">
    
      <Header />

      
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        <div className="bg-white rounded-3xl shadow-md p-6 sm:p-10 w-full max-w-3xl text-center">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[#AF6FBF] text-2xl font-extrabold">MemoEasy</h1>
            <FaArrowRight className="text-[#AF6FBF] text-xl" />
          </div>

          <div className="bg-[#AF6FBF] text-white rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="text-lg font-semibold mb-4">PRIVACY POLICY</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Daily Diary Management System is a simple and user-friendly web
              application developed to help users record their daily experiences
              digitally. It allows users to log in, add daily notes, view them in a
              dashboard, and edit or delete them whenever needed. This system was
              designed with the goal of replacing traditional paper diaries with a
              secure and accessible online platform. By combining a clean interface
              with essential features, it helps users easily organize their thoughts,
              track moods, and reflect on their daily lives anytime, anywhere.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
