import React from 'react';
import Lazyload from 'react-lazyload';
import styles from './style.module.scss';

interface Props {
  name: string;
  picUrl: string;
  playCount: number;
}

const Card: React.FC<Props> = ({ name, picUrl, playCount }) => {
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
