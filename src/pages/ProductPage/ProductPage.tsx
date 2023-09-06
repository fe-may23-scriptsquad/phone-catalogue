/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import classNames from 'classnames';

import homeIcon from '../../assets/icons/Home.svg';
import arrowRight from '../../assets/icons/Arrow-right.svg';

import { ButtonBack } from '../../components/ButtonBack';
import { Button } from '../../components/Button';
import { LineElement } from '../../components/LineElement';
import { SwiperPhones } from '../../components/SwiperPhones';
import { ButtonLike } from '../../components/ButtonLike';

const testData = {
  id: 'apple-iphone-8-64gb-gold',
  namespaceId: 'apple-iphone-8',
  name: 'Apple iPhone 8 64GB Gold',
  capacityAvailable: ['64GB'],
  capacity: '64GB',
  priceRegular: 600,
  priceDiscount: 550,
  colorsAvailable: ['spacegray', 'gold', 'silver'],
  color: 'gold',
  images: [
    'img/phones/apple-iphone-8/gold/00.jpg',
    'img/phones/apple-iphone-8/gold/01.jpg',
    'img/phones/apple-iphone-8/gold/02.jpg',
    'img/phones/apple-iphone-8/gold/03.jpg',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "4.7' IPS",
  resolution: '1334x750',
  processor: 'Apple A11 Bionic',
  ram: '2GB',
  camera: '12 Mp + 7 Mp',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

const testImgs = [
  'https://bigmag.ua/image/cache/catalog/new/kumunren/Iphone%20BU/1/iphone8-plus-spgray-select-2017_1_2_1_2_1-650x540.jpg',
  'https://f.ua/statik/images/products/400x600/apple/apple_iphone_8_plus_128gb_product_red_1028772534254.png',
  'https://cdn21vek.by/img/galleries/5722/743/preview_b/iphone8plus128gbgoldmx262_apple_5da41a7fd634a.png',
  'https://i.ebayimg.com/images/g/yQUAAOSwrjRk0CyL/s-l1200.webp',
  'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-se-2020-white.jpg?fit=834%2C1000&ssl=1',
];

interface ColorsHex {
  spacegray: '#4c4c4c';
  gold: '#fcdbc1';
  silver: '#f0f0f0';
  midnightgreen: '#5f7170';
}

const colorsHex: ColorsHex = {
  spacegray: '#4c4c4c',
  gold: '#fcdbc1',
  silver: '#f0f0f0',
  midnightgreen: '#5f7170',
};

const setHexColor = (color: string) => {
  if (color in colorsHex) {
    return (colorsHex as ColorsHex)[color as keyof ColorsHex];
  }

  return '#fff';
};

export const ProductPage = () => {
  const [mainImg, setMainImg] = useState(testImgs[0]);
  const [selectedColor, setSelectedColor] = useState<string>(testData.color);
  const [selectedCapacity, setSelectedCapacity] = useState<string>(
    testData.capacity,
  );

  const changeMainImgHandler = (img: string) => {
    if (img !== mainImg) {
      setMainImg(img);
    }
  };

  const changeColorHandler = (color: string) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
    }
  };

  const changeCapacityHandler = (capacity: string) => {
    if (capacity !== selectedCapacity) {
      setSelectedCapacity(capacity);
    }
  };

  return (
    <div className="product">
      <div className="page__nav">
        <img src={homeIcon} alt="back" className="page__nav-icon" />
        <img src={arrowRight} alt="back" className="page__nav-icon" />
        <span className="page__nav-label">Phones</span>
        <img src={arrowRight} alt="back" className="page__nav-icon" />
        <span className="page__nav-label">{testData.name}</span>
      </div>

      <ButtonBack />

      <h2 className="product__title">{testData.name}</h2>

      <section className="product__section product__preview">
        <div className="product__imgs">
          {testImgs.map((img) => (
            <button
              type="button"
              className={classNames('product__imgs-item', {
                'img-active': img === mainImg,
              })}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: '80%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              onClick={() => changeMainImgHandler(img)}
            />
          ))}
        </div>

        <img src={mainImg} alt={testData.name} className="product__img-main" />

        <div className="product__info">
          <div className="product__colors">
            <div className="product__colors-heading">
              <h5 className="product__colors-label product__info-label">
                Avaible Colors
              </h5>
              <h6 className="product__colors-id">{`ID: ${testData.id}`}</h6>
            </div>

            <div className="product__colors-list">
              {testData.colorsAvailable.map((color) => (
                <button
                  key={color}
                  type="button"
                  className="product__colors-item"
                  onClick={() => changeColorHandler(color)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="14"
                      fill={`${setHexColor(color)}`}
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="15.5"
                      stroke={color === selectedColor ? '#0F0F11' : 'E2E6E9'}
                    />
                  </svg>
                </button>
              ))}
            </div>

            <LineElement />
          </div>

          <div className="product__capacity">
            <h5 className="product__capacity-label product__info-label">
              Select Capacity
            </h5>

            <div className="product__capacity-list">
              {testData.capacityAvailable.map((capacity) => (
                <button
                  key={capacity}
                  type="button"
                  className={classNames('product__capacity-item', {
                    active: selectedCapacity === capacity,
                  })}
                  onClick={() => changeCapacityHandler(capacity)}
                >
                  {testData.capacity}
                </button>
              ))}
            </div>
            <LineElement />
          </div>

          <div className="product__price">
            <>
              <span className="product__price--bold">
                {`$${testData.priceDiscount}`}
              </span>
              {testData.priceRegular && (
                <span className="product__price--grey">{`$${testData.priceRegular}`}</span>
              )}
            </>
          </div>

          <div className="product__btns">
            <Button
              text="Add to cart"
              product={{
                id: testData.id,
                name: testData.name,
                price: testData.priceDiscount || testData.priceRegular,
                img: testImgs[0],
              }}
            />

            <ButtonLike itemId={testData.id} />
          </div>

          <div className="product__stats">
            <p className="product__stat">
              <span className="product__stat--name">Screen</span>
              {testData.screen}
            </p>
            <p className="product__stat">
              <span className="product__stat--name">Capacity</span>
              {testData.capacity}
            </p>
            <p className="product__stat">
              <span className="product__stat--name">RAM</span>
              {testData.ram}
            </p>
          </div>
        </div>
      </section>

      <section className="product__section product__information">
        <div className="product__about">
          <h2 className="product__about-title product__information-title">
            About
          </h2>

          <LineElement />

          <div className="product__about-description">
            {testData.description.map(({ title, text }) => (
              <div className="product__about-content">
                <h3 className="product__about-subtitle">{title}</h3>

                <div className="product__about-text">
                  {text.map((paragraph) => (
                    <p className="product__about-paragraph">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="product__specs">
          <h2 className="product__specs-title product__information-title">
            Tech specs
          </h2>

          <LineElement />

          <ul className="product__specs-list">
            <li className="product__specs-item">
              <span className="product__specs-item--name">Screen</span>
              {testData.screen}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Resolution</span>
              {testData.resolution}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Processor</span>
              {testData.processor}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">RAM</span>
              {testData.ram}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Built in memory</span>
              {testData.capacity}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Camera</span>
              {testData.camera}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Zoom</span>
              {testData.zoom}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Ceel</span>
              {testData.cell.join(', ')}
            </li>
          </ul>
        </div>
      </section>

      <section className="product__section product__swiper">
        <SwiperPhones customTitle="You may also like" />
      </section>
    </div>
  );
};
