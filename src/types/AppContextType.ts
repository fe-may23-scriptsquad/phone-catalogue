export interface AppContextType {
  activeLink: string;
  setActiveLink: (value: string) => void;
  isBurgerMenuActive: boolean;
  setIsBurgerMenuActive: (value: boolean) => void;
}
