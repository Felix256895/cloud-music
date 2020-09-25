import React, { useContext, useEffect, Fragment, useState } from 'react';
import { message, Spin } from 'antd';
import Carousel from './Carousel';
import { ctx } from 'context/';
import { banner, personalized } from 'api/';
import Recommend from './Recommend';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const { provider, setProvider } = useContext(ctx);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const Banner = () => {
      setLoading(true);
      banner()
        .then((res: any) => {
          const banners = (res && res.data && res.data.banners) || [];
          setProvider(() => ({
            ...provider,
            banners
          }));
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
          setProvider((provider: any) => ({
            ...provider,
            recommends
          }));
          setLoading(false);
        })
        .catch((err: any) => {
          setLoading(false);
          message.error(err);
        });
    };
    if (provider.banners === undefined) {
      Banner();
    }
    if (provider.recommends === undefined) {
      Recommend();
    }
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
