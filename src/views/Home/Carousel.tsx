import React, { useContext } from 'react';
import { Carousel } from 'antd';
import { ctx } from 'context/';
import styles from './style.module.scss';

export default function () {
  const { provider } = useContext(ctx);
  const banners = (provider && provider.banners) || [];
  return (
    <Carousel autoplay>
      {banners.map((item: any) => {
        return (
          <div className={styles.carousel} key={item.targetId}>
            <a className={styles.carousel_container} href="">
              <img
                className={styles.carousel_img}
                src={item.imageUrl}
                alt={item.imageUrl}
              />
            </a>
          </div>
        );
      })}
    </Carousel>
  );
}
