import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAE6FF]">
      
      <Header />

      
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        <div className="bg-white rounded-3xl shadow-md p-6 sm:p-10 w-full max-w-xs text-center">
          <h1 className="text-[#AF6FBF] font-extrabold text-lg mb-4">
            MemoEasy
          </h1>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#FAE6FF] flex items-center justify-center shadow-inner">
              <FaUser className="text-[#AF6FBF] text-3xl" />
            </div>
          </div>

          <p className="text-gray-700 text-sm font-medium mb-1">
            W.A. Nipuni Navindya Weerassuriya
          </p>
          <p className="text-gray-500 text-sm">
            nipuniweerassuriya2@gmail.com
          </p>
        </div>
      </main>

    
      <Footer />
    </div>
  );
};

export default UserProfile;
