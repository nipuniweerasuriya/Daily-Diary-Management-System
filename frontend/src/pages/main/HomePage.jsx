import React, { useEffect, useState } from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import {
  getDiaries,
  addDiary,
  editDiary,
  deleteDiary,
} from "../../api/diaryApi";

const HomePage = () => {
  const [diaries, setDiaries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newDiary, setNewDiary] = useState({
    date: new Date().toISOString().split("T")[0],
    title: "",
    content: "",
    mood: "",
  });
  const [editingId, setEditingId] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiaries(token);
      console.log("Fetched diaries:", data);
      setDiaries(
        data.map((d) => ({
          ...d,
          date: d.date || new Date().toISOString(),
          mood: d.mood || "No mood",
        }))
      );
    };
    fetchData();
  }, [token]);

  const handleAdd = async () => {
    if (!newDiary.title || !newDiary.content)
      return alert("Please fill all fields.");

    const diaryToAdd = {
      ...newDiary,
      date: newDiary.date || new Date().toISOString(),
      mood: newDiary.mood || "No mood",
    };

    const added = await addDiary(token, diaryToAdd);

    setDiaries([
      {
        ...added,
        date: added.date || diaryToAdd.date,
        mood: added.mood || diaryToAdd.mood,
      },
      ...diaries,
    ]);
    resetForm();
  };

  const handleEdit = async (id) => {
    const updatedDiary = {
      ...newDiary,
      date: newDiary.date || new Date().toISOString(),
      mood: newDiary.mood || "No mood",
    };

    const updated = await editDiary(token, id, updatedDiary);
    setDiaries(diaries.map((d) => (d._id === id ? updated : d)));
    resetForm();
  };

  const handleDelete = async (id) => {
    await deleteDiary(token, id);
    setDiaries(diaries.filter((d) => d._id !== id));
  };

  const resetForm = () => {
    setEditingId(null);
    setNewDiary({
      date: new Date().toISOString().split("T")[0],
      title: "",
      content: "",
      mood: "",
    });
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? dateString
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#F3D7FF] via-[#F0E6FF] to-[#E9D8FF]">
      <Header />

      <main className="flex-grow px-6 py-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Title and Add button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h1 className="text-4xl font-extrabold text-[#A76BCF] mb-4 sm:mb-0">
              My Diary Entries
            </h1>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#A76BCF] text-white text-sm sm:text-base px-6 py-2 rounded-full shadow-md hover:bg-[#9353c7] transition-all w-fit"
            >
              + Add Diary
            </button>
          </div>

          {/* Diary Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {diaries.length === 0 ? (
              <p className="text-gray-500 text-center col-span-full">
                No diary entries yet. Start by adding one!
              </p>
            ) : (
              diaries.map((d) => (
                <div
                  key={d._id}
                  className="bg-white/90 rounded-3xl border border-[#E6CFF5] shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col justify-between h-[280px]"
                >
                  {/* Date & Mood */}
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm text-[#8F4EB2] font-semibold">
                      📅 {formatDate(d.date)}
                    </p>
                    <span className="bg-[#F6EBFF] text-[#A76BCF] px-3 py-1 rounded-full text-xs font-medium">
                      💜 {d.mood || "No mood"}
                    </span>
                  </div>

                  {/* Title & Content */}
                  <div>
                    <h3 className="text-xl font-bold text-[#A76BCF] mb-2 truncate">
                      {d.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed overflow-hidden line-clamp-5">
                      {d.content}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-4 mt-4 pt-3 border-t border-[#E6CFF5]">
                    <button
                      onClick={() => {
                        setEditingId(d._id);
                        setNewDiary({
                          date: d.date ? d.date.split("T")[0] : new Date().toISOString().split("T")[0],
                          title: d.title,
                          content: d.content,
                          mood: d.mood || "",
                        });
                        setShowModal(true);
                      }}
                      className="text-[#5A3D9A] text-sm font-semibold hover:text-[#7C52BF] transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(d._id)}
                      className="text-[#E24560] text-sm font-semibold hover:text-red-700 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Popup Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg p-6 relative animate-fadeIn">
              <button
                onClick={resetForm}
                className="absolute top-3 right-4 text-gray-500 text-2xl font-bold hover:text-[#A76BCF]"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold text-center text-[#A76BCF] mb-6">
                {editingId ? "Edit Diary Entry" : "Add New Diary"}
              </h2>

              <div className="flex flex-col gap-3">
                <input
                  type="date"
                  value={newDiary.date}
                  onChange={(e) =>
                    setNewDiary({ ...newDiary, date: e.target.value })
                  }
                  className="border border-[#D6B9F0] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A76BCF]"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={newDiary.title}
                  onChange={(e) =>
                    setNewDiary({ ...newDiary, title: e.target.value })
                  }
                  className="border border-[#D6B9F0] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A76BCF]"
                />
                <textarea
                  placeholder="Write your diary..."
                  value={newDiary.content}
                  onChange={(e) =>
                    setNewDiary({ ...newDiary, content: e.target.value })
                  }
                  rows={4}
                  className="border border-[#D6B9F0] rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#A76BCF]"
                />
                <input
                  type="text"
                  placeholder="Mood (optional)"
                  value={newDiary.mood}
                  onChange={(e) =>
                    setNewDiary({ ...newDiary, mood: e.target.value })
                  }
                  className="border border-[#D6B9F0] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A76BCF]"
                />

                <div className="flex justify-between mt-4">
                  <button
                    onClick={resetForm}
                    className="w-1/2 mr-2 border border-[#A76BCF] text-[#A76BCF] font-semibold py-2 rounded-xl hover:bg-[#F2E7FF] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      editingId ? handleEdit(editingId) : handleAdd()
                    }
                    className="w-1/2 bg-[#A76BCF] text-white font-semibold py-2 rounded-xl shadow-md hover:bg-[#9353c7] transition-all"
                  >
                    {editingId ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
