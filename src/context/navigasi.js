import { createContext, useContext } from 'react';

export const NavigasiContext = createContext({
  halamanAktif: 'home-one',
  bukaHalaman: () => {},
});

export function useNavigasi() {
  return useContext(NavigasiContext);
}
