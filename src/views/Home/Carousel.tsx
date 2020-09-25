import React, { useContext, memo } from 'react';
import Slider from 'react-slick';
import { ctx } from 'context/';
import styles from './style.module.scss';

interface Settings {
  dots: boolean;
  lazyLoad: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
}

interface Item {
  targetId: number;
  imageUrl: string;
}
const settings: Settings | any = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2
};

const Banner = () => {
  const { provider } = useContext(ctx);
  const banners = (provider && provider.banners) || [];
  return (
    <Slider {...settings} className={styles.slider}>
      {banners.map((item: Item) => {
        return (
          <div className={styles.carousel} key={item.targetId}>
            <a className={styles.carousel_container} href={item.imageUrl}>
              <img
                className={styles.carousel_img}
                src={item.imageUrl}
                alt={item.imageUrl}
              />
            </a>
          </div>
        );
      })}
    </Slider>
  );
};
export default memo(Banner);
