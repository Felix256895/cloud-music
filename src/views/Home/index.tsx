import React, { useContext, useEffect, Fragment } from 'react';
import { message, Spin } from 'antd';
import Carousel from './Carousel';
import { ctx } from 'context/';
import { banner } from 'api/';

export default function Home() {
  const { provider, setProvider } = useContext(ctx);
  useEffect(() => {
    banner()
      .then((res: any) => {
        const banners = (res && res.data && res.data.banners) || [];
        setProvider({ banners });
      })
      .catch((err: any) => {
        message.error(err);
      });
  }, []);
  return (
    <Fragment>
      <Spin spinning={true}>
        <Carousel />
      </Spin>
    </Fragment>
  );
}
