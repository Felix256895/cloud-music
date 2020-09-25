import React, { useContext } from 'react';
import { ctx } from 'context/';
import SubModule from 'components/SubModule';
import Card from 'components/Card';
import styles from './style.module.scss';
const data = [
  {
    name: '华语',
    path: '/home/song-list'
  },
  {
    name: '流行',
    path: '/home/song-list'
  },
  {
    name: '摇滚',
    path: '/home/song-list'
  },
  {
    name: '民谣',
    path: '/home/song-list'
  },
  {
    name: '电子',
    path: '/home/song-list'
  }
];

const Recommend = () => {
  const { provider } = useContext(ctx);
  const recommend = (provider && provider.recommends) || [];
  return (
    <div className={styles.recommend}>
      <SubModule title="热门推荐" list={data} more={'/home/song-list'} />
      <div className={styles.recommend_box}>
        {recommend.map((item: Global.CardRecommend) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Recommend);
