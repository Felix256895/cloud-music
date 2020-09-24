import React, { useContext, memo } from 'react';
import Slider from 'react-slick';
import { ctx } from 'context/';
import styles from './style.module.scss';

const Banner = () => {
  const { provider } = useContext(ctx);
  const banners = (provider && provider.banners) || [];
  const settings: any = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <Slider {...settings} className={styles.slider}>
      {banners.map((item: any) => {
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
