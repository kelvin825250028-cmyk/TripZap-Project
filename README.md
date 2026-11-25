# TripZap – Yacht and Boat Rental (React + Vite)

**Mata Kuliah:** Pemrograman Antarmuka Pengguna  
**Project:** Rekreasi tampilan dan navigasi website Tripzap berdasarkan demo TemplateMonster, kini dibangun sebagai aplikasi **React (Vite)** dengan komponen terpisah untuk setiap bagian halaman.

## Halaman
Aplikasi ini satu halaman (single page) dengan dua tampilan yang dipilih dari menu **Home**:

| Tampilan | Keterangan |
|----------|------------|
| **Home 1** | "Our Premier Boats" (tampilan awal) |
| **Home 2** | "Boats and Yacht Rental" |

Menu lain (Yacht Rent, Destinations, Blog, Contact), tombol, dan tautan footer tetap tersedia, tetapi semuanya menuju Home 1.

## Teknologi
React 19, Vite, Bootstrap 5 dan Bootstrap Icons (dipasang lewat npm), serta CSS3. Lint memakai Oxlint.

## Struktur Folder
```
tripzap-project/
├── index.html                (hanya <div id="root"> + font Google)
├── package.json
├── vite.config.js
├── .oxlintrc.json
├── public/favicon.svg
└── src/
    ├── main.jsx              (titik masuk: impor CSS + render <App />)
    ├── App.jsx               (state halaman aktif + Context navigasi)
    ├── App.css               (gaya tambahan versi React)
    ├── styles/               (style.css, animate.css, scroll.css)
    ├── context/navigasi.js   (createContext + hook useNavigasi)
    ├── hooks/                (useReveal, useCountUp, useMediaQuery)
    ├── data/                 (array data: yacht, destinasi, guide, dll.)
    ├── pages/                (HomeOne.jsx, HomeTwo.jsx)
    └── components/
        ├── common/           (Navbar, Footer, TombolScroll, ChatModal, Reveal, GuideCards, ...)
        ├── home-one/         (HeroOne, SearchBar, FleetSection, VideoStats, ...)
        └── home-two/         (HeroTwo, WhoWeAre, TestimonialPager, PricingPlans, ...)
```

## Bagian Home 1
Hero "Our Premier Boats" + form pencarian, About Us, Welcome, Fleet of Luxury Boats, What We Offer, The Perfect Destinations, video + statistik, Our Way to Success, Testimonials, Guides, Latest News Feed, dan CTA.

## Bagian Home 2
1. Hero "Boats and Yacht Rental" + tombol Discover More dan Play
2. Who We Are + kotak Book For Activities (`BookingCounter`) dan tiga kotak Book For Activities (`ActivityForm`)
3. The Perfect Destinations (CSS Grid)
4. Testimonial dua halaman (titik navigasi)
5. Whay Choose US (9 kartu)
6. Yacht & Boats For All Seasons
7. Galeri "Explore the beauty of our exhibition"
8. Meet Our Excellent Guides
9. Pricing Plan (satu kartu bertanda active)
10. Recent blog & articles

Navbar, section CTA "Interested in Chartering Your Yacht?", dan footer dipakai bersama oleh kedua tampilan.

## Penerapan Materi React
- **Komponen fungsi dan JSX**: setiap section adalah komponen sendiri (`src/components`), digabung di `HomeOne.jsx` dan `HomeTwo.jsx`.
- **Props**: `YachtCard` (`yacht`), `FleetSection` (`daftar`, `pesan`), `SectionHeading` (`label`, `judul`), `StatItem`, `DestinationsSection` (`className`).
- **useState + event (onClick, onChange, onSubmit)**:
  - `BookingCounter`: jumlah tamu dan input nama dengan "Hasil Inputan" real-time.
  - `SearchBar`: form terkontrol (controlled component) dengan validasi tanggal.
  - `ActivityForm`: pesan sukses / gagal dengan `if / else`.
  - `TestimonialPager`: berpindah halaman lewat titik navigasi.
  - `PricingPlans`: satu kartu bertanda `active` (pola list group).
  - `Navbar`: buka / tutup menu dan dropdown di layar kecil.
- **Lifting state up + useMemo**: `HomeOne` memegang hasil pencarian untuk menyaring daftar yacht.
- **Render daftar dengan `map()` dan `key`**: semua kartu dibuat dari array di `src/data`.
- **Conditional rendering**: class `active`, `open`, `show`, pesan hasil pencarian.
- **useEffect, useRef, dan custom hook**: `useReveal` (animasi saat scroll), `useCountUp` (angka statistik naik), `useMediaQuery` (deteksi layar kecil).
- **Context API**: `NavigasiContext` menyimpan halaman aktif dan fungsi `bukaHalaman`, dipakai Navbar, `LinkHome`, dan Footer tanpa mengoper props berlapis.

## Tugas Project Minggu Ini (Footer, Scroll-Up, dan Chat)
- **Bagian di atas footer**: `CtaSection` ("Interested in Chartering Your Yacht?") dipindah ke `App.jsx`, tepat di atas `<Footer />`, sehingga tampil di Home 1 maupun Home 2.
- **Footer 4 kolom**: brand + sosial media, Quicklinks, Get In Touch, dan Gallery (`col-lg-4 / 2 / 3 / 3`).
- **Copyright 1 kolom**: baris tersendiri berisi satu `col-12`.
- **Tombol scroll-up** (`TombolScroll.jsx`): di sisi **kiri** layar, tanpa tombol scroll-down. Memakai `window.scrollTo({ top: 0, behavior: 'smooth' })` dan karakter `&#9650;` seperti materi Tips dan Trik.
- **Tombol chat** (`ChatModal.jsx`): di sisi **kanan** layar. Saat diklik menampilkan **modal Bootstrap** (`data-bs-toggle="modal"`, `data-bs-target="#modalChat"`) berisi form Nama, Email, Isi Pesan, tombol Batal, dan Kirim Pesan.
- **CSS eksternal**: seluruh gaya tombol dan modal ada di `src/styles/scroll.css` (diimpor di `main.jsx`); `bootstrap.bundle.min.js` juga diimpor di `main.jsx`.
- Mengubah posisi tombol: ubah `left` / `right` pada `.scrollAtas` dan `.chatKanan` di `scroll.css`.

## Cara Menjalankan Project
1. Install Node.js versi LTS.
2. Ekstrak folder project, buka terminal pada folder `tripzap-project`.
3. Jalankan `npm install`, lalu `npm run dev`.
4. Buka alamat lokal yang ditampilkan Vite (biasanya `http://localhost:5173`).

Perintah lain: `npm run build` (hasil pada folder `dist`), `npm run preview`, dan `npm run lint`.

## Catatan
Gambar memakai alamat Unsplash sebagai pengganti gambar demo, dan font memakai Google Fonts, sehingga koneksi internet diperlukan. Tampilan dibuat sebagai rekreasi tugas, bukan salinan aset premium atau kode sumber WordPress.
