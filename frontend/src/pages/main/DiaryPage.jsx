import React, { useEffect, useState } from "react";
import { getDiaries, addDiary, editDiary, deleteDiary } from "../../api/diaryApi";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

const DiaryPage = () => {
  const [diaries, setDiaries] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState(null);

  const loadDiaries = async () => {
    const data = await getDiaries();
    setDiaries(data);
  };

  useEffect(() => {
    loadDiaries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await editDiary(editingId, form);
      setEditingId(null);
    } else {
      await addDiary(form);
    }
    setForm({ title: "", content: "" });
    loadDiaries();
  };

  const handleEdit = (d) => {
    setForm({ title: d.title, content: d.content });
    setEditingId(d._id);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this diary?")) {
      await deleteDiary(id);
      loadDiaries();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAE6FF] p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#AF6FBF] mb-6">My Diaries</h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full mb-3 px-3 py-2 border rounded-md"
          required
        />
        <textarea
          placeholder="Write your diary..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full mb-3 px-3 py-2 border rounded-md h-32"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#AF6FBF] text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          {editingId ? "Update Diary" : "Add Diary"}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {diaries.map((d) => (
          <div key={d._id} className="bg-white p-4 rounded-xl shadow-md relative">
            <h3 className="font-bold text-[#AF6FBF]">{d.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{d.content}</p>

            <div className="absolute top-3 right-3 flex gap-2">
              <Edit
                onClick={() => handleEdit(d)}
                className="text-[#AF6FBF] cursor-pointer"
              />
              <Trash2
                onClick={() => handleDelete(d._id)}
                className="text-red-400 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setEditingId(null)}
        className="fixed bottom-8 right-8 bg-[#AF6FBF] p-4 rounded-full shadow-lg hover:opacity-90"
      >
        <PlusCircle color="white" size={28} />
      </button>
    </div>
  );
};

export default DiaryPage;
