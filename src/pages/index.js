import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Summer Cook | Web Developer & Designer</title>
        <meta name="title" property="og:title" content="Summer Cook | Web Developer & Designer"></meta>
        <html lang={lang || 'en'} />
        <meta name="description" property="og:description" content="Check out my portfolio for more information :)"/>
        <meta name="image" property="og:image" content="https://i.ibb.co/vjBS2Yw/summercookdev.png"/>
      </Helmet>
      <App />
    </>
  );
};
