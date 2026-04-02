const express = require('express');
const router = express.Router();
const axios = require('axios');
const multer = require('multer');
const FormData = require('form-data');

// Multer setup (store file in memory temporarily)
const upload = multer({ storage: multer.memoryStorage() });

// --- EXISTING ROUTE: Text to Image ---
router.post('/generate', async (req, res) => {
   // ... (Keep your existing generation code here) ...
});

// --- NEW ROUTE: Remove Background ---
// @route   POST /api/ai/remove-bg
router.post('/remove-bg', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload an image' });
    }

    // Prepare the file to send to remove.bg
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', req.file.buffer, req.file.originalname);

    // Call remove.bg API
    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': process.env.REMOVE_BG_KEY,
      },
      responseType: 'arraybuffer', // We need the resulting image as a buffer
    });

    // Convert the result to base64 to send back to React
    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;

    res.status(200).json({ photo: imageUrl });

  } catch (error) {
    console.error("BG Removal Error:", error.message);
    res.status(500).json({ message: 'Failed to remove background.' });
  }
});

module.exports = router;