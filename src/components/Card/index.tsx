import React from 'react';
import Lazyload from 'react-lazyload';
import styles from './style.module.scss';

const Card = ({ name, picUrl, playCount }: Global.CardRecommend) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_container}>
        <Lazyload height={160}>
          <img
            className={styles.card_container_img}
            src={picUrl}
            alt={picUrl}
          />
        </Lazyload>
        <div className={styles.card_container_bottom}>
          <i></i>
          <span>{playCount}</span>
          <a href="/"></a>
        </div>
      </div>
      <p className={styles.card_name}>{name}</p>
    </div>
  );
};

export default React.memo(Card);
