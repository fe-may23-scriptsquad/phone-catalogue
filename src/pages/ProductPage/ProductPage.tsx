/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import homeIcon from '../../assets/icons/Home.svg';
import arrowRight from '../../assets/icons/Arrow-right.svg';

import { ButtonBack } from '../../components/ButtonBack';
import { Button } from '../../components/Button';
import { LineElement } from '../../components/LineElement';
import { SwiperPhones } from '../../components/SwiperPhones';
import { ButtonLike } from '../../components/ButtonLike';
import { PhoneDetails } from '../../types/PhoneDetails';
import { getDetailsById, getImgUrl } from '../../api/products';
import { Loader } from '../../components/Loader';

interface ColorsHex {
  spacegray: '#4c4c4c';
  gold: '#fcdbc1';
  silver: '#f0f0f0';
  midnightgreen: '#5f7170';
  black: '#1F2020';
  green: '#5bc236';
  yellow: '#ffe983';
  white: '#F9F6EF';
  purple: '#B8AFE6';
  red: '#BA0C2E';
}

const colorsHex: ColorsHex = {
  spacegray: '#4c4c4c',
  gold: '#fcdbc1',
  silver: '#f0f0f0',
  midnightgreen: '#5f7170',
  black: '#1F2020',
  green: '#5bc236',
  yellow: '#ffe983',
  white: '#F9F6EF',
  purple: '#B8AFE6',
  red: '#BA0C2E',
};

const setHexColor = (color: string) => {
  if (color in colorsHex) {
    return colorsHex[color as keyof ColorsHex];
  }

  return color;
};

export const ProductPage = () => {
  const [product, setProduct] = useState<PhoneDetails | null>(null);
  const imgs = product?.images.map(getImgUrl) || [];

  const [mainImg, setMainImg] = useState(imgs[0]);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.color,
  );
  const [selectedCapacity, setSelectedCapacity] = useState<string | undefined>(
    product?.capacity,
  );

  const { phoneId } = useParams();

  useEffect(() => {
    if (phoneId) {
      getDetailsById<PhoneDetails>(phoneId).then(setProduct);
    }
  }, []);

  useEffect(() => {
    setSelectedColor(product?.color);
    setSelectedCapacity(product?.capacity);
    setMainImg(imgs[0]);
  }, [product]);

  // useEffect(() => {
  //   const idArr = phoneId?.split('-').slice(0, -2);

  //   if (idArr) {
  //     const newId = [...idArr, selectedCapacity, selectedColor].join('-').toLowerCase();

  //     console.log(newId);
  //   }
  // }, [selectedColor, selectedCapacity]);

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

  return !product ? (
    <Loader />
  ) : (
    <div className="product">
      <div className="page__nav">
        <img src={homeIcon} alt="back" className="page__nav-icon" />
        <img src={arrowRight} alt="back" className="page__nav-icon" />
        <span className="page__nav-label">Phones</span>
        <img src={arrowRight} alt="back" className="page__nav-icon" />
        <span className="page__nav-label">{product?.name}</span>
      </div>

      <ButtonBack />

      <h2 className="product__title">{product?.name}</h2>

      <section className="product__section product__preview">
        <div className="product__imgs">
          {imgs.map((img) => (
            <button
              key={img}
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

        <img src={mainImg} alt={product?.name} className="product__img-main" />

        <div className="product__info">
          <div className="product__colors">
            <div className="product__colors-heading">
              <h5 className="product__colors-label product__info-label">
                Avaible Colors
              </h5>
              <h6 className="product__colors-id">{`ID: ${product?.id}`}</h6>
            </div>

            <div className="product__colors-list">
              {product?.colorsAvailable.map((color) => (
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
              {product?.capacityAvailable.map((capacityItem) => (
                <button
                  key={capacityItem}
                  type="button"
                  className={classNames('product__capacity-item', {
                    active: selectedCapacity === capacityItem,
                  })}
                  onClick={() => changeCapacityHandler(capacityItem)}
                >
                  {capacityItem}
                </button>
              ))}
            </div>
            <LineElement />
          </div>

          <div className="product__price">
            <>
              <span className="product__price--bold">
                {`$${product?.priceDiscount}`}
              </span>
              {product?.priceRegular && (
                <span className="product__price--grey">{`$${product?.priceRegular}`}</span>
              )}
            </>
          </div>

          <div className="product__btns">
            <Button
              text="Add to cart"
              product={{
                id: product?.id,
                name: product?.name,
                price: product?.priceDiscount || product?.priceRegular,
                img: mainImg,
              }}
            />

            <ButtonLike itemId={product?.id} />
          </div>

          <div className="product__stats">
            <p className="product__stat">
              <span className="product__stat--name">Screen</span>
              {product?.screen}
            </p>
            <p className="product__stat">
              <span className="product__stat--name">Capacity</span>
              {product?.capacity}
            </p>
            <p className="product__stat">
              <span className="product__stat--name">RAM</span>
              {product?.ram}
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
            {product?.description.map(({ title, text }) => (
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
              {product?.screen}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Resolution</span>
              {product?.resolution}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Processor</span>
              {product?.processor}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">RAM</span>
              {product?.ram}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Built in memory</span>
              {product?.capacity}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Camera</span>
              {product?.camera}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Zoom</span>
              {product?.zoom}
            </li>

            <li className="product__specs-item">
              <span className="product__specs-item--name">Ceel</span>
              {product?.cell.join(', ')}
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
