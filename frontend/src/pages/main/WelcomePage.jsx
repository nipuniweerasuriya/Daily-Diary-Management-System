import React from "react";
import Button from "../../components/main/Botton";

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80 sm:w-96 text-center">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/security-idea-11549782-9342589.png" 
          alt="Memo illustration"
          className="w-40 mx-auto mb-4"
        />
        <h2 className="text-[#AF6FBF] text-2xl font-extrabold mb-2">
          MemoEasy
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          “Record your thoughts, experiences, and moods with ease. Stay organized,
          reflect on your days, and keep your memories safe in one simple and
          secure place.”
        </p>

        <div className="flex flex-col gap-4">
          <Button text="Login" />
          <Button text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
