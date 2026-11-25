import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [cocok, setCocok] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const daftar = window.matchMedia(query);
    const ubah = (event) => setCocok(event.matches);
    daftar.addEventListener('change', ubah);
    return () => daftar.removeEventListener('change', ubah);
  }, [query]);

  return cocok;
}
