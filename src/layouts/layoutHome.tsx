import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

interface List {
  key: number;
  name: string;
  path: string;
}
interface Props {
  route: Global.Routes;
  location: any;
}

const TopList: List[] = [
  {
    key: 0,
    name: '发现音乐',
    path: '/home'
  },
  {
    key: 1,
    name: '我的音乐',
    path: '/my'
  },
  {
    key: 2,
    name: '朋友',
    path: '/friend'
  },
  {
    key: 3,
    name: '商城',
    path: '/store'
  },
  {
    key: 4,
    name: '音乐人',
    path: '/musicman'
  },
  {
    key: 5,
    name: '下载客户端',
    path: '/download'
  }
];
const SubTopList: List[] = [
  {
    key: 0,
    name: '推荐',
    path: '/home/recommend'
  },
  {
    key: 1,
    name: '排行榜',
    path: '/home/to-list'
  },
  {
    key: 2,
    name: '歌单',
    path: '/home/song-list'
  },
  {
    key: 3,
    name: '主播电台',
    path: '/home/anchor-station'
  },
  {
    key: 4,
    name: '歌手',
    path: '/home/singer'
  },
  {
    key: 5,
    name: '新上架',
    path: '/home/news'
  }
];

const Layout: React.FC<Props> = (props) => {
  const { route, location } = props;
  const VISIBLE = /^\/home\/.*$/.test(location.pathname);
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.header_warp}>
          <div className={styles.logo}>
            <Link to="/home" />
          </div>
          <div className={styles.nav}>
            {TopList.map((item) => {
              return (
                <div className={styles.nav_item} key={item.key}>
                  <NavLink activeClassName={styles.active} to={item.path}>
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
            <i className={styles.music_hot}></i>
          </div>
          <div className={styles.search}>
            <input
              className={styles.search_input}
              type="text"
              placeholder="音乐/视频/电台/用户"
            />
          </div>
          <Link to="/create" className={styles.create}>
            创作中心
          </Link>
          <span className={styles.login}>登录</span>
        </div>
        <div className={styles.subnav}>
          <div className={styles.subnav_container}>
            {VISIBLE && (
              <div className={styles.subnav_item}>
                {SubTopList.map((item) => (
                  <NavLink
                    key={item.key}
                    activeClassName={styles.active}
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default Layout;
