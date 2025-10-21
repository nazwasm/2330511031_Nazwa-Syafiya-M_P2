# Praktikum 3 – Desain UI dengan Flexbox

Nama: Nazwa Syafiya Mirzal  
NIM: 2330511031  
Kelas: 5A
Mata Kuliah: Mobile Programming Multi Platform 
Dosen Pengampu: Prajoko, S.Pd.I., M.Kom  

## Deskripsi
Praktikum 3 ini merupakan **lanjutan dari Praktikum 2 (Struktur Project & Komponen Dasar)** dengan fokus pada:
- Penerapan **Flexbox** untuk mengatur layout.
- Penggunaan **StyleSheet** dengan design tokens agar konsisten.
- Pembuatan **layout responsif** (1 kolom di ponsel, 2 kolom di tablet/web).
- Penambahan **komponen DiaryDetailModal** dan penyempurnaan tampilan `DiaryCard`.

## Cara Menjalankan Proyek
1. Clone repository ini:
   git clone https://github.com/nazwasm/2330511031_Nazwa-Syafiya-M_RN_P2.git
   
2. Masuk ke folder proyek:
cd 2330511031_Nazwa-Syafiya-M_RN_P2

3. Install dependensi:
npm install

4. Jalankan aplikasi:
npx expo start
Buka aplikasi Expo Go di perangkat Android, lalu scan QR code yang muncul untuk menjalankan aplikasi.

## Ringkasan Pembelajaran
Pada praktikum ini saya mengembangkan Diary App agar tampil lebih konsisten dan responsif. Saya membuat design tokens di file tokens.js untuk mengatur warna, jarak, dan ukuran teks yang seragam di seluruh komponen. Layout daftar entri diary dibuat menggunakan FlatList yang menyesuaikan jumlah kolom berdasarkan lebar layar (1 kolom untuk ponsel, 2 kolom untuk tablet/web). Saya juga menambahkan DiaryDetailModal agar pengguna dapat melihat detail entri diary dengan lebih jelas. Selain itu, saya menerapkan aksesibilitas seperti label dan kontras warna agar aplikasi lebih ramah pengguna.

## Versi Lingkungan Pengembangan
Node.js: v22.20.0
npm: v10.9.3
Expo SDK: v54.0.13
Perangkat Uji: HP Android (Expo Go) 
