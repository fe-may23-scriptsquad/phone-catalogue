import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { CardItem } from '../CardItem';

const phone = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

export const SwiperPhones: React.FC = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(4);

  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: numberOfSlides,
    navigation: true,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 639) {
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

  return (
    <div className="swiperPhones">
      <div className="swiperPhones__title">Brand new models</div>

      <Swiper {...swiperOptions}>
        <SwiperSlide>
          <CardItem phone={phone} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem phone={phone} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem phone={phone} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem phone={phone} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem phone={phone} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem phone={phone} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
