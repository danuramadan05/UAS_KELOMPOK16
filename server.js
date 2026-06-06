const express = require('express');
const path = require('path');
const app = express();

// Menggunakan port dari environment (penting untuk deploy nanti) atau 3000 untuk lokal
const PORT = process.env.PORT || 3000;

// Middleware untuk menyajikan folder 'public' sebagai file statis
app.use(express.static(path.join(__dirname, 'public')));

// Membuat API endpoint sederhana
app.get('/api/salam', (req, res) => {
    res.json({ 
        status: 'sukses',
        pesan: 'Halo! Ini adalah data dari server backend Express.js kelompok kami.' 
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di http://localhost:${PORT}`);
});