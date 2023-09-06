/* eslint-disable max-len */
import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../Pagination';
import { CardItem } from '../CardItem';
import { Phone } from '../../types/Phone';
import home from '../../assets/icons/Home.svg';
import { Dropdown } from '../Dropdown';
import { getAll } from '../../api/products';

import phonesFromServer from '../../api/phones.json';
import { AppContext } from '../AppContext/AppContext';
import { buildSortByParam } from '../../utils/functions';

type CatalogProps = {
  productName?: string;
  phones?: Phone[];
  pathName?: string[];
};

const sortOptions = [
  'Newest',
  'Alphabetically',
  'Cheapest',
];

const itemsOnPageOptions = [
  '4',
  '8',
  '16',
  'All',
];

export const Catalog = ({
  productName = 'Mobile phones',
  phones = phonesFromServer,
  pathName = ['Phones'],
}: CatalogProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('Newest');
  const [phonesPerPage, setPhonesPerPage] = useState('16');
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    products,
    setProducts,
  } = useContext(AppContext);

  useEffect(() => {
    const params = searchParams.toString();

    const url = params ? `?${params}` : '';

    getAll<Phone[]>(url).then(setProducts);
  }, [pathName, searchParams]);

  function handleChangeItemsPerPage(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const { value } = event.target;
    const params = new URLSearchParams(searchParams);

    setPhonesPerPage(event.target.value);
    setCurrentPage(1);

    if (value === '16') {
      params.delete('limit');
    } else {
      params.set('limit', value.toLowerCase());
    }

    setSearchParams(params);
  }

  function handleChangeSortOption(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    setSortOption(value);
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams);

    setSearchParams(buildSortByParam(value, params));
  }

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);

    const params = new URLSearchParams(searchParams);

    if (newPage > 1) {
      params.set('page', newPage.toString());
    } else {
      params.delete('page');
    }

    setSearchParams(params);
  }

  return (
    <>
      <div className="catalog">
        <div className="catalog__content">
          <div className="catalog-navigation">
            <div className="catalog-navigation__content">
              <a href="/" className="catalog-navigation__home-link">
                <img
                  src={home}
                  alt="home"
                  className="catalog-navigation__home"
                />
              </a>

              {pathName.map((part, index) => {
                const title = part.split('-').join(' ');
                const crumbPath = `/${pathName.slice(0, index + 1).join('/')}`;

                return (
                  <span key={title}>
                    <span className="catalog-navigation__separator">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z" fill="#B4BDC4" />
                      </svg>
                    </span>
                    <a
                      href={crumbPath}
                      className="catalog-navigation__category"
                    >
                      {title}
                    </a>
                  </span>
                );
              })}
            </div>
          </div>
          <h1 className="catalog__title">
            {productName}
          </h1>

          <p className="catalog__subtitle">
            {`${phones.length} models`}
          </p>

          <div className="catalog__dropdown--container">
            <div className="catalog__dropdown">
              <label htmlFor="sortDropdown" className="dropdown__title">Sort by</label>
              <Dropdown
                options={sortOptions}
                handleChange={handleChangeSortOption}
                value={sortOption}
              />
            </div>
            <div className="catalog__dropdown">
              <label htmlFor="sortDropdown" className="dropdown__title">Items on page</label>
              <Dropdown
                options={itemsOnPageOptions}
                handleChange={handleChangeItemsPerPage}
                value={phonesPerPage}
              />
            </div>
          </div>

          <div className="catalog__list">
            {products.map(phone => (
              <div className="catalog__list--item" key={phone.id}>
                <CardItem
                  phone={phone}
                />
              </div>
            ))}
          </div>
          <div className="catalog__pagination">
            <Pagination
              total={phones.length}
              perPage={phonesPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
