import { useEffect, useRef, useState } from 'react';
import { lewatiAnimasi } from './gerak';

export function useCountUp(target, durasi = 2000) {
  const ref = useRef(null);
  const frame = useRef(0); // id requestAnimationFrame agar bisa dibatalkan
  const [langsung] = useState(lewatiAnimasi);
  const [nilai, setNilai] = useState(langsung ? target : 0);

  useEffect(() => {
    const elemen = ref.current;
    if (langsung || elemen === null) {
      return;
    }

    const pengamat = new IntersectionObserver(
      ([entri]) => {
        if (!entri.isIntersecting) {
          return;
        }
        pengamat.disconnect();

        const mulai = performance.now();
        const jalan = (sekarang) => {
          const progres = Math.min((sekarang - mulai) / durasi, 1);
          const halus = 1 - Math.pow(1 - progres, 4);
          setNilai(Math.floor(target * halus));

          if (progres < 1) {
            frame.current = requestAnimationFrame(jalan);
          } else {
            setNilai(target);
          }
        };
        frame.current = requestAnimationFrame(jalan);
      },
      { threshold: 0.5 }
    );
    pengamat.observe(elemen);

    return () => {
      pengamat.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [langsung, target, durasi]);

  return { ref, nilai };
}
