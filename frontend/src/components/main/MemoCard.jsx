import React from "react";
import { FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa";

const MemoCard = () => {
  const days = [10, 11, 12]; 

  return (
    <section className="w-full max-w-4xl bg-white rounded-3xl shadow-md p-6">
    
      <div className="flex items-center gap-2 mb-6">
        <FaCalendarAlt className="text-[#AF6FBF]" />
        <h2 className="text-[#AF6FBF] font-semibold text-lg">
          2025 October
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {days.map((day) => (
          <div
            key={day}
            className="relative bg-gradient-to-b from-[#FAE6FF] to-[#E2A8F4] rounded-3xl h-72 flex flex-col items-center justify-center shadow-md"
          >
            
            <span className="absolute top-3 right-3 bg-white text-[#AF6FBF] font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm shadow">
              {day}
            </span>

           
            <div className="absolute bottom-4 right-4 flex flex-col gap-3">
              <button className="bg-white p-2 rounded-full shadow hover:bg-[#F4DFFF] transition">
                <FaEdit className="text-[#AF6FBF]" />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-[#F4DFFF] transition">
                <FaTrash className="text-[#AF6FBF]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoCard;
