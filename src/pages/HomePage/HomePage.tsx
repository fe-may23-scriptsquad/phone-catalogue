import React from 'react';
import { SwiperPhones } from '../../components/SwiperPhones';
import { Category } from './components/Category';
import { Banner } from './components/Banner';

const tempData = [{
  linkTo: '/phones',
  title: 'Mobile phones',
}, {
  linkTo: '/tablets',
  title: 'Tablets',
}, {
  linkTo: '/accessories',
  title: 'Accessories',
}];

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1 className="homepage__header-title">
          Welcome to Nice Gadgets store!
        </h1>

        <Banner />
      </div>

      <div className="homepage__body">
        <SwiperPhones />

        <div className="homepage__categories">
          <h2 className="homepage__blocktitle">
            Shop by category
          </h2>

          <div className="homepage__categories-links">
            {tempData.map((category) => (
              <Category
                linkTo={category.linkTo}
                title={category.title}
                key={category.title}
              />
            ))}
          </div>
        </div>

        <SwiperPhones />
      </div>
    </div>
  );
};
