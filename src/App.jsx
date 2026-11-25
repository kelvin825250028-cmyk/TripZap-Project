import { useState } from 'react';
import { NavigasiContext } from './context/navigasi';
import ChatModal from './components/common/ChatModal';
import Footer from './components/common/Footer';
import GoogleMaps from './components/common/GoogleMaps';
import Navbar from './components/common/Navbar';
import TombolScroll from './components/common/TombolScroll';
import CtaSection from './components/home-one/CtaSection';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import OurYachts from './pages/OurYachts';
import { DestinationsPage, BlogPage, ContactPage } from './pages/ExtraPages';

const halamanTersedia = {
  'home-one': HomeOne,
  'home-two': HomeTwo,
  'our-yachts': OurYachts,
  'destinations': DestinationsPage,
  'destination-details': DestinationsPage,
  'blog': BlogPage,
  'contact': ContactPage,
};

function App() {
  const [halamanAktif, setHalamanAktif] = useState('home-one');

  const bukaHalaman = (halaman) => {
    setHalamanAktif(halaman);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const Halaman = halamanTersedia[halamanAktif];
  const halamanYacht = halamanAktif === 'our-yachts'; // halaman yacht tanpa peta dan CTA

  return (
    <NavigasiContext value={{ halamanAktif, bukaHalaman }}>
      <Navbar />
      <main className="home-layout" key={halamanAktif}>
        <Halaman />
      </main>
      {!halamanYacht && !['contact'].includes(halamanAktif) && <GoogleMaps />}
      {!halamanYacht && !['contact'].includes(halamanAktif) && <CtaSection />}
      <Footer />
      <TombolScroll />
      <ChatModal />
    </NavigasiContext>
  );
}

export default App;
