import { useEffect, useRef, useState } from 'react';
import { lewatiAnimasi } from './gerak';

export function useReveal(animasi) {
  const ref = useRef(null);
  const [langsung] = useState(lewatiAnimasi);
  const [terlihat, setTerlihat] = useState(false);

  useEffect(() => {
    const elemen = ref.current;
    if (langsung || elemen === null) {
      return;
    }

    const pengamat = new IntersectionObserver(
      ([entri]) => {
        if (entri.isIntersecting) {
          setTerlihat(true);
          pengamat.disconnect();
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.12 }
    );
    pengamat.observe(elemen);

    return () => pengamat.disconnect();
  }, [langsung]);

  let kelas = '';
  if (!langsung) {
    kelas = terlihat ? 'animated ' + animasi : 'elementor-invisible';
  }

  return { ref, kelas };
}
