export interface AppContextType {
  activeLink: string;
  setActiveLink: (value: string) => void;
  favouriteArr: string[];
  setFavouriteArr: (value: string[]) => void;
  toggleFavouriteArr: (id: string) => void;
}
