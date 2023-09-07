import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { CardItem } from '../CardItem';
import { getAll } from '../../api/products';
import { Phone } from '../../types/Phone';
import { Loader } from '../Loader';

type Props = {
  customTitle?: string;
  sortValue?: string;
};

export const SwiperPhones: React.FC<Props> = ({
  customTitle,
  sortValue = 'year',
}) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [numberOfSlides, setNumberOfSlides] = useState(4);
  const [productsForSwiper, setProductsForSwiper] = useState<Phone[]>([]);

  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: numberOfSlides,
    navigation: true,
    spaceBetween: 16,
  };

  const url = `?limit=${limit}&page=${page}&sortBy=${sortValue}`;

  useEffect(() => {
    getAll<Phone[]>(url).then((data) => {
      setProductsForSwiper((prod) => [...prod, ...data]);
    });
  }, [page]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 639) {
        setNumberOfSlides(1);
      } else if (window.innerWidth <= 1199) {
        setNumberOfSlides(2);
      } else {
        setNumberOfSlides(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOnSwipe = () => {
    setPage(productsForSwiper.length + 1);
    setLimit(1);
  };

  return (
    <div className="swiperPhones">
      <div className="swiperPhones__title">
        {customTitle || 'Brand new models'}
      </div>

      {productsForSwiper.length ? (
        <Swiper {...swiperOptions} onSlideChange={handleOnSwipe}>
          {productsForSwiper.map((product) => {
            return (
              <SwiperSlide key={product.itemId}>
                <CardItem phone={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Loader />
      )}
    </div>
  );
};
