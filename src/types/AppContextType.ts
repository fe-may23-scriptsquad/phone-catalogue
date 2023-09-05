import { SetStateAction } from 'react';
import { Phone } from './Phone';

export interface AppContextType {
  activeLink: string;
  setActiveLink: React.Dispatch<SetStateAction<string>>;
  products: Phone[],
  setProducts: React.Dispatch<SetStateAction<Phone[]>>,
}
