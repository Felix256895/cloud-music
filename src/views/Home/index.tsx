import React, { useContext, useEffect, Fragment, useState } from 'react';
import { message, Spin } from 'antd';
import Carousel from './Carousel';
import { ctx } from 'context/';
import { banner, personalized } from 'api/';
import Recommend from './Recommend';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const { setProvider } = useContext(ctx);
  const [loading, setLoading] = useState<boolean>(false);
  const dataSource: any = {};
  useEffect(() => {
    const Banner = () => {
      setLoading(true);
      banner()
        .then((res: any) => {
          const banners = (res && res.data && res.data.banners) || [];
          dataSource.banners = banners;
          setProvider({ banners });
          setLoading(false);
        })
        .catch((err: any) => {
          setLoading(false);
          message.error(err);
        });
    };
    const Recommend = () => {
      personalized({ limit: 10 })
        .then((res: any) => {
          const recommends = (res && res.data && res.data.result) || [];
          const data = Object.assign({}, dataSource, {
            recommends: recommends
          });
          setProvider(data);
          setLoading(false);
        })
        .catch((err: any) => {
          setLoading(false);
          message.error(err);
        });
    };
    Banner();
    Recommend();
  }, []);
  return (
    <Fragment>
      <Spin spinning={loading}>
        <Carousel />
        <Recommend />
      </Spin>
    </Fragment>
  );
}
