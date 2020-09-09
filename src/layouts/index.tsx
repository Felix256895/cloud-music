import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const TopList = [
  {
    key: 0,
    name: '发现音乐',
    path: '/home',
  },
  {
    key: 1,
    name: '我的音乐',
    path: '/my',
  },
  {
    key: 2,
    name: '朋友',
    path: '/friend',
  },
  {
    key: 3,
    name: '商城',
    path: '/store',
  },
  {
    key: 4,
    name: '音乐人',
    path: '/musicman',
  },
  {
    key: 5,
    name: '下载客户端',
    path: '/download',
  },
];

const Layout: React.FC<{ route: Global.Routes }>= ({ route }) => {
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
            <div className={styles.subnav_item}>
              <NavLink activeClassName={styles.active} to="/">
                推荐
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default Layout;
