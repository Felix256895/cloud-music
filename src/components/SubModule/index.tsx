import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
type Item = {
  name: string;
  path: string;
};
interface Props {
  title: string;
  list: Item[];
  more: string;
}
const SubModule: React.FC<Props> = ({ title, list, more }) => {
  return (
    <div className={styles.sub}>
      <div className={styles.sub_title}>{title}</div>
      <ul className={styles.sub_list}>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`${item.path}/${item.name}`}>{item.name}</Link>
              {list.length !== index + 1 && <span>|</span>}
            </li>
          );
        })}
      </ul>
      <Link className={styles.sub_more} to={more}>
        更多
        <i className={styles.sub_icon}></i>
      </Link>
    </div>
  );
};

export default React.memo(SubModule);
