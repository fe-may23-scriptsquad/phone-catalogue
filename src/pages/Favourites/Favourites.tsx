import { useContext, useEffect, useState } from 'react';

import home from '../../assets/icons/Home.svg';
import { CardItem } from '../../components/CardItem';
import { AppContext } from '../../components/AppContext/AppContext';
import { AppContextType } from '../../types/AppContextType';
import { EmptyValueComponent } from '../../components/EmptyValueComponent';
import { getDetailsByIdsArr } from '../../api/products';
import { Phone } from '../../types/Phone';
import { Loader } from '../../components/Loader';

type FavouritesProps = {
  pathName: string[];
};

export const Favourites = ({ pathName }: FavouritesProps) => {
  const { favouriteArr } = useContext(AppContext) as AppContextType;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedIds, setLoadedIds] = useState<Phone[]>([]);

  useEffect(() => {
    getDetailsByIdsArr<Phone[]>(favouriteArr)
      .then(setLoadedIds)
      .finally(() => setIsLoading(false));
  }, [favouriteArr]);

  return (
    <>
      <div className="favourites">
        <div className="favourites__content">
          <div className="favourites-navigation">
            <div className="favourites-navigation__content">
              <a href="/" className="favourites-navigation__home-link">
                <img
                  src={home}
                  alt="home"
                  className="favourites-navigation__home"
                />
              </a>

              {pathName.map((part) => {
                const title = part.split('-').join(' ');

                return (
                  <span
                    key={title}
                    className="favourites-navigation__container"
                  >
                    <div className="favourites-navigation__category">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z"
                          fill="#B4BDC4"
                        />
                      </svg>
                    </div>
                    <p className="favourites-navigation__category">{title}</p>
                  </span>
                );
              })}
            </div>
          </div>
          <h1 className="favourites__title">Favourites</h1>

          <p className="favourites__subtitle">
            {` ${loadedIds.length}
            items `}
          </p>

          {loadedIds.length === 0 && !isLoading && <EmptyValueComponent />}

          {isLoading ? (
            <Loader />
          ) : (
            <div className="favourites__list">
              {loadedIds.map((phone) => (
                <div className="favourites__list--item" key={phone.id}>
                  <CardItem phone={phone} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
