import Diary from "../models/Diary.js";

// Create new diary
export const createDiary = async (req, res) => {
  try {
    const { title, content } = req.body;
    const diary = await Diary.create({
      user: req.user.id,
      title,
      content,
    });
    res.status(201).json(diary);
  } catch (err) {
    res.status(500).json({ message: "Failed to create diary" });
  }
};

// Get diaries 
export const getDiaries = async (req, res) => {
  try {
    const diaries = await Diary.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(diaries);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch diaries" });
  }
};

// Update diary
export const updateDiary = async (req, res) => {
  try {
    const diary = await Diary.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    res.json(diary);
  } catch (err) {
    res.status(500).json({ message: "Failed to update diary" });
  }
};

// Delete diary
export const deleteDiary = async (req, res) => {
  try {
    await Diary.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: "Diary deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete diary" });
  }
};
